import { MapItem } from '@/app/cms/types';
import { Section } from '@/app/components/ui/Section';
import { Text } from '@/app/components/ui/Text';

type PopularAttractionsProps = {
  mapItems: MapItem[];
};

export function PopularAttractions({ mapItems }: PopularAttractionsProps) {
  return (
    <Section id="popular-attractions" headerAs="h2" headerText="Popular Attractions">
      <div className="grid grid-cols-attractions gap-2 rounded bg-grayscale-100 p-4 shadow-md">
        {mapItems.map((mapItem) => (
          <AttractionItem key={mapItem.id} mapItem={mapItem} />
        ))}
      </div>
    </Section>
  );
}

type AttractionItemProps = {
  mapItem: MapItem;
};

function AttractionItem({ mapItem }: AttractionItemProps) {
  return (
    <div className="flex items-center gap-2">
      <AttractionIcon />
      <Text as="span" className="line-clamp-1">
        {mapItem.name}
      </Text>
    </div>
  );
}

function AttractionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="block size-4 text-primary"
      aria-hidden="true">
      <path
        fillRule="evenodd"
        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
