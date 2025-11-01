const { sign, JsonWebTokenError } = require("jsonwebtoken");
const {
  signupSchema,
  signinSchema,
  acceptCodeSchema,
  changePasswordSchema,
} = require("../middlewares/validator");
const User = require("../models/userModel");
const { doHash, doHashValidation, hmacProcess } = require("../utils/hashing");
const jwt = require("jsonwebtoken");
const transport = require("../middlewares/sendMail");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = signupSchema.validate({ email, password });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await doHash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    const result = await newUser.save();
    result.password = undefined;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = signinSchema.validate({ email, password });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }
    const existingUser = await User.findOne({ email }).select("+password");
    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "User does not exists, Need to Create a new Account",
      });
    }

    const result = await doHashValidation(password, existingUser.password);
    if (!result) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "3h",
      }
    );

    res
      .cookie("Authorization", "Bearer " + token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        token,
        message: "User logged in successfully",
        data: {
          userId: existingUser._id,
          email: existingUser.email,
          verified: existingUser.verified,
        },
      });
  } catch (error) {
    console.log(error);
  }
};

exports.signout = (req, res) => {
  res.clearCookie("Authorization").status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

exports.sendVerificationCode = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exists!" });
    }
    if (existingUser.verified) {
      return res
        .status(400)
        .json({ success: false, message: "User already verified!" });
    }

    const codeValue = Math.floor(100000 + Math.random() * 900000).toString();
    let info = await transport.sendMail({
      from: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      to: existingUser.email,
      subject: "Verification Code",
      html: `<h1>Your verification code is ${codeValue}</h1>`,
      text: `Your verification code is ${codeValue}`,
    });

    if (info.accepted[0] === existingUser.email) {
      const hashedCodeValue = hmacProcess(
        codeValue,
        process.env.NODE_CODE_SENDING_EMAIL_SECRET
      );
      existingUser.verificationCode = hashedCodeValue;
      existingUser.verificationCodeValidation = Date.now();
      await existingUser.save();
      return res.status(200).json({
        success: true,
        message: "Verification code sent successfully!",
      });
    }
    res.status(400).json({ success: true, message: "Code sent Failed!" });
  } catch (error) {
    console.error("Error sending verification code:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.verifyVerificationCode = async (req, res) => {
  const { email, providedCode } = req.body;
  try {
    const { error, value } = acceptCodeSchema.validate({ email, providedCode });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const codeValue = providedCode.toString();
    const existingUser = await User.findOne({ email }).select(
      "+verificationCode +verificationCodeValidation"
    );
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exists!" });
    }
    if (existingUser.verified) {
      return res
        .status(400)
        .json({ success: false, message: "User already verified!" });
    }
    if (
      !existingUser.verificationCode ||
      !existingUser.verificationCodeValidation
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Verification code not sent!" });
    }

    if (Date.now() - existingUser.verificationCodeValidation > 5 * 60 * 1000) {
      return res
        .status(400)
        .json({ success: false, message: "Verification code expired!" });
    }
    const hashedCodeValue = hmacProcess(
      codeValue,
      process.env.HMAC_VERIFICATION_CODE_SECRET
    );

    if (hashedCodeValue === existingUser.verificationCode) {
      existingUser.verified = true;
      existingUser.verificationCode = undefined;
      existingUser.verificationCodeValidation = undefined;
      await existingUser.save();
      return res.status(200).json({
        success: true,
        message: "User verified successfully!",
      });
    }
    return res
      .status(400)
      .json({ success: false, message: "Unexpected Error!!!" });
  } catch (error) {
    console.log(error);
  }
};

exports.changePassword = async (req, res) => {
  const { userId, verified } = req.user;
  const { oldPassword, newPassword } = req.body;
  try {
    const { error, value } = changePasswordSchema.validate({
      oldPassword,
      newPassword,
    });
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    if (!verified) {
      return res
        .status(401)
        .json({ success: false, message: "error." });
    }

    const existingUser = await User.findOne({_id:userId}).select('+password')
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }
    const result = await doHashValidation(oldPassword, existingUser.password);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const hashedPassword = await doHash(newPassword, 12);
    existingUser.password = hashedPassword
    await existingUser.save();
    return res.status(200).json({succcess : true, message: "Password changed successfully!"});
  } catch (error) {
    console.log(error);
  }
}