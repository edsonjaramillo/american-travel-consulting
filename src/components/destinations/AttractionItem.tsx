'use client';

import { MapItem } from '@/cms/types';
import { Text } from '@/components/ui/Text';
import { useMapbox } from '@/context/MapboxContext';

function AttractionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="block size-4 shrink-0 text-secondary">
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  );
}

type AttractionItemProps = {
  mapItem: MapItem;
};

export function AttractionItem({ mapItem }: AttractionItemProps) {
  const { setPopup } = useMapbox();
  return (
    <button
      type="button"
      onClick={() => {
        setPopup({
          name: mapItem.name,
          link: mapItem.link,
          latitude: mapItem.coordinate.latitude,
          longitude: mapItem.coordinate.longitude,
        });

        const interactiveMap = document.getElementById('interactive-map');
        if (interactiveMap) {
          interactiveMap.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
      <div className="flex items-center gap-2">
        <AttractionIcon />
        <Text as="span" className="line-clamp-1 text-left">
          {mapItem.name}
        </Text>
      </div>
    </button>
  );
}
