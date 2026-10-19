export const baseUrl = import.meta.env.BASE_URL;

// Keep remote image URLs intact; resolve local assets under the deployment base.
export function siteUrl(path = '') {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}
