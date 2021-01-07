// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, method, result, params } = context;
    const detalle = async (e) => {
      if (!e.medidorId) {
        return {
          ...e,
          medidor: {},
        };
      }
      const medidor = await app.service("medidor").get(e.medidorId);
      return {
        ...e,
        medidor,
      };
    };

    if (method === "find") {
      context.result.data = await Promise.all(result.data.map(detalle));
    } else {
      context.result = await detalle(result);
    }
    return context;
  };
};
