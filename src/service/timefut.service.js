const { timefut } = require('../models/index')

const list = async () => {
  return item = await timefut.findAll()
}

module.exports = {
  list
}