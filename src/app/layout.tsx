import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";
import { APP_LOGO, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#061510",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "ZH88 Game Download APK For Android – Real Money App 2026",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download ZH88 Game APK for Android in Pakistan. Play cards, slots & prediction games, claim daily bonuses, and withdraw via JazzCash & EasyPaisa. Free v1.3 – 30MB.",
  keywords: [
    "ZH88",
    "ZH88 Game",
    "ZH88 APK",
    "ZH88 download",
    "ZH88 Game download",
    "ZH88 Pakistan",
    "ZH88 real money",
    "download ZH88",
    "ZH88 Android",
    "ZH88 Game APK 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "earning game Pakistan",
  ],
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: APP_LOGO, type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.webp", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "ZH88 Game Download APK For Android – Real Money App 2026",
    description:
      "ZH88 Game APK for Pakistan — casino-style games, daily rewards, JazzCash & EasyPaisa withdrawals. Free download v1.3.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 512,
        height: 512,
        alt: "ZH88 Game – Real money Android app",
      },
      {
        url: `${SITE_ORIGIN}/feature/og-image-square.webp`,
        width: 512,
        height: 512,
        alt: "ZH88 Game – Real money Android app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH88 Game Download APK For Android – Real Money App 2026",
    description:
      "ZH88 Game APK for Pakistan — casino-style games, daily rewards, JazzCash & EasyPaisa withdrawals. Free download v1.3.",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/twitter-card.webp`,
        width: 512,
        height: 512,
        alt: "ZH88 Game – Real money Android app",
      },
    ],
  },
  applicationName: SITE_NAME,
  category: "Gaming",
  classification: "Online Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={APP_LOGO} type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.webp" sizes="180x180" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(10, 31, 24, 0.55) 0%, rgba(6, 21, 16, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
