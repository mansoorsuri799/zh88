import type { Metadata } from "next";
import Link from "next/link";
import {
  APP_OG_IMAGE,
  ROUTES,
  SITE_DOMAIN,
  SITE_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — ZH88 & zh888app.com.pk",
  description:
    "Privacy Policy for zh888app.com.pk: how we collect, use, and protect information when you read ZH88 Game guides or contact support.",
  keywords: ["ZH88 privacy policy", "zh888app.com.pk privacy", "data protection", "ZH88 cookies"],
  openGraph: {
    title: "Privacy Policy — ZH88 & zh888app.com.pk",
    description: "How zh888app.com.pk handles your information when you use our ZH88 guides and contact forms.",
    url: `${SITE_ORIGIN}${ROUTES.privacy}`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${APP_OG_IMAGE}`, alt: "ZH88 Privacy Policy" }],
  },
  alternates: {
    canonical: `${SITE_ORIGIN}${ROUTES.privacy}`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Last updated: 8 February 2026</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-300 space-y-8">
            <div className="bg-[#0A1F18] border-l-4 border-accent rounded-r-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="mb-4">
                This Privacy Policy describes how{" "}
                <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                  {SITE_NAME}
                </Link>{" "}
                ({SITE_NAME}, &quot;we&quot;, &quot;our&quot;) handles information when you visit{" "}
                <a href={SITE_ORIGIN} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  {SITE_DOMAIN}
                </a>{" "}
                (the &quot;Site&quot;). We publish editorial guides about the ZH88 Game Android app; we are not
                the game operator unless clearly stated.
              </p>
              <p>
                By using the Site, you agree to this Policy. If you disagree, please stop using the Site.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-white">Information we collect</h2>
              <h3 className="text-xl font-semibold text-accent mt-4">Information you provide</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Email address and message content when you contact {SITE_EMAIL}</li>
                <li>Any details you voluntarily include in support requests (please avoid sending OTPs or wallet PINs)</li>
              </ul>
              <h3 className="text-xl font-semibold text-accent mt-6">Automatic data</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>IP address, browser type, device type, and referring URLs</li>
                <li>Pages viewed, approximate region, and timestamps</li>
                <li>Cookie or analytics identifiers where enabled (see Cookies below)</li>
              </ul>
              <p className="mt-4">
                The separate ZH88 Game mobile application may collect additional account and gameplay data under
                its own policy. Wallet deposits and withdrawals happen inside the app via JazzCash, EasyPaisa, or
                other channels the operator supports—we do not process those payments on this Site.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">How we use information</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Operate, secure, and improve {SITE_DOMAIN}</li>
                <li>Respond to emails and correct guide content</li>
                <li>Measure traffic and fix broken links or layout issues</li>
                <li>Comply with lawful requests from authorities in Pakistan or elsewhere</li>
                <li>Prevent spam, abuse, or fraudulent contact attempts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Sharing and disclosure</h2>
              <p className="mt-4">
                We do not sell your personal information. We may share limited data with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Hosting, analytics, or email delivery providers under confidentiality terms</li>
                <li>Law enforcement or regulators when required by valid legal process</li>
              </ul>
              <p className="mt-4">
                Outbound links (for example official APK install URLs) lead to third-party sites with their own
                privacy practices. Review those policies before submitting data.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Data retention & security</h2>
              <p className="mt-4">
                We retain contact emails as long as needed to resolve inquiries and maintain records. Logs may be
                kept for a shorter period for security monitoring. We use HTTPS and reasonable administrative
                safeguards, but no website can guarantee perfect security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Your choices</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Request access, correction, or deletion of Site-related emails you sent us</li>
                <li>Opt out of non-essential cookies via browser settings</li>
                <li>Stop using the Site at any time</li>
              </ul>
              <p className="mt-4">
                To exercise rights, email{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:underline">
                  {SITE_EMAIL}
                </a>
                . We may need to verify your request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Age restriction (18+)</h2>
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6 mt-4">
                <p>
                  Content on {SITE_DOMAIN} discusses real-money gaming apps intended for adults. We do not
                  knowingly collect personal information from anyone under 18. If you believe a minor contacted
                  us, email {SITE_EMAIL} so we can delete the message.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Cookies and analytics</h2>
              <p className="mt-4">
                We may use cookies or similar technologies to remember preferences and understand aggregate
                traffic. You can block cookies in your browser; some features may not work as expected.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Changes to this policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy by posting a revised version on this page and updating the
                &quot;Last updated&quot; date. Material changes may also be noted on the{" "}
                <Link href={ROUTES.contact} className="text-accent hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white">Contact</h2>
              <p className="mt-4">
                Questions about privacy? Email{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:underline">
                  {SITE_EMAIL}
                </a>{" "}
                or visit{" "}
                <Link href={ROUTES.contact} className="text-accent hover:underline">
                  Contact Us
                </Link>
                .
              </p>
              <p className="text-sm text-gray-500 mt-8">© 2026 {SITE_NAME} ({SITE_DOMAIN}). All rights reserved.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
