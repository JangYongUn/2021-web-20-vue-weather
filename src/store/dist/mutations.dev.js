"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  MUT_CITY: function MUT_CITY(state, r) {
    state.selectedCity = r;
  },
  MUT_DAILY: function MUT_DAILY(state, r) {
    state.daily = r;
  }
};
exports["default"] = _default;