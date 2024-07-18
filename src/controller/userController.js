const db = require("../db/models");
const model = require("../db/models/user")(db.sequelize, db.Sequelize);
const bcrypt = require("bcrypt")

//Modelo para crear un usuario
module.exports.CreateUser = async (data) =>{
    const response = await model.create({
        name: data.name,
        username: data.username,
        password: data.password
    });
    return response;
}

module.exports.findUser = async (data)=>{
    const users = await model.findAll({
        where: {
            username: data.username
        }
    });

    if(users.length > 0){
        let pass = await bcrypt.compare(data.password, users[0].password)
      //  console.log(pass);
        return pass
    }

   // console.log(user)
    return false;
}