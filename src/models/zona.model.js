// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const zona = sequelizeClient.define(
    "zona",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  zona.associate = function (models) {
    const { cliente } = models;
    zona.hasMany(cliente);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return zona;
};
