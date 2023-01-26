import { getCountriesFinalList } from "../src/getCountriesFinalList"

describe("Countries List", () => {
  it("returns object of All countries but test only one country from results", () => {
    const expectCountryDetails = {
      name: ["Pakistan", "Islamic Republic of Pakistan", "PK", "PAK"],
      capital: "Islamabad",
      currency: { code: "PKR", name: "Pakistan Rupee" },
      tld: [".pk"],
      languages: { eng: "English", urd: "Urdu" },
      geo: { region: "Asia", subregion: "Southern Asia" },
      phone: ["+92", "0", [9, 10]],
    }

    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"

    const countriesFinalList = getCountriesFinalList()

    expect(countriesFinalList["asia/karachi"]).toMatchObject(
      expectCountryDetails
    )
  })
})
