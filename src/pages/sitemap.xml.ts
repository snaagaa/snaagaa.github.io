import type { APIRoute } from 'astro';

// A one-page sitemap, dated with each build, for search engines.
export const GET: APIRoute = ({ site }) => {
  const home = new URL('/', site ?? 'http://localhost:4321').href;
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${home}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
