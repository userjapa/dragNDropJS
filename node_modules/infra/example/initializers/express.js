"use strict";

exports.description = "Express";

exports.init = function(container, cb) {
  var app = require("express")();
  var server = require("http").Server(app);

  // register with container for downstream initializers
  container.app = app;
  container.server = server;
  cb();
};
