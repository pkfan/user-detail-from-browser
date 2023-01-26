const getParenthsisDataFromUserAgent = (userAgent: string) => {
  const regex = /\(.*?\)/g
  const parenthsisData = userAgent.match(regex)
  return parenthsisData && parenthsisData[0]
}

const replaceParenthsis = (parenthsisData: string) => {
  return parenthsisData.replace("(", "").replace(")", "")
}

const getDevice = (userAgent: string) => {
  const isMobel = userAgent.toLowerCase().includes("mobile")
  return isMobel ? "Mobile" : "Laptop OR Desktop"
}

export function createSystemDataFromUserAgent(userAgent: string) {
  const finalSystemDataObj = {
    device: "N/A",
    operating_system: "N/A",
    platform: "N/A",
    device_model_name: "N/A",
  }

  const parenthsisData: string | null =
    getParenthsisDataFromUserAgent(userAgent)

  if (!parenthsisData) {
    return finalSystemDataObj
  }

  const finalStringData: string = replaceParenthsis(parenthsisData)
  const finalStringDataArr: string[] = finalStringData.split(";")

  finalSystemDataObj["device"] = getDevice(userAgent)
  finalSystemDataObj["operating_system"] = finalStringDataArr[0]

  if (finalStringDataArr[1]?.length >= 3) {
    finalSystemDataObj["platform"] = finalStringDataArr[1]
  }

  let device_model_name = ""

  if (finalStringDataArr[2]) {
    device_model_name = finalStringDataArr[2].trim()
  }
  if (finalStringDataArr[3]) {
    device_model_name = device_model_name + "-" + finalStringDataArr[3].trim()
  }

  if (device_model_name) {
    finalSystemDataObj["device_model_name"] = device_model_name
  }

  return finalSystemDataObj
}

export default createSystemDataFromUserAgent
