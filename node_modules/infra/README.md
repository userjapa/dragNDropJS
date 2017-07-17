# infra

Infrastructure provides simple, middleware-like infrastructure for your
application startup.

## Installation

    npm install infra --save

## Usage

Define initializers

1.  Initialize the database

        exports.description = "Postgres";
        exports.init = function(container, cb) {
            var pg = require('pg')
            // sanity check, ensure database can be connected
            pg.connect(container.config.postgres, cb);
        };

2.  Initialize express

        exports.description = "Express web server";
        exports.init = function(container, cb) {
                var app = require('express')();
                app.use(bodyParser.json());
                // register app with container
                container.app = app;
                cb();
            }
        };

3.  Initialize routes

        exports.description = "Express routes";
        exports.init = function(container, cb) {
            var app = container.app;
            app.get('/', function(req, res, next) {
                res.render('index');
            })
            cb();
        };

Use the initializers and start the app

    var starter = require("infra")();
    var container = {
        config: {
            postgres: "postgres://localhost/dev"
        }
    };

    starter.use(require("./database"));
    starter.use(require("./expressPre"));
    starter.use(require("./handlebars"));
    starter.use(require("./expressPost"));
    starter.use(require("./routes"));
    starter.use(require("./processHandlers"));

    starter.start(container, function(err) {
        if (err) trow err;
        container.app.listen(3000);
    });

## Tips

1.  Use your own logger

        var infra = require("infrastructure")(log.info.bind(log))
