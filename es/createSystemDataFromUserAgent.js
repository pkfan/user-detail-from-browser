const getParenthsisDataFromUserAgent = userAgent => {
  const regex = /\(.*?\)/g;
  const parenthsisData = userAgent.match(regex);
  return parenthsisData && parenthsisData[0];
};
const replaceParenthsis = parenthsisData => {
  return parenthsisData.replace("(", "").replace(")", "");
};
const getDevice = userAgent => {
  const isMobel = userAgent.toLowerCase().includes("mobile");
  return isMobel ? "Mobile" : "Laptop OR Desktop";
};
export function createSystemDataFromUserAgent(userAgent) {
  var _finalStringDataArr$;
  const finalSystemDataObj = {
    device: "N/A",
    operating_system: "N/A",
    platform: "N/A",
    device_model_name: "N/A"
  };
  const parenthsisData = getParenthsisDataFromUserAgent(userAgent);
  if (!parenthsisData) {
    return finalSystemDataObj;
  }
  const finalStringData = replaceParenthsis(parenthsisData);
  const finalStringDataArr = finalStringData.split(";");
  finalSystemDataObj["device"] = getDevice(userAgent);
  finalSystemDataObj["operating_system"] = finalStringDataArr[0];
  if (((_finalStringDataArr$ = finalStringDataArr[1]) == null ? void 0 : _finalStringDataArr$.length) >= 3) {
    finalSystemDataObj["platform"] = finalStringDataArr[1];
  }
  let device_model_name = "";
  if (finalStringDataArr[2]) {
    device_model_name = finalStringDataArr[2].trim();
  }
  if (finalStringDataArr[3]) {
    device_model_name = device_model_name + "-" + finalStringDataArr[3].trim();
  }
  if (device_model_name) {
    finalSystemDataObj["device_model_name"] = device_model_name;
  }
  return finalSystemDataObj;
}
export default createSystemDataFromUserAgent;