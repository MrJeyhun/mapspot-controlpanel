import React, { useLayoutEffect } from 'react';
import './index.scss';
import { CarIcon } from './icons';
//prettier-ignore
//TODO: Multiple map types
const HereMaps = () => {
    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);

    
    
    useLayoutEffect(() => {
    if (!mapRef.current) return;
    // @ts-ignore
    const H = window.H;
    const platform = new H.service.Platform({
        'apikey': 'oZkMqrUPiTShk-rHk2xoobxW9tIf1h-UbFpYgWQ228M'
    });
    const defaultLayers = platform.createDefaultLayers();
    const layers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, layers.raster.normal.transit, {
      center: { lat: 40.4093, lng: 49.8671 },
      zoom: 12,
      pixelRatio: window.devicePixelRatio || 1
    });

    
    
    const icon = new H.map.Icon(CarIcon), coords = {lat: 40.4015, lng: 49.8801}, marker = new H.map.Marker(coords, {icon: icon})

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
