import { createSystemDataFromUserAgent } from "../src/createSystemDataFromUserAgent"

describe("User Agent", () => {
  it("returns object of system info from UserAgent of browser", () => {
    const expectUserAgent = {
      device: "Laptop OR Desktop",
      operating_system: "Windows NT 10.0",
      platform: " Win64",
      device_model_name: "x64",
    }

    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"

    const userAgentResult = createSystemDataFromUserAgent(userAgent)

    expect(userAgentResult).toMatchObject(expectUserAgent)
  })
})
