import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { personalInfo } from '@/data';

// Leaflet requires some CSS adjustments for the marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '12px',
};

const defaultCenter = {
  lat: 8.0883, // Kanyakumari latitude
  lng: 77.5385, // Kanyakumari longitude
};

const MapComponent: React.FC = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize the map
      mapInstance.current = L.map(mapRef.current).setView(
        [defaultCenter.lat, defaultCenter.lng],
        14 // Zoom level
      );

      // Add OpenStreetMap tile layer (no API key required)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Add a marker
      L.marker([defaultCenter.lat, defaultCenter.lng])
        .addTo(mapInstance.current);
    }

    // Cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="h-full rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} style={containerStyle}></div>
    </div>
  );
};

export default MapComponent;