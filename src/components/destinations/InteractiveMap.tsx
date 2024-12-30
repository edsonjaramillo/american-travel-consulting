import { type Coordinates, type MapItem } from '@/cms/types';
import { Mapbox } from '@/components/destinations/Mapbox';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';

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
