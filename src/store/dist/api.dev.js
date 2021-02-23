"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorld = exports.getDays = exports.getDaily = exports.getPosition = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var APP_ID = '7e9fe622cfa1cb7e7399447de68c392f';
var DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather';
var DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast';
var params = {
  units: 'metric',
  lang: 'kr',
  appid: process.env.VUE_APP_APPID
}; // 현재 위치의 navigator.getPosition()

var getPosition = function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (r) {
      resolve({
        lat: r.coords.latitude,
        lon: r.coords.longitude
      });
    }, function (err) {
      reject(err);
    });
  });
}; // selectedCity => daily


exports.getPosition = getPosition;

var getDaily = function getDaily(id) {
  var r;
  return regeneratorRuntime.async(function getDaily$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params.id = id;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(DAILY_URL, {
            params: params
          }));

        case 3:
          r = _context.sent;
          return _context.abrupt("return", r.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; // selectedCity => 5day3hour


exports.getDaily = getDaily;

var getDays = function getDays() {
  return regeneratorRuntime.async(function getDays$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // 특정도시 날씨정보 let, lon => daily


exports.getDays = getDays;

var getWorld = function getWorld() {
  return regeneratorRuntime.async(function getWorld$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getWorld = getWorld;