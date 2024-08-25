const express = require("express")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const router = express.Router()

router.post("/register", async (req, res) => {
    const {username, email, password} = req.body

    try{
        const existingUser = await User.findOne({$or: [{username}, {email}]})
        
        if (existingUser){
            res.status(400).json("username or email already exist")
        } else {
            const saltNum = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, saltNum)

            const newUser = await User.create({username, email, password: hashedPassword})
            console.log(newUser, "new User")
            
            const payload = {user: {username}}
            const jwtToken = jwt.sign(payload, process.env.JWT_SECRET_TOKEN)

            res.send({message: "User registered Successfully", user: username, token:jwtToken}) 
        }
    } catch(e) {
        res.status(500).send({error: e.message})
    }
})

router.post("/login", async(req, res) => {
    const {username, password} = req.body

    try{
        const user = await User.findOne({ username });
        if (!user) {
            res.status(400).json({message:'Invalid username or email'});

        } else {
            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {
                const payLoad = {user: {username: user.username}}
                const jwtToken = jwt.sign(payLoad, process.env.JWT_SECRET_TOKEN, (err, token) => {
                    if (err) throw err
                    res.json({username:user.username, token})
                })

            } else {
                res.status(400).json({message: "Invalid Password"})
            }
        }

    } catch(e) {
        res.status(500).send({error: e.message})
    }
})

module.exports = router