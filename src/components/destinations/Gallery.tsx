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
      <img
        src={image.url}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        alt=""
      />
    </div>
  );
}
