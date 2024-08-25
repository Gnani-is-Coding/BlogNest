const jwt = require("jsonwebtoken");
require("dotenv").config()

// console.log( process.env.JWT_SECRET)

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(' ')[1];
  // console.log(token, "token")
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) return res.status(401).json({ error: err.message });

      req.payload = payload;
      next();
    });
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
