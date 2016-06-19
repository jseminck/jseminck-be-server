'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes/');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 *
 * @param configureServer {Function}
 * @param configureRoutes {Function}
 */

exports.default = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(cfg) {
        var app, port;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app = (0, _express2.default)();

                        // Configure local server configuration and routes

                        _context.next = 3;
                        return (0, _config2.default)(app);

                    case 3:
                        (0, _routes2.default)(app);

                        // Configure custom server configuration and routes
                        cfg.configureServer(app);
                        cfg.configureRoutes(app);

                        // set the port of our application
                        // process.env.PORT lets the port be set by Heroku
                        port = process.env.PORT || 8080;


                        app.listen(port);
                        console.log('Server running at http://127.0.0.1:' + port); // eslint-disable-line no-console

                        return _context.abrupt('return', app);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function configureApp(_x) {
        return ref.apply(this, arguments);
    }

    return configureApp;
}();