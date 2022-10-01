const Grupo = require('../models/Grupo')

module.exports = {
  async searchAll(req, res) {
    const grupos = await Grupo.findAll()
    return res.json(grupos)
  },

  async store(req, res) {
    const {
      nameA,
      emailA,
      pokemon1A,
      pokemon2A,
      pokemon3A,
      nameB,
      emailB,
      pokemon1B,
      pokemon2B,
      pokemon3B
    } = req.body

    const grupo = await Grupo.create({
      nameA,
      emailA,
      pokemon1A,
      pokemon2A,
      pokemon3A,
      nameB,
      emailB,
      pokemon1B,
      pokemon2B,
      pokemon3B
    })

    return res.json(grupo)
  }
}
