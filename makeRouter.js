const routesToHash = (routes = []) => {
  return routes.reduce((route, hash) => {
    hash[route.path] = route;
    return hash;
  }, {});
};

const makeRouter = routes => {
  const routesHash = routesToHash(routes);
  return {
    serve(path) {
      if (!routesHash[path]) {
        throw new Error(`Unknown route: ${path}`)
      }
      return routesHash[path].handler;
    }
  }
}

module.exports = makeRouter;
