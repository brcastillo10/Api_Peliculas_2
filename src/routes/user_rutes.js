const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()


// Ver usuarios /auth/register
router.post('/register', async (req, res)=>{
    const {name, username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let response = await UserController.CreateUser({name, username, password: hashedPassword});
    res.status(200).send(`Usuario ${name} registrado correctamente ID ${response}`);
});

//Ver el login /auth/login

router.post('/login', async(req, res)=>{
    const {username, password}=req.body;
    let pass = await UserController.findUser({username, password});
    if (pass){
        const token = jwt.sign({username}, process.env.JWT_TOKEN_SECRET, {expiresIn: '1h'})
        res.json({token});
    } else{
        res.status(401).send('Usuario o contraseña incorrecta');
    }
});

module.exports = router

/*
Postman:
{
    "name":"aaa",
    "username":"aaa",
    "password":"aaaa"
}
 */