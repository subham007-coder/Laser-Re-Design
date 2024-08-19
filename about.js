const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


Shery.textAnimate(".sub-text h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect("#bimg", {
    style: 5,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":1.5360636494065476},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true,
});


// map
document.querySelectorAll('.bulb').forEach(bulb => {
    bulb.addEventListener('mouseenter', () => {
        // Add any additional effects or dynamic changes here
    });
    bulb.addEventListener('mouseleave', () => {
        // Revert effects or changes here
    });
});

// india map pointer
const locations = [
    { name: "Odisha", lat: 20.9517, lon: 85.0985 },
    { name: "Bihar", lat: 25.0961, lon: 85.3131 },
    { name: "Assam", lat: 26.2006, lon: 92.9376 },
    { name: "Tripura", lat: 23.9408, lon: 91.9882 },
    { name: "Jharkhand", lat: 23.6102, lon: 85.2799 },
    { name: "Arunachal Pradesh", lat: 28.2180, lon: 94.7278 },
    { name: "Andhra Pradesh", lat: 15.9129, lon: 79.7400 },
    { name: "Chhattisgarh", lat: 21.2787, lon: 81.8661 },
    { name: "Delhi", lat: 28.7041, lon: 77.1025 },
    { name: "Gujarat", lat: 22.2587, lon: 71.1924 },
    { name: "Haryana", lat: 29.0588, lon: 76.0856 },
    { name: "Himachal Pradesh", lat: 31.1048, lon: 77.1734 },
    { name: "Jammu", lat: 32.7266, lon: 74.8570 },
    { name: "Karnataka", lat: 15.3173, lon: 75.7139 },
    { name: "Kerala", lat: 10.8505, lon: 76.2711 },
    { name: "Madhya Pradesh", lat: 22.9734, lon: 78.6569 },
    { name: "Maharashtra", lat: 19.7515, lon: 75.7139 },
    { name: "Manipur", lat: 24.6637, lon: 93.9063 },
    { name: "Punjab", lat: 31.1471, lon: 75.3412 },
    { name: "Rajasthan", lat: 27.0238, lon: 74.2179 },
    { name: "Tamil Nadu", lat: 11.1271, lon: 78.6569 },
    { name: "Telangana", lat: 18.1124, lon: 79.0193 },
    { name: "Uttar Pradesh", lat: 26.8467, lon: 80.9462 },
    { name: "Uttarakhand", lat: 30.0668, lon: 79.0193 }
];

const mapBounds = {
    minLat: 6.5546,   // South of India
    maxLat: 35.5133,  // North of India
    minLon: 68.1097,  // West of India
    maxLon: 97.3953   // East of India
};

function placeMarkers() {
    const mapImage = document.getElementById('map-image');
    const mapWidth = mapImage.clientWidth;
    const mapHeight = mapImage.clientHeight;

    locations.forEach(location => {
        const x = ((location.lon - mapBounds.minLon) / (mapBounds.maxLon - mapBounds.minLon)) * mapWidth;
        const y = ((mapBounds.maxLat - location.lat) / (mapBounds.maxLat - mapBounds.minLat)) * mapHeight;

        let marker = document.querySelector(`.marker[data-location="${location.name}"]`);
        if (!marker) {
            marker = document.createElement('div');
            marker.className = 'marker';
            marker.dataset.location = location.name;
            document.querySelector('.map').appendChild(marker);
        }
        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;
    });
}

// Call placeMarkers initially and on window resize
window.addEventListener('resize', placeMarkers);
placeMarkers();


// intarnational map location
const internationalLocations = [
    { name: "Togo", lat: 8.6195, lon: 0.8248 },
    { name: "Ethiopia", lat: 9.1450, lon: 40.4897 },
    { name: "Central Africa", lat: 6.6111, lon: 20.9394 },
    { name: "Bhutan", lat: 27.5142, lon: 90.4336 },
    { name: "Mauritius", lat: -20.3484, lon: 57.5522 },
    { name: "Bangladesh", lat: 23.6850, lon: 90.3563 },
    { name: "Dubai", lat: 25.276987, lon: 55.296249 },
    { name: "Kenya", lat: -1.2921, lon: 36.8219 },
    { name: "Rwanda", lat: -1.9403, lon: 29.8739 },
    { name: "Senegal", lat: 14.4974, lon: -14.4524 },
    { name: "Ivory Coast", lat: 7.539989, lon: -5.547080 },
    { name: "Ghana", lat: 7.9465, lon: -1.0232 },
    { name: "Tanzania", lat: -6.3690, lon: 34.8888 },
    { name: "Mali", lat: 17.5707, lon: -3.9962 },
    { name: "Mozambique", lat: -18.6657, lon: 35.5296 },
    { name: "Nigeria", lat: 9.0820, lon: 8.6753 },
    { name: "Gambia", lat: 13.4432, lon: -15.3101 },
    { name: "Cameroon", lat: 3.8480, lon: 11.5021 },
    { name: "Guinea-Bissau", lat: 11.8037, lon: -15.1804 },
    { name: "Guinea-Conakry", lat: 9.9456, lon: -9.6966 },
    { name: "Nicaragua", lat: 12.8654, lon: -85.2072 }
];

const worldMapBounds = {
    minLat: -60.0,    // Southernmost point
    maxLat: 85.0,     // Northernmost point
    minLon: -180.0,   // Westernmost point
    maxLon: 180.0     // Easternmost point
};

function placeInternationalMarkers() {
    const mapImage = document.getElementById('world-map-image');
    const mapWidth = mapImage.clientWidth;
    const mapHeight = mapImage.clientHeight;

    internationalLocations.forEach(location => {
        const x = ((location.lon - worldMapBounds.minLon) / (worldMapBounds.maxLon - worldMapBounds.minLon)) * mapWidth;
        const y = ((worldMapBounds.maxLat - location.lat) / (worldMapBounds.maxLat - worldMapBounds.minLat)) * mapHeight;

        let marker = document.querySelector(`.marker[data-location="${location.name}"]`);
        if (!marker) {
            marker = document.createElement('div');
            marker.className = 'marker';
            marker.dataset.location = location.name;
            document.querySelector('.world-map').appendChild(marker);
        }
        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;
    });
}

// Call placeInternationalMarkers initially and on window resize
window.addEventListener('resize', placeInternationalMarkers);
placeInternationalMarkers();
