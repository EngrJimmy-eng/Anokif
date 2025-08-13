import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix missing marker icons in some setups
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ContactMap = () => {
  const position = [5.123958, 7.367993]; // Example: Aba coordinates

  return (
    <div className="container mt-5">
      <h4>Find Us on the Map</h4>
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "1100px" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Anokif Express Services Ltd <br /> We move cargo worldwide.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
