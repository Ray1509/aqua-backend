// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const cliente = sequelizeClient.define(
    "cliente",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      ci: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ultima_lectura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      codigoMedidor: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
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
  cliente.associate = function (models) {
    const { zona, consumo } = models;
    cliente.belongsTo(zona);
    cliente.hasMany(consumo);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cliente;
};
