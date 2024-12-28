import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon fix for marker
import L from 'leaflet';

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng); // Update position when location is found
            map.flyTo(e.latlng, map.getZoom()); // Move the map to the found location
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

const Map = () => {
    const position = [23.8103, 90.4125]; // Dhaka, Bangladesh (Replace with your location)

    return (
        <div className="map-container" style={{ height: '500px', width: '100%' }}>
            <MapContainer
                center={position} // Use the position here
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </div>
    );
};

export default Map;
