'use client';

import { useEffect } from 'react';

import { SlideshowImage } from '@/cms/types';
import { useSlideshow } from '@/context/SlideshowContext';
import { cn } from '@/lib/ui/tw';

type SlideshowProps = {
  images: SlideshowImage[];
};

export function Slideshow({ images }: SlideshowProps) {
  const { increment, setImages } = useSlideshow();

  useEffect(() => {
    setImages(images);
    const interval = setInterval(() => increment(), 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, i) => (
        <SlideshowImageItem
          key={image.image.id}
          i={i}
          url={image.image.url}
          alt={`Slideshow image ${i + 1}`}
        />
      ))}
    </>
  );
}

const base = cn(
  'absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover object-center transition-opacity duration-slideshow',
);
const isHidden = cn('opacity-0');
const isVisible = cn('opacity-100');

type SlideShowImageProps = {
  i: number;
  url: string;
  alt: string;
};

function SlideshowImageItem({ i, url, alt }: SlideShowImageProps) {
  const { index } = useSlideshow();
  const cls = cn(base, index === i ? isVisible : isHidden);
  return <img src={url} alt={alt} className={cls} loading={i === 0 ? 'eager' : 'lazy'} />;
}
