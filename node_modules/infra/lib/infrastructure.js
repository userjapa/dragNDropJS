'use strict';

var isNode = typeof window === 'undefined';

/**
 * Creates an infrastructure instance to start an app.
 *
 * @param {object} [log] - A log function. Defaults to `console.log`.
 */
function Infrastructure(log) {
  this.log = (typeof log === 'function') ? log : console.log;
  this.initializers = [];
}

/**
 * Use middleware.
 *
 * @param {object} initializer - An object with desription and init function.
 */
Infrastructure.prototype.use = function(initializer) {
  if (!initializer.description) throw new Error('Missing `description` property');
  if (!initializer.init) throw new Error('Missing `init` function');
  this.initializers.push(initializer);
};

/**
 * Starts the app by executing a series of initilizers.
 *
 * @param {object} container - A registry to register and retrieve objects used
 *                             by initializers in the chain.
 * @param {function} cb Final callback `function(err, container)`.
 */
Infrastructure.prototype.start = function(container, cb) {
  if (typeof container === 'function') {
    cb = container;
    var Container = require('./container');
    container = new Container();
  }

  var initializers = this.initializers;
  var log = this.log;
  var len = initializers.length;

  function series(i) {
    if (i >= len) return cb(null, container);

    var initializer = initializers[i];

    log('Initializing', initializer.description);
    initializer.init(container, function(err) {
      if (err) {
        if (err.message) {
          err.message = initializer.description + ' - ' + err.message;
        } else if (typeof err === 'string') {
          err = 'Error: ' + initializer.description + ' - ' + err;
        }
        return cb(err, container);
      }
      setTimeout(function() {
        series(i + 1);
      }, 0);
    });
  }
  series(0);
};

// if (typeof window === 'undefined') {
//   var fs = require('fs');

//   var getFiles = function(path) {
//     return fs.readdirSync(path).filter(function (file) {
//       var filename = path + '/' + file;
//       return filename[0] !== '_' && fs.statSync(filename).isFile();
//     });
//   };

//   /**
//    * Use all middleware from directory sorted by name.
//    *
//    * @param {object} initializer - An object with desription and init function.
//    */
//   Infrastructure.prototype.useDir = function(dir) {
//     var self = this;
//     var files = getFiles(dir).sort();
//     files.forEach(function(file) {
//       var initializer = require(file);
//       self.use(require(file));
//       self.initializers.push(initializer);
//     });
//   };
// }

module.exports = function(log) {
  return new Infrastructure(log);
};

