import { type Coordinates, type MapItem } from '@/app/cms/types';
import { Mapbox } from '@/app/components/destinations/Mapbox';
import { Section } from '@/app/components/ui/Section';

import { Text } from '../ui/Text';

type InteractiveMapProps = {
  mapStyle: string;
  viewport: Coordinates;
  zoomLevel: number;
  mapItems: MapItem[];
};

export function InteractiveMap({ mapStyle, viewport, zoomLevel, mapItems }: InteractiveMapProps) {
  return (
    <Section id="interactive-map" headerAs="h2" headerText="Interactive Map">
      <Text as="p" size="3xl">
        {mapStyle}
      </Text>
      <Mapbox mapStyle={mapStyle} initial={viewport} zoomLevel={zoomLevel} mapItems={mapItems} />
    </Section>
  );
}
