"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("./api");

var _default = {
  ACT_CITY: function ACT_CITY(_ref, value) {
    var commit;
    return regeneratorRuntime.async(function ACT_CITY$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            commit('MUT_CITY', value);
            _context.t0 = commit;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _api.getDaily)(value));

          case 5:
            _context.t1 = _context.sent;
            (0, _context.t0)('MUT_DAILY', _context.t1);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;