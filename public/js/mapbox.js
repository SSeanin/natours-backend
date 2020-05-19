/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2FlZWRhbmRhbGliIiwiYSI6ImNrOXpmdnI2ZzE2ZnIzbXBicXp6eng2bWwifQ.Z1Wr44fCsOq6QHO73A9eXw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/saeedandalib/ck9zg18sl2sey1iqrq3w09keu',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
