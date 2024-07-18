//Punto de entrada
const express = require('express');
require("dotenv").config()
const port = process.env.APP_PORT
const app = express();
const router = require('./routes');
const path = require('path');
const jwt = require('jsonwebtoken');
app.use(express.json());

//Middleware del token

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: 'No se proporcionó el token.' });
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'Token malformado.' });
    }
  
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({ message: 'Token Invalido.' });
      }
      req.user = user;
      next();
    });
  };


//Rutas

app.use('/peliculas', authenticateToken , router.PeliculaRoutes);

app.use('/director', authenticateToken ,router.DirectorRutes);

app.use('/studioproduction', authenticateToken,router.EstudioRutes);

app.use('/auth', router.UserRutes);

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});

app.listen(port, ()=>{
    console.log( `My server Online in port ${process.env.APP_PORT} http://localhost:${process.env.APP_PORT}`)
});





//LA clase anterior
/*
POSTMAN:

acceder a la ruta protegida.

en Headers poner:

Key: Authorization

Value: Bearer <TOKEN>
*/



//req= Peticion del cliente
//Res= Respuesta desde el servidor

//Function ()={
//
//}

