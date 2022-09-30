const { Model, DataTypes } = require('sequelize');

class Grupo extends Model {
    static init(sequelize) {
        super.init({
            nameA: DataTypes.STRING,
            emailA: DataTypes.STRING,
            pokemon1A: DataTypes.STRING,
            pokemon2A: DataTypes.STRING,
            pokemon3A: DataTypes.STRING,

            nameB: DataTypes.STRING,
            emailB: DataTypes.STRING,
            pokemon1B: DataTypes.STRING,
            pokemon2B: DataTypes.STRING,
            pokemon3B: DataTypes.STRING
        }, {
            sequelize
        })
    }
}
module.exports = Grupo;