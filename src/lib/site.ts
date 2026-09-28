/** Canonical brand + domain constants for ZH88 */
export const SITE_NAME = "ZH88";
export const SITE_DOMAIN = "zh888app.com.pk";
export const SITE_ORIGIN = `https://${SITE_DOMAIN}`;
export const SITE_EMAIL = `support@${SITE_DOMAIN}`;

export const APP_NAME = "ZH88 Game";
export const APP_VERSION = "v1.3";
export const APP_SIZE = "30MB";
export const APP_OS = "Android 5.0+";
export const APP_UPDATE = "08-February-2026";
export const APP_DOWNLOADS = "500K+";
export const APP_LANGUAGES = "Urdu, English";
export const APP_CATEGORY = "Cards, Game";

/** On-domain download UX — APK CTA target from publisher install steps */
export const APP_DOWNLOAD_URL = "https://www.zh88official.pk/";

export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.5",
  ratingCount: "500000",
  bestRating: "5",
  worstRating: "1",
} as const;

export const APP_LOGO = "/zh88.webp";
export const APP_OG_IMAGE = "/feature/og-image.webp";
export const APP_TWITTER_IMAGE = "/feature/twitter-card.webp";

export const APP_SCREENSHOTS = [
  `${SITE_ORIGIN}/zh88.webp`,
  `${SITE_ORIGIN}/zh88-pakistan-games.webp`,
  `${SITE_ORIGIN}/zh88-features.webp`,
  `${SITE_ORIGIN}/zh88-invite-friends.webp`,
] as const;

export const ROUTES = {
  home: "/",
  download: "/download-zh88",
  deposit: "/deposit-money-in-zh88",
  withdraw: "/withdraw-money-from-zh88",
  pc: "/zh88-for-pc",
  about: "/about-us",
  blog: "/blog",
  contact: "/contact-us",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
} as const;

export const BLOG_POSTS = [
  {
    slug: "is-zh88-safe-real-or-fake-pakistan",
    title: "Is ZH88 Safe, Real or Fake in Pakistan?",
    description:
      "Honest look at ZH88 safety signals, payment checks, scam warnings, and how to download the real ZH88 Game APK in Pakistan.",
    date: "2026-02-08",
    readTime: "9 min read",
  },
  {
    slug: "zh88-login-and-registration-guide",
    title: "ZH88 Login & Registration Guide",
    description:
      "Create a ZH88 Game account, verify with OTP, log in securely, and fix common registration issues on Android.",
    date: "2026-02-08",
    readTime: "7 min read",
  },
  {
    slug: "zh88-bonus-rewards-vip-guide-2026",
    title: "ZH88 Bonus, Rewards & VIP Guide 2026",
    description:
      "Welcome bonus, daily login rewards, cashback, referral offers, and VIP lounge perks explained for ZH88 players.",
    date: "2026-02-08",
    readTime: "8 min read",
  },
  {
    slug: "zh88-earning-tips-pakistan-2026",
    title: "ZH88 Earning Tips for Pakistan 2026",
    description:
      "Practical ZH88 earning tips: gameplay focus, events, referrals, tournaments, and responsible bankroll habits.",
    date: "2026-02-08",
    readTime: "8 min read",
  },
] as const;
