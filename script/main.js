import { setUpMap } from "./map.js";
import { Iptraker } from "./ipTracker.js";
import { renderOutput } from "./updateInfo.js";
async function main(ip) {
  const ipInfo = await Iptraker(ip);
  if (ipInfo.success) {
    setUpMap(ipInfo.latitude , ipInfo.longitude);
    renderOutput(
      ipInfo.ip,
      `${ipInfo.region}, ${ipInfo.country_code} ${ipInfo.postal}`,
      `UTC ${ipInfo.timezone.utc}`,
      ipInfo.connection.isp
    );
  } else {
    document.querySelector("input").value = "";
    alert("invalied input");
  }
}
main();
document.querySelector(".js-input-button").addEventListener("click", () => {
  const ip = document.querySelector("input").value;
  main(ip);
});
