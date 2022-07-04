function initMap() {
  const pos = { lat: 25.9210802, lng: -81.7250113 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: pos,
  });
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: "Hello World!",
  });
  marker.setMap(map);
}

window.initMap = initMap;
