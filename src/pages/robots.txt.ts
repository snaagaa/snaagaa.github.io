import type { APIRoute } from 'astro';

// Welcomes search engines and points them to the sitemap. To keep the page out
// of search results, set `noindex: true` in src/data/profile.ts instead.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site) lines.push(`Sitemap: ${new URL('/sitemap.xml', site).href}`);
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
