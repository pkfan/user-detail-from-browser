"use strict";

exports.__esModule = true;
exports.default = void 0;
exports.getUserCountryFlagUrl = getUserCountryFlagUrl;
function getUserCountryFlagUrl(country_code) {
  if (!country_code) {
    throw new Error("country_code argument is missing, e.g. getUserCountryFlagUrl('US')");
  }
  return `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${country_code.toLowerCase()}.svg`;
}
var _default = getUserCountryFlagUrl;
exports.default = _default;