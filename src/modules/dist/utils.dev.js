"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoords = void 0;

// 현재 위치의 navigator.getPosition()
var getCoords = function getCoords() {
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
};

exports.getCoords = getCoords;