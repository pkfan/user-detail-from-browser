"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
exports.getAllCountries = getAllCountries;
var _getCountriesFinalList = require("./getCountriesFinalList");
var _transformCountryDetail = _interopRequireDefault(require("./transformCountryDetail"));
var _getUserCountryFlagUrl = _interopRequireDefault(require("./getUserCountryFlagUrl"));
function getAllCountries() {
  const allCountries = [];
  const countriesFinalList = _getCountriesFinalList.c_243;
  Object.values(countriesFinalList).forEach(country => {
    const countryObj = (0, _transformCountryDetail.default)(country);
    const countryFlag = (0, _getUserCountryFlagUrl.default)(countryObj.country_code_two);
    countryObj["country_flag_url"] = countryFlag;
    allCountries.push(countryObj);
  });
  return allCountries;
}
var _default = getAllCountries;
exports.default = _default;