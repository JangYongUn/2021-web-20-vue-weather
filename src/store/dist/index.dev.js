"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _state = _interopRequireDefault(require("./state"));

var _getters = _interopRequireDefault(require("./getters"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _actions = _interopRequireDefault(require("./actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);
/* vuex 객체 */
// state: 변수를 선언하는곳
// getters: 변수를 가져오는곳
// mutations: 변수의 변화를 감지하는곳(값을 바꿔주는 곳)
// actions: 변수를 변화시키는 곳


var _default = new _vuex["default"].Store({
  state: _state["default"],
  getters: _getters["default"],
  mutations: _mutations["default"],
  actions: _actions["default"]
});

exports["default"] = _default;