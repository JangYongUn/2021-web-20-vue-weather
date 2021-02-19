"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("@fontawesome/fontawesome-free/css/all.min.css");

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.min.css");

require("bootstrap-vue/dist/bootstrap-vue.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_bootstrapVue.BootstrapVue);

_vue["default"].config.productionTip = false;
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');