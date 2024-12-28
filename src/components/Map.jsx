import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon fix for marker
import L from 'leaflet';

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [locationName, setLocationName] = useState('');

    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng); // Update position when location is found
            map.flyTo(e.latlng, map.getZoom()); // Move the map to the found location
            fetchLocationName(e.latlng); // Fetch the location name
        },
    });

    // Function to fetch location name from latitude and longitude using Nominatim API
    const fetchLocationName = async (latlng) => {
        const lat = latlng.lat;
        const lng = latlng.lng;
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&language=en`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setLocationName(data.display_name); // Set the location name in English
        } catch (error) {
            console.error("Error fetching location name:", error);
        }
    };

    return position === null ? null : (
        <Marker position={position}>
            <Popup>{locationName || 'You are here'}</Popup> {/* Display the location name */}
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
