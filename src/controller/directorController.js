const db = require("../db/models");
const model = require("../db/models/generadodirector")(db.sequelize, db.Sequelize);
//1
module.exports.GetDirector = async () => {
    const response = await model.findAll();
    return response
}
//2
module.exports.CreateDirector = async(data) => {
    const response = await db.generadodirector.create(data);
    return response;
}
//3
module.exports.DeleteDirector = async(id) =>{
    const response = await db.generadodirector.destroy({
        where: {id}
    });
    return response;
}
//4
module.exports.UpdateDirector = async(id, data) => {
    const response = await db.generadodirector.update(
        {
            nombre: data.nombre,
            fechanacimiento: data.fechanacimiento
        },
        {
            where:{ id }
        }
    );
    return response;
};


