'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureApp;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes/');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {Object} cfg
 *   @param {Function} cfg.configureServer
 *   @param {Function} cfg configureRoutes
 *   @param {Jade} cfg.index
 */
function configureApp(cfg) {
    var app = (0, _express2.default)();

    // console.log("cfg.index", cfg.index);
    app.get('/', function (req, res) {
        return res.send(cfg.index);
    });

    // Configure local server configuration and routes
    (0, _config2.default)(app);
    (0, _routes2.default)(app);

    // Configure custom server configuration and routes
    cfg.configureServer(app);
    cfg.configureRoutes(app);

    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    var port = process.env.PORT || 8080;

    app.listen(port);
    console.log('Server running at http://127.0.0.1:' + port); // eslint-disable-line no-console

    return app;
} // import "babel-polyfill";