const Joi = require("joi");

exports.signupSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    ),
});

exports.signinSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    ),
});

exports.acceptCodeSchema = Joi.object({
  email: Joi.string().email().required(),
  providedCode: Joi.string().required(),
});

exports.changePasswordSchema = Joi.object({
  newPassword: Joi.string()
    .min(6)
    .required()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    ),
  oldPassword: Joi.string()
    .min(6)
    .required()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    ),
});
