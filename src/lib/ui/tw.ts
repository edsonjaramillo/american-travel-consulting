import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const baseColorVariants = ['light', 'dark'] as const;

export function cn(...inputs: ClassValue[]) {
  return extendTailwindMerge({
    extend: {
      classGroups: {
        'text-color': [
          { primary: baseColorVariants },
          { secondary: baseColorVariants },
          { tertiary: baseColorVariants },
          {
            grayscale: [
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
              '950',
              'standard',
              'neutral',
              'inverse',
            ],
          },
          { error: baseColorVariants },
          { info: baseColorVariants },
          { success: baseColorVariants },
          { warning: baseColorVariants },
        ],
        'font-size': [
          { text: ['cta', 'subheader', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'base', 'small'] },
        ],
      },
    },
  })(clsx(inputs));
}
