import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix missing marker icons in some setups.
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactMap = () => {
  const position: [number, number] = [5.123958, 7.367993];

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">
        Find Us on the Map
      </h2>

      <MapContainer
        center={position}
        zoom={13}
        className="h-[300px] w-full rounded-lg sm:h-[400px]"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Anokif Express Services Ltd
            <br />
            We move cargo worldwide.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default ContactMap;
