import _extends from "@babel/runtime/helpers/esm/extends";
import createSystemDataFromUserAgent from "./createSystemDataFromUserAgent";
export function getUserSystemDetails() {
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
  const deviceDetailsFromUserAgent = createSystemDataFromUserAgent(system.userAgent);
  return _extends({}, userSystemDetails, deviceDetailsFromUserAgent);
}
export default getUserSystemDetails;