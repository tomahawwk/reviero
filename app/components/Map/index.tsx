import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {FC, useEffect, useRef} from 'react';
import {IMapbox} from './types';
mapboxgl.accessToken =
  'pk.eyJ1IjoidG9tYWhhd2s5NiIsImEiOiJjanZjM280NWkweXB1NDVucW5jaWN5Z29jIn0.kwjJmOSzJ6IiR59EDhBszw';

const MapBox: FC<IMapbox> = ({location}) => {
  const mapContainer = useRef<HTMLDivElement>(null as any);
  const map = useRef(null as any);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/tomahawk96/ckueag1f20gxy18un23tg45p5',
      center: [location.longitude, location.latitude],
      zoom: 15,
    });

    const marker = document.createElement('div');
    marker.className = 'marker';
    new mapboxgl.Marker(marker)
      .setLngLat([location.longitude, location.latitude])
      .addTo(map.current);
  }, []);
  return (
    <div
      ref={mapContainer}
      className="map-container overflow-hidden h-[207px] sm:h-[316px] rounded-md"
    />
  );
};

export default MapBox;
