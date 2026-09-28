import { SITE_ORIGIN } from "@/lib/site";

/** Legacy API mirror of /robots.txt */
export function GET() {
  const robotsTxt = `User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /
Disallow: /api/
Disallow: /_next/

User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
