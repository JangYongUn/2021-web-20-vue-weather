"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _weatherApi = require("../api/weather-api.js");

var _default = {
  ACT_WEATHER: function ACT_WEATHER(_ref, value) {
    var commit;
    return regeneratorRuntime.async(function ACT_WEATHER$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            commit('MUT_CITY', value);
            _context.t0 = commit;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _weatherApi.getDaily)(value));

          case 5:
            _context.t1 = _context.sent;
            (0, _context.t0)('MUT_DAILY', _context.t1);
            _context.t2 = commit;
            _context.next = 10;
            return regeneratorRuntime.awrap((0, _weatherApi.getDays)());

          case 10:
            _context.t3 = _context.sent;
            (0, _context.t2)('MUT_DAYS', _context.t3);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;