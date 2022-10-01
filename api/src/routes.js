const express = require('express')
const routes = express.Router()

const GrupoController = require('./controler/GrupoController')

routes.post('/grupo', GrupoController.store)

routes.get('/grupo', GrupoController.searchAll)

module.exports = routes
