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

export default transformCountryDetail
