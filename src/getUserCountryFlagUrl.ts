export function getUserCountryFlagUrl(country_code) {
  if (!country_code) {
    throw new Error(
      "country_code argument is missing, e.g. getUserCountryFlagUrl('US')"
    )
  }

  return `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${country_code.toLowerCase()}.svg`
}

export default getUserCountryFlagUrl
