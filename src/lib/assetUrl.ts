export function assetUrl(img: string | { src: string }): string {
  return typeof img === 'string' ? img : img.src;
}
