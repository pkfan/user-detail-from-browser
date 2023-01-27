import getCountriesFinalList from "./getCountriesFinalList"
import getUserCountryFlagUrl from "./getUserCountryFlagUrl"

const createSystemDetail = (localData) => {
  const date = new Date()

  const systemDetail = {
    locale: localData.locale,
    timeZone: localData.timeZone,
    browser_date: {
      date_string: date.toDateString(),
      date_numeric: `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`,
      system_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      GMT: date
        .toString()
        .split(" ")
        .find((el) => el.toLowerCase().includes("gmt")),
      timezoneOffset: date.getTimezoneOffset(),
    },
  }

  return systemDetail
}

const transformCountryDetail = (countryDetail) => {
  let [
    country_name,
    country_code_two,
    country_code_three,
    phone_code,
    country_capital,
    country_currency,
    currency_name,
    currency_symbol,
    tld,
    region,
  ] = countryDetail

  if (phone_code) {
    phone_code = `+${phone_code}`
  }

  const finalResultCountryDetails = {
    country_name,
    country_code_two,
    country_code_three,
    phone_code,
    country_capital,
    country_currency,
    currency_name,
    currency_symbol,
    tld,
    region,
  }

  return finalResultCountryDetails
}

export function getUserCountryDetails() {
  const localData = Intl.DateTimeFormat().resolvedOptions()
  const browserDetectedRegion = localData.timeZone.toLowerCase()

  const systemDetail = createSystemDetail(localData)

  const countriesFinalList = getCountriesFinalList()

  let countryDetail = countriesFinalList[browserDetectedRegion]

  if (countryDetail) {
    countryDetail = transformCountryDetail(countryDetail)
  } else {
    countryDetail = { country_name: "N/A" }
  }

  ////////////////
  if (countryDetail.country_code_two) {
    countryDetail["country_flag_url"] = getUserCountryFlagUrl(
      countryDetail.country_code_two
    )
  }

  return { ...countryDetail, ...systemDetail }
}

export default getUserCountryDetails
