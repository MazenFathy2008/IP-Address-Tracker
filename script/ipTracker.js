export async function Iptraker(ip = "") {
  const ipRespos = await fetch(`http://ipwho.is/${ip}` );
  const ipInfo = await ipRespos.json()
  console.log(ipInfo);
}
