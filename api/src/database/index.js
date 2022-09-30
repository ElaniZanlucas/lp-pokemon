const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Grupo = require('../models/Grupo');

const connection = new Sequelize(dbConfig);

Grupo.init(connection);

module.exports = connection;