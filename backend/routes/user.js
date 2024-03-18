const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { JWT_SECRET } = require('../config');
const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})


router.get('/', (req, res)=>{
    res.send('user page')
})

router.post('/signup', async (req, res)=>{

    const { success } = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "User already exists"
        })
    }

    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    })

    const userId = user._id;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
    
    //"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY3ZDNkMWQyMDEwYTE1NmY2NTY5YzMiLCJpYXQiOjE3MTA3NDA0MzN9.RclGyPyb1C_8l5X786ZEJ73X29OlMhpLyEn4nNfs2RI"
})


const signinBody = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post('/signin', async (req,res)=>{
    const { success } = signinBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(!user){
        res.status(411).json({
            message: "User does not exist."
        })
    }

    const userId = user._id;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token: token
    })
})

module.exports = router;