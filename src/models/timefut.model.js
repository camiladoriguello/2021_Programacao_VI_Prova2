module.exports = (sequelize, DataTypes) => {
  const Timefut = sequelize.define('timefut', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    estado: DataTypes.STRING,
    sitetime: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })

  return Timefut
}