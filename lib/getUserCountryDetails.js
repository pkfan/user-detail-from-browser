"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
exports.getUserCountryDetails = getUserCountryDetails;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _getCountriesFinalList = _interopRequireDefault(require("./getCountriesFinalList"));
var _getUserCountryFlagUrl = _interopRequireDefault(require("./getUserCountryFlagUrl"));
var _transformCountryDetail = _interopRequireDefault(require("./transformCountryDetail"));
const createSystemDetail = localData => {
  const date = new Date();
  const systemDetail = {
    locale: localData.locale,
    timeZone: localData.timeZone,
    browser_date: {
      date_string: date.toDateString(),
      date_numeric: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      system_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      GMT: date.toString().split(" ").find(el => el.toLowerCase().includes("gmt")),
      timezoneOffset: date.getTimezoneOffset()
    }
  };
  return systemDetail;
};
function getUserCountryDetails() {
  const localData = Intl.DateTimeFormat().resolvedOptions();
  const browserDetectedRegion = localData.timeZone.toLowerCase();
  const systemDetail = createSystemDetail(localData);
  const countriesFinalList = (0, _getCountriesFinalList.default)();
  let countryDetail = countriesFinalList[browserDetectedRegion];
  if (countryDetail) {
    countryDetail = (0, _transformCountryDetail.default)(countryDetail);
  } else {
    countryDetail = {
      country_name: "N/A"
    };
  }

  ////////////////
  if (countryDetail.country_code_two) {
    countryDetail["country_flag_url"] = (0, _getUserCountryFlagUrl.default)(countryDetail.country_code_two);
  }
  return (0, _extends2.default)({}, countryDetail, systemDetail);
}
var _default = getUserCountryDetails;
exports.default = _default;