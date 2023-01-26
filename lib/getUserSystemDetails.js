"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
exports.getUserSystemDetails = getUserSystemDetails;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _createSystemDataFromUserAgent = _interopRequireDefault(require("./createSystemDataFromUserAgent"));
function getUserSystemDetails() {
  const system = window.clientInformation;
  const localData = Intl.DateTimeFormat().resolvedOptions();
  const userSystemDetails = {
    network: system.connection.effectiveType,
    RAM: `${system.deviceMemory} GB`,
    logical_processors: system.hardwareConcurrency,
    system_selected_language: system.language,
    system_languages: system.languages,
    system_date: Intl.DateTimeFormat().format(),
    system_time_zone: localData.timeZone,
    system_date_format: {
      calendar: localData.calendar,
      day: localData.day,
      month: localData.month,
      year: localData.year
    },
    platform: system.platform
  };
  const deviceDetailsFromUserAgent = (0, _createSystemDataFromUserAgent.default)(system.userAgent);
  return (0, _extends2.default)({}, userSystemDetails, deviceDetailsFromUserAgent);
}
var _default = getUserSystemDetails;
exports.default = _default;