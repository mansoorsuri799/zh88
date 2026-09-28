import Link from "next/link";
import type { Metadata } from "next";
import {
  APP_OG_IMAGE,
  APP_TWITTER_IMAGE,
  BLOG_POSTS,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ZH88 Blog — Safety, Login, Bonuses & Earning Guides 2026",
  description:
    "ZH88 Game guides for Pakistan: safety checks, login & registration, 2026 bonuses & VIP rewards, and practical earning tips. Original editorial from zh888app.com.pk.",
  keywords: [
    "ZH88 blog",
    "ZH88 guide",
    "ZH88 safe",
    "ZH88 login",
    "ZH88 bonus",
    "ZH88 earning tips",
    "ZH88 Pakistan 2026",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_ORIGIN}${ROUTES.blog}`,
  },
  openGraph: {
    title: "ZH88 Blog — Safety, Login, Bonuses & Earning Guides 2026",
    description:
      "Safety, account setup, bonus/VIP explainer, and earning tips for ZH88 Game players in Pakistan.",
    url: `${SITE_ORIGIN}${ROUTES.blog}`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${APP_OG_IMAGE}`,
        width: 512,
        height: 512,
        alt: "ZH88 Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH88 Blog — Safety, Login, Bonuses & Earning Guides 2026",
    description:
      "Safety, account setup, bonus/VIP explainer, and earning tips for ZH88 Game players in Pakistan.",
    images: [`${SITE_ORIGIN}${APP_TWITTER_IMAGE}`],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">ZH88 Blog</h1>
      <p className="text-gray-300 mb-10 text-lg max-w-3xl">
        Practical guides for ZH88 Game on Android in Pakistan—safety, accounts, promotions, and responsible
        play. We publish a focused set of articles so you can find answers without wading through outdated
        copies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <article
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              index === 0 ? "border-[#F0D000]" : "border-gray-700 hover:border-accent"
            }`}
          >
            {index === 0 && (
              <div className="inline-block bg-[#F0D000] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                Latest
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link
              href={`${ROUTES.blog}/${post.slug}`}
              className="text-accent hover:underline font-semibold"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
