import { setUpMap } from "./map.js";
import { Iptraker } from "./ipTracker.js";
import { renderOutput } from "./updateInfo.js";
async function main() {
  const ipInfo = await Iptraker();
  setUpMap(ipInfo.latitude, ipInfo.longitude);
  renderOutput(
    ipInfo.ip,
    `${ipInfo.region}, ${ipInfo.country_code} ${ipInfo.postal}`,
    `UTC ${ipInfo.timezone.utc}`,
    ipInfo.connection.isp
  );
}
main();
