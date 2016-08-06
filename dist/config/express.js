'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureExpress;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureExpress(app) {
    app.use(_bodyParser2.default.json());
    // app.use(bodyParser.urlencoded({extended: false}));
    app.use((0, _morgan2.default)('dev'));
    app.set('jwtKey', process.env.JSEMINCK_BE_KEY);
}