module.exports = function(sequelize, DataTypes) {
  var Bar = sequelize.define("Bar", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  })
  return Bar
}
