const mapConfig = {
  center: {
    lat: 24.4539,
    lng: 54.3773,
  },
  zoom: 6,
  tileLayerUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  tileLayerOptions: {
    minZoom: 6,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Ehtimami</a>',
  },
  iconSettings: {
    iconSize: [40, 40],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -30],
    shadowSize: [60, 30],
  },
  defaultIconUrl: '@/assets/images/map/vehicles/default/grey.png', // Add your default icon URL here
};

export default mapConfig;
