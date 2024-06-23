const express = require("express");
const router = express.Router();
const estudiocontroller = require("../controller/estudioControlle");

//Ver Estudio de produccion; /estudio
router.get('/', async (req, res)=>{
    res.send(await estudiocontroller.GetEstudio())
});

//Insertar Estudio de producción; /estudio
router.post('/', async (req, res)=>{
    try {
        const NuevoEstudio = (await estudiocontroller.CreateEstudio(req.body));
        res.status(201).send(NuevoEstudio);
    } catch(err){
        res.status(500).send(err)
    }
});

//Eliminar Estudio de producción; /estudio/:id

router.delete('/:id', async (req, res) => {
    try{
        const { id }  = req.params;
        const eliminar = await estudiocontroller.DeleteEstudio(id);
        if (eliminar) {
            return res.status(200).send('Estudio de producción Eliminado con exito');
        } else {
            throw new Error('Estudio de producción no encontrado');
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
})

//Actualizar Estudio de producción; /estudio/:id

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, añofundacion, descripcion } = req.body;

        const resultado = await estudiocontroller.UpdateEstudio(id, { nombre, añofundacion, descripcion });
        if (resultado[0] === 0) {
            return res.status(404).send({ message: 'Estudio de producción no encontrado' });
        }
        res.status(200).send({ message: 'Estudio de producción actualizado con exito'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;

/**
 * Postman:
{
  "nombre": "aa",
  "añofundacion": 2024,
  "descripcion": "aaa"
}
 */