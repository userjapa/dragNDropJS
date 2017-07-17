"use strict";

// container is a service registry
var container = require("./container");
var infra = require("..")();

infra.use(require("./initializers/database"));
infra.use(require("./initializers/express"));
infra.use(require("./initializers/routes"));

infra.start(container, function(err) {
  if (err) throw err;

  var server = container.server;
  var port = container.config.server.port;
  server.listen(port);
  console.log("browse localhost:", port);
});
