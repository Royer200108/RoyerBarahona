import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/*/*/*.{png,jpg,jpeg,webp,svg}',
  {
    eager: true
  }
);

export function getImage(imageName: string): ImageMetadata {
  const image = images[`/src/assets/${imageName}`];

  if (!image) {
    throw new Error(
      `"${imageName}" no existe en /src/assets/`
    );
  }

  return image.default;
}