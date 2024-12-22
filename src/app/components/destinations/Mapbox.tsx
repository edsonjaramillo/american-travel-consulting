'use client';

import { useEffect, useMemo, useRef } from 'react';
import ReactMapGL, { MapRef, Marker, Popup } from 'react-map-gl';

import { Coordinates, MapItem } from '@/app/cms/types';
import { buttonVariants } from '@/app/components/ui/Button';
import { Text } from '@/app/components/ui/Text';
import { useMapbox } from '@/app/context/MapboxContext';

const MAPBOX_KEY = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

type MapboxProps = {
  mapStyle: string;
  initial: Coordinates;
  zoomLevel: number;
  mapItems: MapItem[];
};

export function Mapbox({ mapStyle, initial, zoomLevel, mapItems }: MapboxProps) {
  const mapRef = useRef<MapRef>(null);
  const { isPopupOpen, marker, setPopup, closePopup } = useMapbox();

  useEffect(() => {
    if (marker && mapRef.current) {
      mapRef.current.getMap().flyTo({
        center: [marker.longitude, marker.latitude],
        duration: 1000,
        zoom: 14,
      });
    }
  }, [marker]);

  const buttonCls = buttonVariants();

  const pins = useMemo(() => {
    return mapItems.map((item) => (
      <Marker
        key={item.id}
        latitude={item.coordinate.latitude}
        longitude={item.coordinate.longitude}
        anchor="bottom"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          e.originalEvent.stopPropagation();

          setPopup({
            name: item.name,
            link: item.link,
            latitude: item.coordinate.latitude,
            longitude: item.coordinate.longitude,
          });
        }}>
        <Icon />
      </Marker>
    ));
  }, [mapItems, setPopup]);

  return (
    <ReactMapGL
      ref={mapRef}
      initialViewState={{
        latitude: initial.latitude,
        longitude: initial.longitude,
        zoom: zoomLevel,
      }}
      mapStyle={mapStyle}
      mapboxAccessToken={MAPBOX_KEY}
      style={{ height: '30rem', borderRadius: '0.25rem', overflow: 'hidden' }}>
      {pins}

      {/* Popup */}
      {isPopupOpen && marker && (
        <Popup
          anchor="top"
          longitude={marker.longitude}
          className="rounded shadow-md"
          latitude={marker.latitude}
          onClose={() => closePopup()}>
          <div className="flex flex-col gap-2">
            <Text as="span" size="lg" className="font-medium">
              {marker.name}
            </Text>
            {marker.link && (
              <a
                href={marker.link}
                className={buttonCls}
                rel="noopener nofollow noreferrer external"
                target="_blank">
                View Website
              </a>
            )}
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}

function Icon() {
  return (
    <button type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5 text-secondary">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
      </svg>
    </button>
  );
}
