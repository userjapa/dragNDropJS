"use strict";

exports.description = "Database";

exports.init = function(container, cb) {
  var config = container.config;
  console.log("initializing database with ", config.db.connection);
  cb();
};
