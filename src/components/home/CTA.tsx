import { cms } from '@/cms/clients/CMSClient';
import { FullLogo } from '@/components/common/Logo';
import { InfoSide } from '@/components/home/InfoSide';
import { Slideshow } from '@/components/home/Slideshow';
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
            <FullLogo className="hidden h-96 items-center justify-center lg:flex" />
          </div>
        </Responsive>
      </div>
    </>
  );
}
