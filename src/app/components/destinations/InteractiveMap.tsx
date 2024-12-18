import { type Coordinates, type MapItem } from '@/app/cms/types';
import { Mapbox } from '@/app/components/destinations/Mapbox';
import { Section } from '@/app/components/ui/Section';

type InteractiveMapProps = {
  viewport: Coordinates;
  zoomLevel: number;
  mapItems: MapItem[];
};

export function InteractiveMap({ viewport, zoomLevel, mapItems }: InteractiveMapProps) {
  return (
    <Section id="interactive-map" headerAs="h2" headerText="Interactive Map">
      <Mapbox initial={viewport} zoomLevel={zoomLevel} mapItems={mapItems} />
    </Section>
  );
}
