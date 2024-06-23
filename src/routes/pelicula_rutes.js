const express = require('express');
const router = express.Router();
const peliController = require('../controller/peliculaController');
const { Model } = require('sequelize');


// Ver peliculas /peliculas
router.get('/', async (req, res)=>{
    res.send(await peliController.Getpeliculas())
});


//Insertar peliculas; /peliculas
router.post('/', async (req, res)=>{
    try {
        const NuevaPeli = (await peliController.CreatePelicula(req.body));
        res.status(201).send(NuevaPeli);
    } catch(err){
        res.status(500).send(err)
    }
});

//Eliminar pelicula; /peliculas/:id

router.delete('/:id', async (req, res) => {
    try{
        const { id }  = req.params;
        const eliminar = await peliController.DeletePelicula(id);
        if (eliminar) {
            return res.status(200).send('Pelicula Eliminada con exito');
        } else {
            throw new Error('Pelicula no encontrada');
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
})

//Actualizar pelicula; /peliculas/:id

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, Año_publicacion, descripcion, categoria, calificacion } = req.body;

        const resultado = await peliController.UpdatePelicula(id, { titulo, Año_publicacion, descripcion, categoria, calificacion });
        if (resultado[0] === 0) {
            return res.status(404).send({ message: 'Pelicula no encontrada' });
        }
        res.status(200).send({ message: 'Pelicula actualizado'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
/**
 * Postman:
{
  "titulo": "aa",
  "Año_publicacion": 2024,
  "descripcion": "aaa",
  "categoria": "aaa",
  "calificacion": 10
}
 */