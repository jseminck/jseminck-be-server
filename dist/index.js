'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureApp;

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes/');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param configureServer {Function}
 * @param configureRoutes {Function}
 */
function configureApp(cfg) {
    var app = (0, _express2.default)();

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
}