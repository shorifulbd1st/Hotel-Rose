import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the LocationMarker component
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

// Define the MapComponent
const MapComponent = () => {
    // const position = { lat: 51.505, lng: -0.09 }; // Default map center (London, UK)
    // const position = { lat: 23.8103, lng: 90.4125 }; 
    // const position = [23.8103, 90.4125];
    const position = { lat: 25.6658, lng: 88.4327 };
    return (
        <div className='w-11/12 mx-auto z-10 my-10'>
            <div className="map-container " style={{ height: '500px', width: '100%' }}>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>
            </div>
        </div>

    );
};

export default MapComponent;
