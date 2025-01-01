export type Destination = {
  id: string;
  name: string;
  description: string;
  slug: string;
  main: CMSImage;
  secondimage: CMSImage;
  thirdimage: CMSImage;
  fourthimage: CMSImage;
  featured: boolean;
  featuredSort: number;
  viewport: Coordinates;
  zoomlevel: number;
  mapitems: MapItem[];
};

export type MapItem = {
  id: string;
  name: string;
  coordinate: Coordinates;
  link?: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Employee = {
  id: string;
  name: string;
  biography: string;
  quote: string;
  email: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  organization: string;
  position: string;
  order: number;
};

export type CMSImage = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type SlideshowTextColor = 'white' | 'red' | 'blue';
export type SlideshowLogoColor = 'white' | 'blue';

export type SlideshowImage = {
  image: CMSImage;
  order: number;
  textColor: SlideshowTextColor;
  logoColor: SlideshowLogoColor;
};

export type PageImage = {
  name: string;
  image: CMSImage;
};
