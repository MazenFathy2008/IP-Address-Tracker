export async function Iptraker(ip = "") {
  try {
    const ipRespos = await fetch(`http://ipwho.is/${ip}`);
    const ipInfo = await ipRespos.json();
    console.log(ipInfo)
    return ipInfo;
  } catch (e) {
    console.log(`there is an ${e} error please try later`);
  }
}
