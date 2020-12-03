// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, method, result, params } = context;
    const detalle = async (e) => {
      if (!params.usuario.id) {
        return {
          ...e,
          usuario: {},
        };
      }
      const usuario = await app.service("usuario").get(params.usuario.id, {
        query: {
          $select: ["id", "nombre", "apellido", "usuario"],
        },
      });
      return {
        ...e,
        usuario,
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
