const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const bcrypt = require('bcrypt');
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
    let user = await UserController.findUser({username, password});
    res.status(404).send(user);
})

module.exports = router

/*
Postman:
{
    "name":"aaa",
    "username":"aaa",
    "password":"aaaa"
}
 */