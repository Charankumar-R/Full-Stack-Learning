// JWT authentication example
// This module handles the generation and verification of JSON Web Tokens (JWT) 
// for authenticating users in the application. It exports functions to sign 
// and verify tokens using a secret key.

const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your secret key

/**
 * Generates a new JWT for a given user ID.
 * @param {string} userId - The ID of the user.
 * @returns {string} The generated JWT.
 */
function generateToken(userId) {
    return jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });
}

/**
 * Verifies the given JWT and returns the decoded payload.
 * @param {string} token - The JWT to verify.
 * @returns {Object} The decoded payload of the token.
 * @throws Will throw an error if the token is invalid or expired.
 */
function verifyToken(token) {
    return jwt.verify(token, secretKey);
}

// authJWT.js
// Example JWT authentication middleware
function authenticateJWT(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
}

module.exports = {
    generateToken,
    verifyToken,
    authenticateJWT
};