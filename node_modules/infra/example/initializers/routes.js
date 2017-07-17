"use strict";

exports.description = "Express routes";

exports.init = function(container, cb) {
  var app = container.app;

  app.get("/", function(req, res) {
    res.send("<h2>Hello world!</h2>");
  });

  cb();
};
