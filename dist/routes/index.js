'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureRoutes;

var _ping = require('./ping');

var _ping2 = _interopRequireDefault(_ping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureRoutes(app) {
    (0, _ping2.default)(app);
}