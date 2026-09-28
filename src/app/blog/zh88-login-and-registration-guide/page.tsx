import type { Metadata } from "next";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import PhoneScreenshot from "@/components/PhoneScreenshot";
import {
  APP_OG_IMAGE,
  APP_TWITTER_IMAGE,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

const SLUG = "zh88-login-and-registration-guide";
const DATE = "2026-02-08";
const TITLE = "ZH88 Login & Registration Guide";
const DESCRIPTION =
  "Create a ZH88 Game account, verify with OTP, log in securely, and fix common registration issues on Android.";

export const metadata: Metadata = {
  title: "How to Register & Login on ZH88 Game (Android)",
  description: DESCRIPTION,
  keywords: [
    "ZH88 login",
    "ZH88 registration",
    "ZH88 account",
    "ZH88 sign up",
    "ZH88 OTP",
    "ZH88 password reset",
  ],
  alternates: { canonical: `${SITE_ORIGIN}/blog/${SLUG}` },
  openGraph: {
    title: "How to Register & Login on ZH88 Game (Android)",
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: DATE,
    images: [{ url: `${SITE_ORIGIN}${APP_OG_IMAGE}`, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register & Login on ZH88 Game (Android)",
    description: DESCRIPTION,
    images: [`${SITE_ORIGIN}${APP_TWITTER_IMAGE}`],
  },
};

export default function Zh88LoginGuidePage() {
  return (
    <article className="min-h-screen bg-primary py-10 px-4">
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        image={`${SITE_ORIGIN}/zh88-register-account.webp`}
      />
      <div className="container mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          <Link href={ROUTES.home} className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={ROUTES.blog} className="hover:text-accent">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{TITLE}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{TITLE}</h1>
          <p className="text-gray-400 text-sm">Updated {DATE} · 7 min read</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            Before you explore bonuses or tables, you need a clean ZH88 Game account on your Android phone.
            This walkthrough covers registration, login, and password recovery. We skip full deposit and
            withdrawal tutorials—use our dedicated{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              deposit
            </Link>{" "}
            and{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:underline">
              withdraw
            </Link>{" "}
            pages when your wallet is ready.
          </p>

          <h2 className="text-2xl font-bold text-accent">Before you start</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Install ZH88 from the{" "}
              <Link href={ROUTES.download} className="text-accent hover:underline">
                official download flow
              </Link>{" "}
              on this site.
            </li>
            <li>Use a Pakistani mobile number you control—OTP arrives on SMS.</li>
            <li>Enable Unknown Sources only for the trusted APK you downloaded.</li>
            <li>Keep a note of your login mobile number; avoid shared family SIMs if possible.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent">Step-by-step: create your ZH88 account</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Open ZH88 Game after installation and tap Register or Sign Up.</li>
            <li>Enter your mobile number in the correct format (usually 03XX without country code in-app).</li>
            <li>Set a strong password—mix letters and numbers, not your CNIC or birth year.</li>
            <li>Accept terms if prompted, then request the OTP code.</li>
            <li>Enter the SMS OTP quickly; if it expires, tap resend after the timer clears.</li>
            <li>Complete any optional profile fields (nickname, referral code if a friend invited you).</li>
            <li>Land on the home lobby—your account is active for login next time.</li>
          </ol>

          <PhoneScreenshot
            src="/zh88-register-account.webp"
            alt="ZH88 Game registration screen on Android"
            size="lg"
            className="my-8"
            caption="Registration screen: mobile number, password, and OTP verification."
          />

          <h2 className="text-2xl font-bold text-accent">How to log in next time</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open the app and choose Login.</li>
            <li>Enter the same mobile number and password you registered with.</li>
            <li>Complete OTP if the app asks for device verification.</li>
            <li>If login fails twice, stop guessing—reset the password instead of locking the account.</li>
          </ol>

          <PhoneScreenshot
            src="/zh88-login-account.webp"
            alt="ZH88 Game login screen with mobile and password fields"
            size="lg"
            className="my-8"
            caption="Login uses your registered mobile number—not an email unless you bound one later."
          />

          <h2 className="text-2xl font-bold text-accent">Reset password or recover access</h2>
          <p>
            On the login screen, tap Forgot Password (wording may vary). Enter your registered number, verify
            OTP, and set a new password. If OTP never arrives, check SMS spam filters, toggle aeroplane mode
            briefly, or restart the phone. Still stuck? Use in-app customer service or email{" "}
            <a href="mailto:support@zh888app.com.pk" className="text-accent hover:underline">
              support@zh888app.com.pk
            </a>{" "}
            from the number you used to register.
          </p>

          <h2 className="text-2xl font-bold text-accent">Common registration issues</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-gray-700 rounded-lg">
              <thead className="bg-secondary">
                <tr>
                  <th className="p-3 text-accent">Problem</th>
                  <th className="p-3 text-accent">What to try</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="p-3">Number already registered</td>
                  <td className="p-3">Use Login instead, or reset password—do not create duplicate accounts.</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-3">Invalid OTP</td>
                  <td className="p-3">Wait for a fresh code; ensure system time is automatic.</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-3">App closes on sign-up</td>
                  <td className="p-3">Reinstall from trusted APK; clear cache; free storage space.</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-3">IP or device limit errors</td>
                  <td className="p-3">Avoid VPN hopping; one account per person per policy.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-accent">Security habits worth keeping</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not share passwords or OTPs—even with &quot;agents&quot; on social media.</li>
            <li>Log out on shared phones; use device lock PINs.</li>
            <li>Read our{" "}
              <Link href="/blog/is-zh88-safe-real-or-fake-pakistan" className="text-accent hover:underline">
                safety guide
              </Link>{" "}
              before your first deposit.
            </li>
          </ul>

          <div className="bg-secondary rounded-xl p-6 border border-accent/30 not-prose">
            <h2 className="text-xl font-bold text-white mb-3">Need the app first?</h2>
            <p className="text-gray-300 mb-4 text-base">
              Download ZH88 Game APK, register once, then return here if login steps change in a future update.
            </p>
            <CtaButton href={ROUTES.download} icon="download">
              Download ZH88 Game APK
            </CtaButton>
          </div>
        </div>
      </div>
    </article>
  );
}
