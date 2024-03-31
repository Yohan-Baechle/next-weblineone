'use client';

import { Loader as GoogleLoader } from '@googlemaps/js-api-loader';
import { useEffect, useRef, useState } from 'react';
import Loader from '../Loader/Loader';

interface GoogleMapsProps {
  apiKey: string;
  initialLocation?: { lat: number; lng: number };
  zoomLevel?: number;
  mapId?: string;
}

export default function GoogleMaps({
  apiKey,
  initialLocation = { lat: 43.9167, lng: 5.05 },
  zoomLevel = 15,
  mapId = 'DEMO_MAP_ID',
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new GoogleLoader({
        apiKey,
        version: 'weekly',
        libraries: ['marker'],
      });

      const google = await loader.load();

      const options: google.maps.MapOptions = {
        center: initialLocation,
        zoom: zoomLevel,
        mapId,
      };

      const map = new google.maps.Map(
        mapRef.current as HTMLDivElement,
        options
      );

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: initialLocation,
        map,
        title: 'Votre Emplacement',
      });

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: '<p>Voici un marqueur pour Votre Emplacement.</p>',
        });
        infoWindow.open(map, marker);
      });

      google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
        setIsMapLoaded(true);
      });
    };

    initializeMap();
  }, [apiKey, initialLocation, zoomLevel, mapId]);

  return (
    <div className='relative h-[400px] w-full'>
      {!isMapLoaded && (
        <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
          <Loader />
        </div>
      )}
      <div className='size-full' ref={mapRef}></div>
    </div>
  );
}
