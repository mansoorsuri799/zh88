import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import {
  APP_OG_IMAGE,
  ROUTES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact ZH88 Support — Email Help on zh888app.com.pk",
  description:
    "Contact the zh888app.com.pk team for ZH88 Game guide corrections, privacy questions, or site feedback. Email support@zh888app.com.pk.",
  keywords: "contact ZH88, ZH88 support, ZH88 email, zh888app.com.pk help, customer support",
  openGraph: {
    title: "Contact ZH88 Support — Email Help on zh888app.com.pk",
    description: "Get in touch with the ZH88 editorial and support contact for site-related queries.",
    url: `${SITE_ORIGIN}${ROUTES.contact}`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${APP_OG_IMAGE}`, alt: "Contact ZH88" }],
  },
  twitter: {
    card: "summary",
    title: "Contact ZH88 Support",
    description: "Email support@zh888app.com.pk for help with ZH88 guides and site policies.",
  },
  alternates: {
    canonical: `${SITE_ORIGIN}${ROUTES.contact}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-gray-400">We read every message about {SITE_NAME} guides on this site</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Use this page to reach the team behind{" "}
                <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                  {SITE_NAME}
                </Link>{" "}
                on{" "}
                <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold">
                  {SITE_ORIGIN.replace("https://", "")}
                </a>
                . We can help with blog content,{" "}
                <Link href={ROUTES.about} className="text-accent hover:underline font-semibold">
                  about us
                </Link>
                ,{" "}
                <Link href={ROUTES.privacy} className="text-accent hover:underline font-semibold">
                  privacy policy
                </Link>
                , or broken download links. For in-app wallet disputes, also contact ZH88 customer service inside
                the live app—response times may be faster there for account-specific issues.
              </p>

              <div className="bg-[#0A1F18] rounded-xl p-6 md:p-8 border-2 border-orange-200/30 overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    aria-hidden="true"
                    className="w-16 h-16 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Email us</h2>
                <p className="text-center mb-4 text-gray-400">
                  Include your Android version and a short description. Do not send OTPs or wallet PINs.
                </p>
                <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
                  <CtaButton
                    href={`mailto:${SITE_EMAIL}`}
                    icon="mail"
                    ariaLabel={`Send email to ${SITE_NAME} support`}
                    className="max-w-full text-sm sm:text-base md:text-lg px-4 md:px-8"
                  >
                    {SITE_EMAIL}
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Download help</h3>
              <p className="text-gray-400 mb-4">APK install or update steps</p>
              <Link href={ROUTES.download} className="text-accent hover:underline font-semibold">
                Download page →
              </Link>
            </div>
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Privacy</h3>
              <p className="text-gray-400 mb-4">How we handle site data</p>
              <Link href={ROUTES.privacy} className="text-accent hover:underline font-semibold">
                Privacy policy →
              </Link>
            </div>
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Blog</h3>
              <p className="text-gray-400 mb-4">Safety, login & bonus guides</p>
              <Link href={ROUTES.blog} className="text-accent hover:underline font-semibold">
                ZH88 blog →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_ORIGIN,
              contactPoint: {
                "@type": "ContactPoint",
                email: SITE_EMAIL,
                contactType: "Customer Support",
                availableLanguage: ["English", "Urdu"],
              },
            },
          }),
        }}
      />
    </div>
  );
}
