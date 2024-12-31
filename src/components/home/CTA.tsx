import { cms } from '@/cms/clients/CMSClient';
import { InfoSide } from '@/components/home/InfoSide';
import { Slideshow } from '@/components/home/Slideshow';
import { SlideshowLogo } from '@/components/home/SlideshowLogo';
import { Responsive } from '@/components/ui/Responsive';

export async function CTA() {
  const slideshowImages = await cms.getSlideshowImages();
  return (
    <>
      <div className="relative flex h-[80vh] items-center justify-center">
        <Slideshow images={slideshowImages} />
        <Responsive className="absolute">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
            <InfoSide />
            <SlideshowLogo />
          </div>
        </Responsive>
      </div>
    </>
  );
}
