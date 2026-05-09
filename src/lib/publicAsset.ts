export function publicAsset(filename: string): string {
  // Normalize to NFD so filenames with combining marks (e.g. ñ uploaded
  // from macOS/iOS) match what GitHub Pages serves.
  return `${import.meta.env.BASE_URL}${encodeURIComponent(filename.normalize('NFD'))}`;
}
