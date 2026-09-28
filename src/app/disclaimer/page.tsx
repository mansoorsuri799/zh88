import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { ROUTES, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer — ZH88 Guides & Responsible Gaming",
  description:
    "Legal disclaimer for zh888app.com.pk: informational ZH88 content only, 18+ real-money risks, no affiliation guarantees, and responsible gaming reminders.",
  keywords: ["ZH88 disclaimer", "zh888app.com.pk legal", "responsible gaming", "ZH88 18+"],
  openGraph: {
    title: "Disclaimer — ZH88 Guides & Responsible Gaming",
    description: "Important legal and responsible gaming information for visitors of zh888app.com.pk.",
    url: `${SITE_ORIGIN}${ROUTES.disclaimer}`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer — ZH88 Guides & Responsible Gaming",
    description: "Informational content only; play responsibly and verify local laws.",
  },
  alternates: {
    canonical: `${SITE_ORIGIN}${ROUTES.disclaimer}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
          <p className="text-lg text-gray-400">Please read before using {SITE_DOMAIN}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
            <div className="bg-[#0A1F18] border-l-4 border-accent p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-accent mb-2">Important notice</h2>
              <p className="mb-0">
                Information on{" "}
                <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold">
                  {SITE_DOMAIN}
                </a>{" "}
                about{" "}
                <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                  {SITE_NAME} Game
                </Link>{" "}
                is for <strong>general information and entertainment</strong> only. We do not operate the game
                servers, process in-app wallets, or guarantee any outcome, bonus amount, or withdrawal speed.
              </p>
            </div>

            <p>
              Guides, screenshots, and download links may become outdated when the publisher releases a new APK
              or promotion. Always confirm details inside the live app and official install channels linked from
              our{" "}
              <Link href={ROUTES.download} className="text-accent hover:underline">
                download page
              </Link>
              .
            </p>

            <div className="bg-[#0A1F18] rounded-xl p-6 border border-accent">
              <h2 className="text-2xl font-bold mb-4 text-white">Real-money & legal risks</h2>
              <ul className="space-y-3">
                <li>
                  ZH88-style apps may allow deposits and cash-outs via JazzCash, EasyPaisa, or similar methods.
                  You can lose money; past wins shown online are not promises of future results.
                </li>
                <li>
                  Online gaming laws vary across Pakistan. You are responsible for checking rules in your
                  province or territory before playing.
                </li>
                <li>
                  You must be <strong>18 years or older</strong> to use real-money features discussed on this
                  site.
                </li>
              </ul>
            </div>

            <div className="bg-[#0A1F18] rounded-xl p-6 border border-red-400/40">
              <h2 className="text-2xl font-bold mb-4 text-red-300">No liability</h2>
              <p>
                {SITE_NAME} ({SITE_DOMAIN}) and its authors are not liable for financial loss, account locks,
                malware from unofficial APKs, payment disputes, or legal issues arising from third-party apps or
                websites you choose to use. Any action you take based on our content is{" "}
                <strong>at your own risk</strong>.
              </p>
            </div>

            <div className="bg-[#0A1F18] rounded-xl p-6 border border-blue-400/30">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Responsible gaming</h2>
              <p className="mb-4">We encourage every visitor to:</p>
              <ul className="space-y-2">
                <li>Set strict time and money limits before opening the app</li>
                <li>Never borrow money or sell assets to fund gameplay</li>
                <li>Take breaks if you feel stressed, angry, or chasing losses</li>
                <li>Talk to trusted friends or professionals if gaming stops feeling optional</li>
              </ul>
              <p className="mt-4 mb-0">
                For practical safety checks, read our{" "}
                <Link href="/blog/is-zh88-safe-real-or-fake-pakistan" className="text-accent hover:underline">
                  ZH88 safety guide
                </Link>
                .
              </p>
            </div>

            <div className="bg-[#0A1F18] rounded-xl p-6 border border-accent">
              <h2 className="text-2xl font-bold mb-4 text-white">Trademarks & affiliation</h2>
              <p className="mb-0">
                &quot;ZH88&quot; and related logos are trademarks of their respective owners. {SITE_DOMAIN} is an
                independent information site and does not claim official partnership unless explicitly stated.
                Other brand names mentioned for comparison belong to their owners.
              </p>
            </div>

            <div className="mt-8 p-6 bg-[#0A1F18] rounded-xl border-2 border-accent not-prose">
              <h2 className="text-2xl font-bold mb-4 text-white">Questions?</h2>
              <p className="text-gray-300 mb-4">
                For site-related concerns, contact us. For in-app account issues, use ZH88 customer support inside
                the application.
              </p>
              <CtaButton href={ROUTES.contact} icon="arrow">
                Contact Us
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Disclaimer - ${SITE_NAME}`,
            description: `Legal disclaimer and responsible gaming information for ${SITE_DOMAIN}.`,
            url: `${SITE_ORIGIN}${ROUTES.disclaimer}`,
          }),
        }}
      />
    </div>
  );
}
