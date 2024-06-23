const { Where } = require("sequelize/lib/utils");
const db = require("../db/models");
const { where } = require("sequelize");
const model = require("../db/models/generadopeliculas")(db.sequelize, db.Sequelize);


//5
module.exports.Getpeliculas = async () =>{
    const response = await model.findAll();
    return response;
}

//6
module.exports.CreatePelicula = async(data) => {
    const response = await db.Generadopeliculas.create(data);
    return response;
}
//7
module.exports.DeletePelicula = async(id) =>{
    const response = await db.Generadopeliculas.destroy({
        where: {id}
    });
    return response;
}
//8
module.exports.UpdatePelicula = async(id, data) => {
    const response = await db.Generadopeliculas.update(
        {
            titulo: data.titulo,
            Año_publicacion: data.Año_publicacion,
            descripcion: data.descripcion,
            categoria: data.categoria,
            calificacion: data.calificacion
        },
        {
            where:{ id }
        }
    );
    return response;
};



