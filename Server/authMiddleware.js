const express = require("express")
const router = express.router()
    


const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization").split(' ')[1];
    console.log(token, "token")
      
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
      
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        console.log(decoded.user, "user ID")
        next();
        } catch (err) {
          res.status(401).json({ message: 'Token is not valid' });
        }
      };
      
modules.exports =  authMiddleware