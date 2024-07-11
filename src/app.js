//Punto de entrada
const express = require('express');
require("dotenv").config()
const port = process.env.APP_PORT
const app = express();
const router = require('./routes');
const path = require('path');

app.use(express.json());

app.use('/peliculas', router.PeliculaRoutes);

app.use('/director', router.DirectorRutes);

app.use('/studioproduction',router.EstudioRutes);

app.use('/auth', router.UserRutes);

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});

app.listen(port, ()=>{
    console.log( `My server Online in port ${process.env.APP_PORT} http://localhost:${process.env.APP_PORT}`)
});





//LA clase anterior

/*
app.get('/peliculas', async (req,res)=>{
    const pelicula = await models.pelicula.findAll();
    res.send(pelicula);
});

app.post('/peliculas', async (req,res)=>{
    const {titulo, Año_publicacion, descripcion, categoria, calificaion} = req.body
    const pelicula = await models.pelicula.create({titulo, Año_publicacion, descripcion, categoria, calificaion})
    res.send(pelicula) 
})

app.put('/peliculas/:id', async (req, res)=>{
    const peliID= req.params.peliID;
    const {titulo, Año_publicacion, descripcion, categoria, calificaion} = req.body
    const actualizarpelis = await models.pelicula.update(peliID, {titulo, Año_publicacion, descripcion, categoria, calificaion},{new:true});
    if (!actualizarpelis){
        return res.send("Error!, No se actualizo las peliculas")
    }
    res.send(actualizarpelis);
});

app.delete('/peliculas/:id', async (req,res)=>{
    const peliID = req.params.peliID;
    const eliminarpeli = await models.pelicula.destroy(peliID);
    if (!eliminarpeli){
        return res.send("No se pudo eliminar la pelicula")
    }
    res.send(eliminarpeli);
});

 */



//req= Peticion del cliente
//Res= Respuesta desde el servidor

//Function ()={
//
//}

