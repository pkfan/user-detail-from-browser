import { getIPv4, getIPv6 } from "./IPs"

async function getSystemIPs() {
  const IPs = [] as any
  const IPv4 = await getIPv4()
  const IPv6 = await getIPv6()
  // console.log("IPv4", IPv4)
  // console.log("IPv6", IPv6)

  if (IPv4) {
    IPv4.forEach((ip) => {
      const IPitem = { ip_version: "IPv4", ip_address: ip }
      IPs.push(IPitem)
    })
  }
  if (IPv6) {
    IPv6.forEach((ip) => {
      const IPitem = { ip_version: "IPv6", ip_address: ip }
      IPs.push(IPitem)
    })
  }

  return IPs
}

export default getSystemIPs
