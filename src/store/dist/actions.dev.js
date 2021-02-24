"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _weatherApi = require("../api/weather-api");

var _default = {
  ACT_DAILY: function ACT_DAILY(_ref, value) {
    var commit;
    return regeneratorRuntime.async(function ACT_DAILY$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            commit('MUT_CITY', value);
            _context.t0 = commit;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _weatherApi.getWeather)(value, 'daily'));

          case 5:
            _context.t1 = _context.sent;
            (0, _context.t0)('MUT_DAILY', _context.t1);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  ACT_DAYS: function ACT_DAYS(_ref2, value) {
    var commit;
    return regeneratorRuntime.async(function ACT_DAYS$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.t0 = commit;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _weatherApi.getWeather)(value, 'days'));

          case 4:
            _context2.t1 = _context2.sent;
            (0, _context2.t0)('MUT_DAYS', _context2.t1);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
exports["default"] = _default;