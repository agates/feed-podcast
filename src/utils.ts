export function sanitize (url: string | undefined | null): string | undefined | null {
  if (typeof url === 'string') {
    return url.replace(/&/g, '&amp;')
  }
  return url
}
