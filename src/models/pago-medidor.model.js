// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const pagoMedidor = sequelizeClient.define(
    "pago_medidor",
    {
      pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: true,
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
  pagoMedidor.associate = function (models) {
    const { medidor } = models;
    pagoMedidor.belongsTo(medidor);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pagoMedidor;
};
