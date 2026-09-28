import { absoluteUrl, escapeXml, getSitemapPages } from "@/lib/sitemapData";

export function GET() {
  const pages = getSitemapPages().filter((p) => p.images && p.images.length > 0);
  const body = pages
    .map((page) => {
      const images = (page.images || [])
        .map(
          (img) => `    <image:image>
      <image:loc>${escapeXml(absoluteUrl(img.loc))}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(absoluteUrl(page.url))}</loc>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
