const timefutService = require('../service/timefut.service')

const list = async (req, res) => {
  const item = await timefutService.list()
  res.send(item)
}

module.exports = {
  list
}