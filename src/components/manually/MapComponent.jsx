import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// RED MARKER ICON
const redIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const openGoogleMaps = (lat, lng) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
};

const MapCenterUpdater = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [map, position]);

  return null;
};

const MapClickHandler = () => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      openGoogleMaps(lat, lng);
    },
  });

  return null;
};

const MapComponent = () => {
  const [position, setPosition] = useState([11.48474, 104.84542]); // Phnom Penh default

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setPosition([location.coords.latitude, location.coords.longitude]);
      },
      () => {
        // Keep default position when location permission is denied.
      }
    );
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={20}
      style={{ height: "clamp(280px, 55vw, 500px)", width: "100%", borderRadius: "24px" }}
    >
      <MapCenterUpdater position={position} />
      <MapClickHandler />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={position}
        icon={redIcon}
        eventHandlers={{
          click: () => openGoogleMaps(position[0], position[1]),
        }}
      >
        <Popup>
          Welcome to our GC Law Group
          <br />
          Click marker/map to open in Google Maps
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
