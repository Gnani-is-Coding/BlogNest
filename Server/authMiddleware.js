const jwt = require("jsonwebtoken");
require("dotenv").config()

// console.log( process.env.JWT_SECRET)

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) return res.status(401).json({ message: err.message });

      req.payload = payload;
      next();
    });
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;


// bcrypt.hash(pass,salt)
// bcrypt.compare(pass, oldPass)

// jwt.sign(payload, secreteToken)

// jwt.verify(token, secreteToken, (err, payload) => {

// })

