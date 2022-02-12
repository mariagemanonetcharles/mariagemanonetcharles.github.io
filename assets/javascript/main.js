// Initialize and add the map
function initMap() {
    const home = { lat: 45.23207409855136, lng: -73.31837062403082 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: home,
    });
    const marker = new google.maps.Marker({
        position: home,
        map: map,
    });
};
