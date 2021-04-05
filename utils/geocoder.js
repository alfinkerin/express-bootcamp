const NodeGeocoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER || "mapquest",
  apiKey: process.env.GEOCODER_API_KEY || "iMjx1P1S79PN1Tdt1e0XTg0XuQUGNAoV", // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
