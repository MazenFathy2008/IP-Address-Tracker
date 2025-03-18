import { setUpMap } from "./map.js";
import { Iptraker } from "./ipTracker.js";
async function main() {
  const ipInfo = await Iptraker();
  setUpMap(ipInfo.latitude, ipInfo.longitude);
}
main();
