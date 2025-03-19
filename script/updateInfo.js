export function renderOutput(IpAddres, location, timeZone, isp) {
  document.querySelector("#js-Ip-Address").textContent = IpAddres;
  document.querySelector("#js-location").textContent = location;
  document.querySelector("#js-time-zone").textContent = timeZone;
  document.querySelector("#js-isp").textContent = isp;
}
