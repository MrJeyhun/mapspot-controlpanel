import React, { useLayoutEffect, useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './index.scss';
import { CarIcon } from './icons';
import { Socket } from 'dgram';
//prettier-ignore
//TODO: Multiple map types

//socket endpoint
const ENDPOINT = "http://127.0.0.1:4001";

const HereMaps = () => {
    // connect socket
    useEffect(() => {
        console.log('hahaha');
        const socket = socketIOClient(ENDPOINT);
        handleConnect();
        // @ts-ignore
        socket.on('locationApi', data => {
            console.log('datafromSocket', data);
        });

        socket.on('connection', (socket: Socket) => {
            console.log('New client connected');

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }, []);

    const handleDisconnect = () => {
        const socket = socketIOClient(ENDPOINT);
        console.log('disconnected');
        socket.disconnect();
    };
    const handleConnect = () => {
        const socket = socketIOClient(ENDPOINT);
        socket.connect();
    };

    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);
    const [long, setLong] = useState(49.8801);

    useLayoutEffect(() => {
        if (!mapRef.current) return;
        // @ts-ignore
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: 'oZkMqrUPiTShk-rHk2xoobxW9tIf1h-UbFpYgWQ228M',
        });
        const defaultLayers = platform.createDefaultLayers();
        const layers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, layers.raster.normal.transit, {
            center: { lat: 40.4093, lng: long },
            zoom: 12,
            pixelRatio: window.devicePixelRatio || 1,
        });

        const icon = new H.map.Icon(CarIcon),
            coords = { lat: 40.4015, lng: long },
            marker = new H.map.Marker(coords, { icon: icon });
        setInterval(() => {
            const date = new Date();

            const sec = date.getSeconds();

            marker.setGeometry({ lat: 40.4015 + sec / 30000, lng: long + sec / 30000 });
            // hMap.setCenter({lat: 40.4015 + sec/80000, lng: long + sec/80000});
        }, 1000);
        hMap.addObject(marker);
        hMap.setCenter(coords);

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
