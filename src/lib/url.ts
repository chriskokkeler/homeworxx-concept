// Bouwt paden die ook onder een base-pad (GitHub Pages) werken.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path = ''): string => {
  const p = path.replace(/^\//, '');
  if (!p) return `${base}/`;
  const plain = !/[.#?]/.test(p) && !p.endsWith('/');
  return `${base}/${p}${plain ? '/' : ''}`;
};
