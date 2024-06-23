const db = require("../db/models");
const model = require("../db/models/generadorestudio")(db.sequelize, db.Sequelize);

//9
module.exports.GetEstudio = async () => {
    const response = await model.findAll();
    return response
}

//10
module.exports.CreateEstudio = async(data) => {
    const response = await db.generadorestudio.create(data);
    return response;
}
//11
module.exports.DeleteEstudio = async(id) =>{
    const response = await db.generadorestudio.destroy({
        where: {id}
    });
    return response;
}
//12
module.exports.UpdateEstudio = async(id, data) => {
    const response = await db.generadorestudio.update(
        {
            nombre: data.nombre,
            añofundacion: data.añofundacion,
            descripcion: data.descripcion
        },
        {
            where:{ id }
        }
    );
    return response;
};
