// src/utils/imageLoader.js
const imageModules = import.meta.glob('/src/assets/svg/frameworks/*.{svg,png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

export function getImageSrc(path) {
  // Construye la clave completa como aparece en la ruta
  const fullPath = `/src/${path}`;
  return imageModules[fullPath] || null;
}