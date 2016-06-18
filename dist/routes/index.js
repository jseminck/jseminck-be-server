'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureRoutes;

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureRoutes(app) {
    (0, _authentication2.default)(app);
}