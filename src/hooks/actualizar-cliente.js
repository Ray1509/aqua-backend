// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, method, result, params } = context;
    const actualizacion = async (e) => {
      if (!e.clienteId) {
        return {
          ...e,
          cliente: {},
        };
      }
      const cliente = await app.service("cliente").patch(e.clienteId, {
        ultima_lectura: e.lectura_actual,
      });
      return {
        ...e,
        cliente,
      };
    };

    context.result = await actualizacion(result);

    return context;
  };
};
