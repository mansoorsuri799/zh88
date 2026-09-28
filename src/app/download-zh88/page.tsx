import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  APP_CATEGORY,
  APP_DOWNLOADS,
  APP_LANGUAGES,
  APP_NAME,
  APP_OS,
  APP_SIZE,
  APP_UPDATE,
  APP_VERSION,
  APP_LOGO,
  APP_OG_IMAGE,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";
import {
  APP_AGGREGATE_RATING,
  APP_DOWNLOAD_URL,
  APP_SCREENSHOTS,
} from "@/lib/appFacts";
import CtaButton from "@/components/CtaButton";

const PAGE_PATH = ROUTES.download;
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Download ZH88 Game APK for Android (Free Guide)",
  description:
    "Step-by-step guide to download and install the official ZH88 Game APK on Android in Pakistan. Enable unknown sources, install safely, and register your account.",
  keywords: [
    "download ZH88",
    "ZH88 APK",
    "ZH88 Game download",
    "ZH88 Android",
    "ZH88 Pakistan",
    "ZH88 latest version",
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
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Download ZH88 Game APK for Android",
    description:
      "Free download guide for ZH88 Game on Android. JazzCash and EasyPaisa supported after registration. 500K+ downloads.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${APP_OG_IMAGE}`,
        width: 512,
        height: 512,
        alt: "Download ZH88 Game APK for Android in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download ZH88 Game APK for Android",
    description:
      "Install the ZH88 Game APK safely on Android with our updated Pakistan guide.",
    images: [`${SITE_ORIGIN}${APP_OG_IMAGE}`],
  },
};

const downloadSteps = [
  {
    name: "Visit the official download page",
    text: `Open ${SITE_ORIGIN} in your mobile browser and go to the Download ZH88 section, or use the publisher install link from this guide.`,
  },
  {
    name: "Tap Download",
    text: "Tap the download button to save the ZH88 Game APK file. Wait until the download finishes before opening the file.",
  },
  {
    name: "Enable unknown sources",
    text: 'In Android settings, allow installs from unknown sources or "Install unknown apps" for your browser or file manager.',
  },
  {
    name: "Install the APK",
    text: "Open the downloaded APK from your notifications or Downloads folder, confirm permissions, and tap Install.",
  },
  {
    name: "Register your account",
    text: "Launch ZH88 Game, complete registration with your mobile number and OTP, then log in. Only add PKR funds you can afford to lose.",
  },
];

export default function DownloadZh88Page() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    operatingSystem: APP_OS,
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: APP_AGGREGATE_RATING,
    downloadUrl: APP_DOWNLOAD_URL,
    softwareVersion: APP_VERSION,
    fileSize: APP_SIZE,
    dateModified: "2026-02-08",
    description:
      "ZH88 Game is a free Android card and casino-style gaming app for Pakistan with JazzCash and EasyPaisa wallet support.",
    screenshot: [...APP_SCREENSHOTS],
    image: `${SITE_ORIGIN}${APP_LOGO}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    inLanguage: ["en", "ur"],
    countriesSupported: "PK",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to download and install ZH88 Game on Android",
    description:
      "Install the ZH88 Game APK on Android in Pakistan: visit the site, download, enable unknown sources, install, and register.",
    url: PAGE_URL,
    totalTime: "PT5M",
    step: downloadSteps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_ORIGIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Download ZH88",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <article className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={ROUTES.home} className="text-accent hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-500">
              /
            </li>
            <li className="text-gray-300" aria-current="page">
              Download ZH88
            </li>
          </ol>
        </nav>

        <section className="py-8 md:py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Download <span className="text-accent">ZH88 Game</span> on Android
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Free APK install guide for Pakistan. After setup, you can{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline font-semibold">
              deposit in PKR
            </Link>
            , play responsibly, and{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:underline font-semibold">
              withdraw winnings
            </Link>{" "}
            via JazzCash or EasyPaisa when eligible. Returns are never guaranteed.
          </p>
          <CtaButton>Download ZH88 APK</CtaButton>
          <div className="flex justify-center mt-10">
            <Image
              src="/zh88.webp"
              alt="ZH88 Game app logo — official Android download for Pakistan players"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              sizes="(max-width: 768px) 260px, 320px"
            />
          </div>
        </section>

        <section className="py-12" id="download-info">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">
            Download information
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ["App name", APP_NAME],
                  ["Category", APP_CATEGORY],
                  ["Version", APP_VERSION],
                  ["Size", APP_SIZE],
                  ["Required OS", APP_OS],
                  ["Last update", APP_UPDATE],
                  ["Downloads", APP_DOWNLOADS],
                  ["Languages", APP_LANGUAGES],
                  ["Price", "Free"],
                ].map(([label, value], i) => (
                  <tr
                    key={label}
                    className={i % 2 === 0 ? "bg-[#0A1F18]/50" : "bg-[#061510]/50"}
                  >
                    <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-left text-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-8">
            <CtaButton>Get ZH88 APK</CtaButton>
          </div>
        </section>

        <section className="py-12" id="download-steps">
          <div className="bg-secondary rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">
              Install ZH88 Game step by step
            </h2>
            <ol className="space-y-6 list-none">
              {downloadSteps.map((step, index) => (
                <li
                  key={step.name}
                  className="bg-[#0A1F18] rounded-lg p-6 border-l-4 border-accent"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    Step {index + 1}: {step.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">
            Why players choose ZH88
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Local payments",
                body: "JazzCash and EasyPaisa options familiar to Pakistani users.",
              },
              {
                title: "Compact APK",
                body: "Roughly 30MB download suited for everyday Android phones.",
              },
              {
                title: "Urdu and English",
                body: "Switch languages inside the app for easier navigation.",
              },
              {
                title: "Wallet guides on-site",
                body: "Clear deposit and withdraw walkthroughs on zh888app.com.pk.",
              },
              {
                title: "Play on your terms",
                body: "Set limits, take breaks, and never chase losses.",
              },
              {
                title: "Updated build",
                body: "Track version v1.3 and February 2026 update notes before installing.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-secondary px-8 py-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-accent">{item.title}</h3>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 text-center space-y-4">
          <p className="text-gray-400">
            Need help funding your wallet? See{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              how to deposit money in ZH88
            </Link>
            .
          </p>
          <Link href={ROUTES.home} className="text-accent hover:underline font-medium inline-block">
            Back to ZH88 home
          </Link>
        </section>
      </div>
    </article>
  );
}
