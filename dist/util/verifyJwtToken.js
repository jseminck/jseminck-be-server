'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = verifyJwtToken;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper function to validate a json web token.
 */
function verifyJwtToken(req, res, app) {
    var _req$query = req.query;
    var requestKey = _req$query.key;
    var requestToken = _req$query.token;
    var _req$body = req.body;
    var bodyKey = _req$body.key;
    var bodyToken = _req$body.token;


    if (!requestKey && !bodyKey && !requestToken && !bodyToken) {
        return {
            success: false,
            message: "Please provide a key: ?key= or ?token="
        };
    }

    try {
        _jsonwebtoken2.default.verify(requestKey || bodyKey || requestToken || bodyToken, app.get('jwtKey'));
    } catch (err) {
        return {
            success: false,
            message: "Incorrect key"
        };
    }

    return {
        success: true
    };
}