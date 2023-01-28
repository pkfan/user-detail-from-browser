"use strict";

exports.__esModule = true;
exports.default = void 0;
var _IPs = require("./IPs");
async function getSystemIPs() {
  const IPs = [];
  const IPv4 = await (0, _IPs.getIPv4)();
  const IPv6 = await (0, _IPs.getIPv6)();
  // console.log("IPv4", IPv4)
  // console.log("IPv6", IPv6)

  if (IPv4) {
    IPv4.forEach(ip => {
      const IPitem = {
        ip_version: "IPv4",
        ip_address: ip
      };
      IPs.push(IPitem);
    });
  }
  if (IPv6) {
    IPv6.forEach(ip => {
      const IPitem = {
        ip_version: "IPv6",
        ip_address: ip
      };
      IPs.push(IPitem);
    });
  }
  return IPs;
}
var _default = getSystemIPs;
exports.default = _default;