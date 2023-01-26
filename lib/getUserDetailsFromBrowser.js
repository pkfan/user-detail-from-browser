"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
exports.getUserDetailsFromBrowser = getUserDetailsFromBrowser;
var _getUserCountryDetails = _interopRequireDefault(require("./getUserCountryDetails"));
var _getUserSystemDetails = _interopRequireDefault(require("./getUserSystemDetails"));
function getUserDetailsFromBrowser() {
  const errorObject = {
    error: "cannot find any country data"
  };
  const country = (0, _getUserCountryDetails.default)();
  const system = (0, _getUserSystemDetails.default)();
  return {
    country,
    system
  } || errorObject;
}
var _default = getUserDetailsFromBrowser;
exports.default = _default;