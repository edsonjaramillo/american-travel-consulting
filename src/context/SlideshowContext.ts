import { create } from 'zustand';

import { SlideshowImage } from '@/cms/types';

type State = {
  index: number;
  maxIndex: number;
  currentImage?: SlideshowImage;
  images: SlideshowImage[];
};
type Actions = {
  increment: () => void;
  setImages: (images: SlideshowImage[]) => void;
};

export const useSlideshow = create<State & Actions>((set) => ({
  index: 0,
  maxIndex: 0,
  currentImage: undefined,
  images: [],
  increment: () => {
    set(({ index, maxIndex, images }) => {
      if (index === maxIndex) {
        return { index: 0, currentImage: images.at(0) };
      }
      const nextIndex = index + 1;
      return { index: nextIndex, currentImage: images.at(nextIndex) };
    });
  },
  setImages: (images) => set({ images, currentImage: images.at(0), maxIndex: images.length - 1 }),
}));
