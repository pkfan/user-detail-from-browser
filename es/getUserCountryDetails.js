import _extends from "@babel/runtime/helpers/esm/extends";
import getCountriesFinalList from "./getCountriesFinalList";
import getUserCountryFlagUrl from "./getUserCountryFlagUrl";
import transformCountryDetail from "./transformCountryDetail";
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
export function getUserCountryDetails() {
  const localData = Intl.DateTimeFormat().resolvedOptions();
  const browserDetectedRegion = localData.timeZone.toLowerCase();
  const systemDetail = createSystemDetail(localData);
  const countriesFinalList = getCountriesFinalList();
  let countryDetail = countriesFinalList[browserDetectedRegion];
  if (countryDetail) {
    countryDetail = transformCountryDetail(countryDetail);
  } else {
    countryDetail = {
      country_name: "N/A"
    };
  }

  ////////////////
  if (countryDetail.country_code_two) {
    countryDetail["country_flag_url"] = getUserCountryFlagUrl(countryDetail.country_code_two);
  }
  return _extends({}, countryDetail, systemDetail);
}
export default getUserCountryDetails;