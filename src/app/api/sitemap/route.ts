import { absoluteUrl, escapeXml, getSitemapPages } from "@/lib/sitemapData";

/** Legacy endpoint kept for compatibility; prefer /index.xml */
export function GET() {
  const pages = getSitemapPages();
  const body = pages
    .map(
      (page) => `  <url>
    <loc>${escapeXml(absoluteUrl(page.url))}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
