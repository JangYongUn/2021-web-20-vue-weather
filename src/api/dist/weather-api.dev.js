"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorld = exports.getWeather = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../modules/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather';
var DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast';
var PARAMS = {
  units: 'metric',
  lang: 'kr',
  appid: process.env.VUE_APP_APPID
}; // selectedCity => daily

var getWeather = function getWeather(v, url) {
  var params, r;
  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!v) {
            _context.next = 4;
            break;
          }

          _context.t0 = _objectSpread({}, PARAMS, {
            id: v
          });
          _context.next = 12;
          break;

        case 4:
          _context.t1 = _objectSpread;
          _context.t2 = {};
          _context.t3 = PARAMS;
          _context.t4 = {};
          _context.next = 10;
          return regeneratorRuntime.awrap((0, _utils.getCoords)());

        case 10:
          _context.t5 = _context.sent;
          _context.t0 = (0, _context.t1)(_context.t2, _context.t3, _context.t4, _context.t5);

        case 12:
          params = _context.t0;
          _context.next = 15;
          return regeneratorRuntime.awrap(_axios["default"].get(url == 'daily' ? DAILY_URL : DAYS_URL, {
            params: params
          }));

        case 15:
          r = _context.sent;
          return _context.abrupt("return", r.data);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}; // 특정도시 날씨정보 let, lon => daily


exports.getWeather = getWeather;

var getWorld = function getWorld() {
  return regeneratorRuntime.async(function getWorld$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getWorld = getWorld;