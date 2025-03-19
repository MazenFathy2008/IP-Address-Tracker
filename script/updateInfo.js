export function renderOutput(IpAddres, location, timeZone, isp) {
  document.querySelector("#js-Ip-Address").innerHTML = IpAddres;
  document.querySelector("#js-location").innerHTML = location;
  document.querySelector("#js-time-zone").innerHTML = timeZone;
  document.querySelector("#js-isp").innerHTML = isp;
}
