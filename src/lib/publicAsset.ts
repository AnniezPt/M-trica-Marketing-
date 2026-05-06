export function publicAsset(filename: string): string {
  return `${import.meta.env.BASE_URL}${encodeURIComponent(filename)}`;
}
