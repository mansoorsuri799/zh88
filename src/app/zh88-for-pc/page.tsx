import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
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
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";
import CtaButton from "@/components/CtaButton";
import PhoneScreenshot from "@/components/PhoneScreenshot";

const PAGE_PATH = ROUTES.pc;
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Play ZH88 on PC (Emulator Setup Guide 2026)",
  description:
    "Run ZH88 Game on Windows using BlueStacks, LDPlayer, or NoxPlayer. Install the Android APK on PC with system requirements and responsible play tips.",
  keywords: [
    "ZH88 for PC",
    "ZH88 PC download",
    "ZH88 BlueStacks",
    "ZH88 LDPlayer",
    "ZH88 emulator Pakistan",
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
    title: "Play ZH88 on PC with Android Emulator",
    description:
      "Step-by-step guide to install ZH88 Game on Windows using popular Android emulators.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${APP_OG_IMAGE}`,
        width: 512,
        height: 512,
        alt: "ZH88 Game on PC via Android emulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH88 for PC — Emulator Guide",
    description: "Install ZH88 Game on Windows with BlueStacks or LDPlayer.",
    images: [`${SITE_ORIGIN}${APP_OG_IMAGE}`],
  },
};

const emulatorSteps = [
  {
    title: "Download an Android emulator",
    body: "Install BlueStacks, LDPlayer, or NoxPlayer on Windows 10/11 from each vendor’s official website only.",
  },
  {
    title: "Get the ZH88 APK",
    body: `Visit ${SITE_DOMAIN} or our download page, save the ZH88 Game APK, and note the file location on your PC.`,
  },
  {
    title: "Install APK inside the emulator",
    body: 'Open the emulator, use "Install APK" or drag the file into the window, then wait for the install to finish.',
  },
  {
    title: "Sign in and configure controls",
    body: "Launch ZH88, register or log in, map tap zones if needed, and keep graphics on balanced settings for stable FPS.",
  },
];

export default function Zh88ForPcPage() {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Play ZH88 on PC with Android Emulator",
    description:
      "Guide to run ZH88 Game on Windows using BlueStacks, LDPlayer, or NoxPlayer with system requirements and install steps.",
    image: `${SITE_ORIGIN}/zh88-pakistan-games.webp`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}${APP_LOGO}`,
        ...imageObjectLicensing,
        creditText: `${SITE_NAME} logo`,
      },
    },
    datePublished: "2026-02-08",
    dateModified: "2026-02-08",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    about: {
      "@type": "SoftwareApplication",
      name: APP_NAME,
      operatingSystem: "Windows 10+ via Android emulator",
      applicationCategory: "GameApplication",
    },
    articleSection: "Gaming",
    inLanguage: "en-US",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Install ZH88 Game on PC",
    description: "Use an Android emulator on Windows to install and play ZH88 Game.",
    url: PAGE_URL,
    step: emulatorSteps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.body,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "ZH88 for PC", item: PAGE_URL },
    ],
  };

  return (
    <article className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
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
              ZH88 for PC
            </li>
          </ol>
        </nav>

        <section className="py-8 md:py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Play <span className="text-accent">ZH88</span> on PC
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            ZH88 Game ships as an Android APK. There is no official Windows installer—use a trusted
            emulator to play on a larger screen from Pakistan or abroad.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-8">
            Gaming involves financial risk when using real PKR. Set limits and take breaks—past results
            do not guarantee future outcomes.
          </p>
          <CtaButton href={ROUTES.download}>Download ZH88 APK</CtaButton>
          <div className="flex justify-center mt-10">
            <PhoneScreenshot
              src="/zh88-pakistan-games.webp"
              alt="ZH88 Game lobby — Pakistan card and casino-style titles"
              size="lg"
              priority
            />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">
            App details (Android build)
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-800 max-w-3xl mx-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ["App name", APP_NAME],
                  ["Category", APP_CATEGORY],
                  ["Size", APP_SIZE],
                  ["Version", APP_VERSION],
                  ["Mobile OS", APP_OS],
                  ["Update", APP_UPDATE],
                  ["Downloads", APP_DOWNLOADS],
                  ["Languages", APP_LANGUAGES],
                  ["PC method", "Android emulator (Windows)"],
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
        </section>

        <section className="py-12">
          <div className="bg-secondary rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-accent mb-4">Why use PC instead of phone?</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Larger display makes menus and tables easier to read during long sessions.</li>
              <li>Stable power and cooling can reduce mid-game interruptions on low-end phones.</li>
              <li>Keyboard shortcuts in some emulators help map frequent taps—customize carefully.</li>
              <li>You can keep guides from {SITE_DOMAIN} open in a browser while playing.</li>
            </ul>
          </div>
        </section>

        <section className="py-12">
          <div className="bg-secondary rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-accent mb-6 text-center">
              Install ZH88 on Windows
            </h2>
            <ol className="space-y-4 list-none">
              {emulatorSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-[#0A1F18] rounded-lg p-6 border-l-4 border-accent"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-300">{step.body}</p>
                </li>
              ))}
            </ol>
            <div className="flex justify-center mt-8">
              <CtaButton href={ROUTES.download}>Get APK for emulator</CtaButton>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Recommended Android emulators
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "BlueStacks",
                detail:
                  "Popular choice with simple APK install and decent performance on mid-range laptops.",
              },
              {
                name: "LDPlayer",
                detail: "Lightweight option tuned for gaming; good for PCs with 8GB RAM or less.",
              },
              {
                name: "NoxPlayer",
                detail: "Offers flexible control mapping—useful if you prefer mouse clicks over taps.",
              },
            ].map((emu) => (
              <div key={emu.name} className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-accent mb-2">{emu.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{emu.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="bg-secondary rounded-xl p-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Minimum PC specs</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Windows 10 64-bit</li>
                <li>Dual-core CPU with virtualization enabled</li>
                <li>4GB RAM (8GB shared with emulator)</li>
                <li>5GB free storage for emulator + APK</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Recommended specs</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Windows 11, quad-core Intel/AMD</li>
                <li>8GB+ RAM dedicated to the emulator instance</li>
                <li>SSD storage and wired internet</li>
                <li>Updated GPU drivers for smoother rendering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-8 text-center">
          <p className="text-gray-400 mb-4">
            Prefer mobile? See the{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              Android download guide
            </Link>{" "}
            or return{" "}
            <Link href={ROUTES.home} className="text-accent hover:underline">
              home
            </Link>
            .
          </p>
          <Image
            src="/zh88.webp"
            alt="ZH88 Game logo — Android APK used inside PC emulators"
            width={160}
            height={160}
            className="mx-auto object-contain opacity-90"
          />
        </section>
      </div>
    </article>
  );
}
