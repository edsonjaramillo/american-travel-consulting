import Image from 'next/image';

import { CMSImage } from '@/cms/types';

type GalleryProps = {
  main: CMSImage;
  secondimage: CMSImage;
  thirdimage: CMSImage;
  fourthimage: CMSImage;
};

export function Gallery({ main, secondimage, thirdimage, fourthimage }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <GalleryImage image={main} />
      <GalleryImage image={secondimage} />
      <GalleryImage image={thirdimage} />
      <GalleryImage image={fourthimage} />
    </div>
  );
}

type GalleryImagProps = {
  image: CMSImage;
};

function GalleryImage({ image }: GalleryImagProps) {
  return (
    <div className="relative h-64 overflow-hidden rounded">
      <Image src={image.url} className="object-cover" alt="" fill />
    </div>
  );
}
