import React, { useLayoutEffect, useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './index.scss';
import { CarIcon } from './icons';
//prettier-ignore
//TODO: Multiple map types

//socket endpoint
// const ENDPOINT = "http://127.0.0.1:4001";
const ENDPOINT = "https://09c8525c2314.ngrok.io";

const HereMaps = () => {
    useEffect(() => {
        handleConnect();
    }, []);

    const handleConnect = () => {
        const socket = socketIOClient(ENDPOINT);
        socket.connect();
    };

    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);

    //create socket client
    const socket = socketIOClient(ENDPOINT);

    useLayoutEffect(() => {
        if (!mapRef.current) return;
        // @ts-ignore
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: 'oZkMqrUPiTShk-rHk2xoobxW9tIf1h-UbFpYgWQ228M',
        });
        const defaultLayers = platform.createDefaultLayers();
        const layers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: { lat: 40.4093, lng: 49.8671 },
            zoom: 16,
            pixelRatio: window.devicePixelRatio || 1,
        });

        const icon = new H.map.Icon(CarIcon);
        const marker = new H.map.Marker({ lat: 0, lng: 0 }, { icon: icon });
        // @ts-ignore
        socket.on('locationApi', data => {
            marker.setGeometry({ lat: data.latitude, lng: data.longitude });
            // hMap.setCenter({ lat: data.latitude, lng: data.longitude });
        });

        hMap.addObject(marker);

        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        // This variable is unused and is present for explanatory purposes
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

        // Create the default UI components to allow the user to interact with them
        // This variable is unused
        const ui = H.ui.UI.createDefault(hMap, defaultLayers);

        // This will act as a cleanup to run once this hook runs again.
        // This includes when the component un-mounts
        return () => {
            hMap.dispose();
        };
    }, [mapRef]); // This will run this hook every time this ref is updated

    return <div className="map" ref={mapRef} />;
};

export default HereMaps;
