const usuario = require("./usuario/usuario.service.js");
const cliente = require("./cliente/cliente.service.js");
const zona = require("./zona/zona.service.js");
const consumo = require('./consumo/consumo.service.js');
const precioConsumo = require('./precio-consumo/precio-consumo.service.js');
const adicionales = require('./adicionales/adicionales.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usuario);
  app.configure(cliente);
  app.configure(zona);
  app.configure(consumo);
  app.configure(precioConsumo);
  app.configure(adicionales);
};
