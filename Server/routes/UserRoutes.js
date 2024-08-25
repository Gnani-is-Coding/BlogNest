const express = require("express")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const router = express.Router()

router.post("/register", async (req, res) => {
    const {username,password} = req.body

    try{
        const existingUser = await User.findOne({username})
        
        if (existingUser){
            res.status(400).json({message:"username already exist"})
        } else {
            const saltNum = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, saltNum)

            const newUser = await User.create({username, password: hashedPassword})
            console.log(newUser, "new User")
            
            const payload = {user: {username}}
            const jwtToken = jwt.sign(payload, process.env.JWT_SECRET)

            res.send({message: "User registered Successfully", username, token:jwtToken}) 
        }
    } catch(e) {
       res.status(500).send({message: e.message})
    }
})


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const payload = { user: { username: user.username } };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET);  //#TODO{ expiresIn: "1h" }

    return res.json({ username: user.username, token });

  } catch (e) {
    console.error(e.message);
    return res.status(500).json({ message: e.message });
  }
});

module.exports = router;


module.exports = router