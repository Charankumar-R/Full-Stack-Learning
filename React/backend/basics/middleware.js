// middleware.js
// Basic Express middleware example
function middleware(req, res, next) {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
}

module.exports = middleware;