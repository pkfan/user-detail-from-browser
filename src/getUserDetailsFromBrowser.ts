import getUserCountryDetails from "./getUserCountryDetails"
import getUserSystemDetails from "./getUserSystemDetails"

export function getUserDetailsFromBrowser() {
  const errorObject = {
    error: "cannot find any country data",
  }

  const country = getUserCountryDetails()

  const system = getUserSystemDetails()

  return { country, system } || errorObject
}

export default getUserDetailsFromBrowser
