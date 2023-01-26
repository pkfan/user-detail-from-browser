import _extends from "@babel/runtime/helpers/esm/extends";
import getCountriesFinalList from "./getCountriesFinalList";
import getUserCountryFlagUrl from "./getUserCountryFlagUrl";
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
const transformCountryDetail = countryDetail => {
  const phone = {
    calling_code: countryDetail.phone[0],
    national_prefix: countryDetail.phone[1],
    national_number_lengths: countryDetail.phone[2]
  };
  const finalResultCountryDetails = {
    country_common_name: countryDetail.name[0],
    country_official_name: countryDetail.name[1],
    country_code_two: countryDetail.name[2],
    country_code_three: countryDetail.name[3],
    country_capital: countryDetail.capital,
    country_currency: countryDetail.currency,
    tld: countryDetail.tld,
    country_languages: countryDetail.languages,
    geo: countryDetail.geo,
    phone
  };
  return finalResultCountryDetails;
};
export function getUserCountryDetails() {
  const localData = Intl.DateTimeFormat().resolvedOptions();
  const browserDetectedRegion = localData.timeZone.toLowerCase();
  const systemDetail = createSystemDetail(localData);
  const countriesFinalList = getCountriesFinalList();
  let countryDetail = countriesFinalList[browserDetectedRegion] || {};
  countryDetail = transformCountryDetail(countryDetail);
  ////////////////
  if (countryDetail.country_code_two) {
    countryDetail["country_flag_url"] = getUserCountryFlagUrl(countryDetail.country_code_two);
  }
  return _extends({}, countryDetail, systemDetail);
}
export default getUserCountryDetails;