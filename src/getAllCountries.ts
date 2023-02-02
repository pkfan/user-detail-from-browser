import { c_243 } from "./getCountriesFinalList"
import transformCountryDetail from "./transformCountryDetail"
import getUserCountryFlagUrl from "./getUserCountryFlagUrl"

export function getAllCountries() {
  const allCountries = [] as any
  const countriesFinalList = c_243

  Object.values(countriesFinalList).forEach((country) => {
    const countryObj = transformCountryDetail(country)
    const countryFlag = getUserCountryFlagUrl(countryObj.country_code_two)
    countryObj["country_flag_url"] = countryFlag

    allCountries.push(countryObj)
  })

  return allCountries
}

export default getAllCountries
