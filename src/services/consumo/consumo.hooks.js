const { authenticate } = require("@feathersjs/authentication").hooks;

const obtenerCliente = require("../../hooks/obtener-cliente");
const obtenerUsuario = require("../../hooks/obtener-usuario");

const actualizarCliente = require("../../hooks/actualizar-cliente");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [obtenerCliente(), obtenerUsuario()],
    find: [],
    get: [],
    create: [actualizarCliente()],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
