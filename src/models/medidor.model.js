// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const medidor = sequelizeClient.define(
    "medidor",
    {
      codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      precio: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      saldo: {
        type: DataTypes.INTEGER,
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
  medidor.associate = function (models) {
    const { cliente, pago_medidor } = models;
    medidor.hasOne(cliente);
    medidor.hasMany(pago_medidor);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return medidor;
};
