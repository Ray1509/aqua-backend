// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, method, result, params } = context;
    const informacion = async (e) => {
      if (!e.zonaId) {
        return {
          ...e,
          zona: {},
        };
      }
      const zona = await app.service("zona").get(e.zonaId);
      return {
        ...e,
        zona,
      };
    };
    if (method === "find") {
      context.result.data = await Promise.all(result.data.map(informacion));
    } else {
      context.result = await informacion(result);
    }

    return context;
  };
};
