const { Client } = require('@googlemaps/google-maps-services-js');

const client = new Client({});

const getNearbyPlaces = async (lat, lng, type, radius = 5000) => {
  try {
    const response = await client.placesNearby({
      params: {
        location: `${lat},${lng}`,
        radius,
        type,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 5000,
    });

    return response.data.results.map(place => ({
      name: place.name,
      address: place.vicinity,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      rating: place.rating,
    }));
  } catch (error) {
    console.error('Google Maps API Error:', error);
    throw new Error('Failed to fetch nearby places');
  }
};

module.exports = {
  getNearbyPlaces,
};
