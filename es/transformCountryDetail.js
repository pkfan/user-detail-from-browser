const transformCountryDetail = countryDetail => {
  let [country_name, country_code_two, country_code_three, phone_code, country_currency, currency_symbol, tld] = countryDetail;
  if (phone_code) {
    phone_code = `+${phone_code}`;
  }
  const finalResultCountryDetails = {
    country_name,
    country_code_two,
    country_code_three,
    phone_code,
    country_currency,
    currency_symbol,
    tld
  };
  return finalResultCountryDetails;
};
export default transformCountryDetail;