const { authenticate } = require("@feathersjs/authentication").hooks;

const clienteHook = require("../../hooks/cliente-hook");
const obtenerMedidor = require("../../hooks/obtener-medidor");

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
    all: [clienteHook()],
    find: [obtenerMedidor()],
    get: [],
    create: [],
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
