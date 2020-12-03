// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const consumo = sequelizeClient.define(
    "consumo",
    {
      lectura_actual: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      consumo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      costo_consumo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      costo_alcantarillado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      costo_multa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      mes_proceso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_pago: {
        type: DataTypes.DATE,
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
  consumo.associate = function (models) {
    const { cliente } = models;
    consumo.belongsTo(cliente);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return consumo;
};
