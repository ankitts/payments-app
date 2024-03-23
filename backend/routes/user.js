const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User, Account } = require('../db');
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');
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

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

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

const updateBody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional(),
})

router.put('/', authMiddleware, async (req, res)=>{
    const { success } = updateBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message: "Wrong Inputs"
        })
    }

    await User.updateOne({_id: req.userId}, req.body);

    res.json({
        message: "Updated successfully!"
    })
})

router.get('/currentUser', authMiddleware, async(req,res)=>{
    const currentUser = await User.findOne({_id: req.userId});
    res.json({
        currentUser
    })
})

//to search users
router.get('/bulk', async (req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                $regex: RegExp(filter, 'i') // i for case-insensitive search
            }
        }, {
            lastName: {
                $regex: RegExp(filter, 'i')
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;