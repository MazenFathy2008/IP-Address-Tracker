export async function Iptraker(ip = "") {
  const ipRespos = await fetch(`http://ipwho.is/${ip}` );
  const ipInfo = await ipRespos.json()
  return ipInfo
}
