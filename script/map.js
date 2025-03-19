const map = L.map("map");
let layerInfo = {
  layer: L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
    }
  ).addTo(map),
  id: "carto",
};
const blackIcon = L.icon({
  iconUrl: "../images/icon-location.svg",
  iconSize: [30, 50],
  iconAnchor: [15, 50],
});
export function setUpMap(latitude, longitude) {
  map.setView([latitude, longitude], 15);
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });
  L.marker([latitude, longitude], {
    icon: blackIcon,
  }).addTo(map);
}
document.querySelector(".js-basemaps-button").addEventListener("click", () => {
  if (layerInfo.id != "basemaps") {
    map.removeLayer(layerInfo.layer);
    layerInfo.layer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);
    layerInfo.id = "basemaps";
  }
});
document.querySelector(".js-carto-button").addEventListener("click", () => {
  if (layerInfo.id != "carto") {
    map.removeLayer(layerInfo.layer);
    layerInfo.layer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
      }
    ).addTo(map);
    layerInfo.id = "carto";
  }
});
