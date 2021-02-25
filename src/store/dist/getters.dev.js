"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  GET_CITY: function GET_CITY(state) {
    return state.selectedCity;
  },
  GET_DAILY: function GET_DAILY(state) {
    return state.daily;
  },
  GET_DAYS: function GET_DAYS(state) {
    return state.days;
  },
  GET_LOADING: function GET_LOADING(state) {
    return state.isLoading;
  }
};
exports["default"] = _default;