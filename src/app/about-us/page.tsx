import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CtaButton from "@/components/CtaButton";
import {
  APP_DOWNLOADS,
  APP_LOGO,
  APP_OG_IMAGE,
  APP_TWITTER_IMAGE,
  APP_VERSION,
  ROUTES,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About ZH88 & zh888app.com.pk — Our Mission",
  description:
    "Learn about ZH88 Game, the zh888app.com.pk editorial team, and our mission to share clear download, safety, and wallet guides for Pakistani Android players.",
  keywords: [
    "about ZH88",
    "zh888app.com.pk",
    "ZH88 Game Pakistan",
    "ZH88 download site",
    "ZH88 guides",
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
    canonical: `${SITE_ORIGIN}${ROUTES.about}`,
  },
  openGraph: {
    title: "About ZH88 & zh888app.com.pk — Our Mission",
    description:
      "Independent ZH88 Game guides for Pakistan: downloads, safety, bonuses, and responsible play on zh888app.com.pk.",
    url: `${SITE_ORIGIN}${ROUTES.about}`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${APP_OG_IMAGE}`,
        width: 512,
        height: 512,
        alt: `About ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ZH88 & zh888app.com.pk — Our Mission",
    description:
      "Independent ZH88 Game guides for Pakistan: downloads, safety, bonuses, and responsible play.",
    images: [`${SITE_ORIGIN}${APP_TWITTER_IMAGE}`],
  },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About ZH88 on {SITE_DOMAIN}</h1>
            <p className="text-lg text-gray-400">Clear guides for the ZH88 Game community in Pakistan</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                <Link href={ROUTES.home} className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-lg overflow-hidden bg-[#0A1F18]">
                    <Image
                      src={APP_LOGO}
                      alt={`${SITE_NAME} Game logo`}
                      title={`About ${SITE_NAME} Game`}
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                    {SITE_NAME} Game
                  </Link>{" "}
                  ({APP_VERSION}, {APP_DOWNLOADS} installs reported) is a popular Android earning platform in
                  Pakistan, known for card tables, arcade modes, JazzCash & EasyPaisa wallets, and rotating
                  promotions.{" "}
                  <a
                    href={SITE_ORIGIN}
                    className="text-accent hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE_DOMAIN}
                  </a>{" "}
                  is an independent information site—we explain how to download safely, set up accounts, and
                  understand bonuses without replacing the official app support team.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We write in plain Pakistani English, cite real in-app flows where possible, and remind readers
                  that real-money play carries loss risk. Our small editorial team updates guides when APK
                  versions or promo rules change.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our mission</h2>
            <ul className="text-lg text-white leading-relaxed space-y-3 max-w-2xl mx-auto">
              <li>Help users find trusted download steps and avoid fake APK clones.</li>
              <li>Publish focused blog guides—safety, login, bonuses, earning tips—not filler articles.</li>
              <li>Promote responsible play, 18+ access, and realistic expectations (no income guarantees).</li>
              <li>Link to wallet tutorials on-domain so deposits and withdrawals stay easy to find.</li>
            </ul>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Questions or corrections?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Spot an outdated screenshot or broken step? Reach out—we appreciate player feedback.
            </p>
            <CtaButton href={ROUTES.contact} icon="arrow">
              Contact Us
            </CtaButton>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_ORIGIN,
              logo: `${SITE_ORIGIN}${APP_LOGO}`,
              description:
                "Editorial site covering ZH88 Game downloads, safety, and wallet guides for Pakistani players.",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_ORIGIN}${ROUTES.about}`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
              { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_ORIGIN}${ROUTES.about}` },
            ],
          }),
        }}
      />
    </article>
  );
}
