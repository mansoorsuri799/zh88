import { APP_LOGO, BLOG_POSTS, ROUTES, SITE_ORIGIN } from "@/lib/site";

export type SitemapPage = {
  url: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-02-08T00:00:00.000Z";

export function getSitemapPages(): SitemapPage[] {
  const main: SitemapPage[] = [
    {
      url: ROUTES.home,
      lastMod: LASTMOD,
      changeFreq: "daily",
      priority: 1,
      images: [
        {
          loc: APP_LOGO,
          title: "ZH88 Game – Official App Icon",
          caption: "ZH88 Game Android APK brand image for Pakistan players",
        },
        {
          loc: "/zh88-pakistan-games.webp",
          title: "ZH88 Game Pakistan lobby",
          caption: "Popular ZH88 games available for Android users in Pakistan",
        },
        {
          loc: "/zh88-features.webp",
          title: "ZH88 Game features",
          caption: "ZH88 Game feature highlights including bonuses and rewards",
        },
      ],
    },
    {
      url: ROUTES.download,
      lastMod: LASTMOD,
      changeFreq: "weekly",
      priority: 0.9,
      images: [
        {
          loc: APP_LOGO,
          title: "Download ZH88 Game APK",
          caption: "Download ZH88 Game APK for Android",
        },
      ],
    },
    {
      url: ROUTES.deposit,
      lastMod: LASTMOD,
      changeFreq: "weekly",
      priority: 0.9,
      images: [
        {
          loc: "/zh88-deposit-money.webp",
          title: "Deposit money in ZH88",
          caption: "ZH88 deposit screen for JazzCash and EasyPaisa",
        },
      ],
    },
    {
      url: ROUTES.withdraw,
      lastMod: LASTMOD,
      changeFreq: "weekly",
      priority: 0.9,
      images: [
        {
          loc: "/zh88-withdraw-money.webp",
          title: "Withdraw money from ZH88",
          caption: "ZH88 withdraw screen for Pakistani wallets",
        },
      ],
    },
    {
      url: ROUTES.pc,
      lastMod: LASTMOD,
      changeFreq: "weekly",
      priority: 0.85,
      images: [
        {
          loc: "/zh88-pakistan-games.webp",
          title: "ZH88 for PC",
          caption: "Play ZH88 Game on PC with an Android emulator",
        },
      ],
    },
    {
      url: ROUTES.about,
      lastMod: LASTMOD,
      changeFreq: "monthly",
      priority: 0.7,
      images: [
        {
          loc: APP_LOGO,
          title: "About ZH88",
          caption: "About the ZH88 Game informational website",
        },
      ],
    },
    {
      url: ROUTES.blog,
      lastMod: LASTMOD,
      changeFreq: "weekly",
      priority: 0.8,
    },
    {
      url: ROUTES.contact,
      lastMod: LASTMOD,
      changeFreq: "monthly",
      priority: 0.7,
    },
    {
      url: ROUTES.privacy,
      lastMod: LASTMOD,
      changeFreq: "yearly",
      priority: 0.5,
    },
    {
      url: ROUTES.disclaimer,
      lastMod: LASTMOD,
      changeFreq: "yearly",
      priority: 0.5,
    },
  ];

  const blogs: SitemapPage[] = BLOG_POSTS.map((post) => ({
    url: `/blog/${post.slug}`,
    lastMod: LASTMOD,
    changeFreq: "monthly" as const,
    priority: 0.8,
  }));

  return [...main, ...blogs];
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
