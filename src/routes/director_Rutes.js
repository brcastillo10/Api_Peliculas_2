const express = require("express");
const router = express.Router();
const direcontroller = require("../controller/directorController");

//Ver todos los directores /directors
router.get('/', async (req, res)=>{
    res.send(await direcontroller.GetDirector())
});

//Insertar director; /directors
router.post('/', async (req, res)=>{
    try {
        const NuevoDire = (await direcontroller.CreateDirector(req.body));
        res.status(201).send(NuevoDire);
    } catch(err){
        res.status(500).send(err)
    }
});

//Eliminar director; /directors/:id

router.delete('/:id', async (req, res) => {
    try{
        const { id }  = req.params;
        const eliminar = await direcontroller.DeleteDirector(id);
        if (eliminar) {
            return res.status(200).send('Director Eliminado con exito');
        } else {
            throw new Error('Director no encontrado');
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
})

//Actualizar director; /directors/:id

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, fechanacimiento } = req.body;

        const resultado = await direcontroller.UpdateDirector(id, { nombre, fechanacimiento });
        if (resultado[0] === 0) {
            return res.status(404).send({ message: 'Director no encontrado' });
        }
        res.status(200).send({ message: 'Director actualizado'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;

/**
 * Postman:
{
  "nombre": "aa",
  "fechanacimiento": "2000-01-01T00:00:00.000Z"
}
 */