const map = L.map("map");
L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
  }
).addTo(map);
const blackIcon = L.icon({
  iconUrl: "../images/icon-location.svg",
  iconSize: [30, 50],
  iconAnchor: [15, 50],
});
export function setUpMap(latitude, longitude) {
  map.setView([latitude, longitude], 15);
  // map.eachLayer((layer) => {
  //   if (layer instanceof L.Marker) {
  //     map.removeLayer(layer);
  //   }
  // });
  L.marker([latitude, longitude], {
    icon: blackIcon,
  }).addTo(map);
}
// L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//   attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
//   subdomains: 'abcd',
//   maxZoom: 19
// }).addTo(map);
