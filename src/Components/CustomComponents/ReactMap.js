import React, { useState } from 'react'
import {useMapEvents,MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function ReactMap(props={getLocation:()=>{},legend:File,legendSize:[25,25],markerPosition:[],markerInitialPosition:[],markerMessage:Element}) {

    const LocationMarker = () => {
        const map = useMapEvents({
          click(e) {
            props.getLocation(e.latlng);
        }})
        return null;
    }

    const myLegend = new Icon({
        iconUrl: props.legend,
        iconSize: props.legendSize,
        iconAnchor: [18, 55]
    })

    return (
        <MapContainer className='map-container' center={props.markerPosition} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={myLegend} position={props.markerPosition}>
                <Popup>
                    {props.markerMessage}
                </Popup>
            </Marker>
            <LocationMarker />
        </MapContainer> 
    )
}
