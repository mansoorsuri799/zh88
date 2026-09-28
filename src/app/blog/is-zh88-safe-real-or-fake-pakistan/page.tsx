import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import {
  APP_OG_IMAGE,
  APP_TWITTER_IMAGE,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

const SLUG = "is-zh88-safe-real-or-fake-pakistan";
const DATE = "2026-02-08";
const TITLE = "Is ZH88 Safe, Real or Fake in Pakistan?";
const DESCRIPTION =
  "Honest look at ZH88 safety signals, payment checks, scam warnings, and how to download the real ZH88 Game APK in Pakistan.";

export const metadata: Metadata = {
  title: "ZH88 Safety Review 2026 — Scam Checks & Trusted Download",
  description: DESCRIPTION,
  keywords: [
    "is ZH88 safe",
    "ZH88 real or fake",
    "ZH88 scam",
    "ZH88 Pakistan",
    "ZH88 APK safe",
    "ZH88 Game review",
  ],
  alternates: { canonical: `${SITE_ORIGIN}/blog/${SLUG}` },
  openGraph: {
    title: "ZH88 Safety Review 2026 — Scam Checks & Trusted Download",
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: DATE,
    images: [{ url: `${SITE_ORIGIN}${APP_OG_IMAGE}`, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH88 Safety Review 2026 — Scam Checks & Trusted Download",
    description: DESCRIPTION,
    images: [`${SITE_ORIGIN}${APP_TWITTER_IMAGE}`],
  },
};

export default function IsZh88SafePage() {
  return (
    <article className="min-h-screen bg-primary py-10 px-4">
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        image={`${SITE_ORIGIN}/zh88.webp`}
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
          <p className="text-gray-400 text-sm">
            Updated {DATE} · 9 min read · Editorial guide for Pakistan players
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            Searches like &quot;is ZH88 safe&quot; or &quot;ZH88 real or fake&quot; usually mean one thing: you
            want to know whether the app you are about to install is legitimate, and whether your JazzCash or
            EasyPaisa details will be handled properly. This guide does not promise winnings or call ZH88
            &quot;100% risk-free.&quot; Instead, it walks through practical safety signals, download hygiene, and
            red flags so you can decide with clearer eyes.
          </p>

          <figure className="my-8 flex flex-col items-center">
            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-3xl overflow-hidden border border-gray-700 bg-secondary shadow-2xl">
              <Image
                src="/zh88.webp"
                alt="ZH88 Game official app icon"
                width={220}
                height={220}
                className="object-contain w-full h-full p-3"
                priority
                sizes="220px"
              />
            </div>
            <figcaption className="mt-3 max-w-xs text-center text-sm text-gray-400">
              Always match the app branding and publisher steps with official install guidance.
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-accent">What players usually mean by &quot;safe&quot;</h2>
          <p>
            In Pakistan, &quot;safe&quot; often covers three separate worries: fake APK copies, slow or missing
            withdrawals, and unclear rules around real-money play. ZH88 Game is marketed as a multi-game
            earning app with local wallet support. Treat any platform that handles cash as something you verify
            yourself—start small, keep records, and read in-app terms before you deposit.
          </p>

          <h2 className="text-2xl font-bold text-accent">Positive safety signals to look for</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Consistent app name and version info inside settings (compare with our{" "}
              <Link href={ROUTES.home} className="text-accent hover:underline">
                ZH88 overview
              </Link>
              ).
            </li>
            <li>OTP-based registration tied to your own mobile number—not shared accounts.</li>
            <li>In-app support or help section that responds before you add large balances.</li>
            <li>Withdrawal history you can screenshot; test a small cash-out after a small deposit.</li>
            <li>Payment prompts that match JazzCash or EasyPaisa apps you already trust—not random links.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent">Download only from trusted sources</h2>
          <p>
            Cloned APK files are the fastest way to lose money without playing a single hand. Random Telegram
            channels, misspelled domains, and &quot;modded unlimited money&quot; builds are common traps. Use the
            official install flow linked from this site&apos;s{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              download page
            </Link>{" "}
            and avoid sideloading unknown files sent by strangers. After install, deny unnecessary permissions
            and keep your phone updated.
          </p>

          <h2 className="text-2xl font-bold text-accent">Payment verification tips</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Deposit a small test amount first; confirm it appears in your ZH88 wallet.</li>
            <li>Request a small withdrawal to the same JazzCash or EasyPaisa account you used to deposit.</li>
            <li>Save transaction IDs from your wallet app and match them with in-app records.</li>
            <li>Never share OTPs, CNIC photos, or wallet PINs in WhatsApp &quot;support&quot; chats.</li>
            <li>If a payout stalls, contact support through the app and email{" "}
              <a href="mailto:support@zh888app.com.pk" className="text-accent hover:underline">
                support@zh888app.com.pk
              </a>{" "}
              with screenshots—not with your full card or PIN details.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-accent">Red flags that suggest a fake or risky setup</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>APK size or icon wildly different from the official ZH88 Game branding.</li>
            <li>Guaranteed daily income claims in ads—no lawful app can promise that.</li>
            <li>Pressure to &quot;upgrade VIP&quot; via personal bank transfer to an individual account.</li>
            <li>Withdrawals only work after recruiting multiple friends (pyramid-style patterns).</li>
            <li>Reviews that only exist on anonymous pages with no verifiable payout proof.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent">Real vs fake: a balanced view</h2>
          <p>
            Many users report routine play, bonuses, and wallet cash-outs on ZH88-style platforms. Others report
            delays, account locks, or confusion after installing the wrong APK. That split is why we emphasise
            verification over hype. ZH88 may work fine for some players who follow rules and use official
            builds; it can go wrong quickly if you chase &quot;easy money&quot; ads or skip basic checks. Outcomes
            vary by account history, promotions, and network conditions—never treat social media clips as
            guarantees.
          </p>

          <h2 className="text-2xl font-bold text-accent">Legal and responsible play in Pakistan</h2>
          <p>
            Online real-money gaming sits in a grey area for many Pakistani users. Check local norms in your
            province, play only if you are 18+, and set strict limits on time and money. If gaming stops feeling
            fun, pause and read our{" "}
            <Link href={ROUTES.disclaimer} className="text-accent hover:underline">
              disclaimer
            </Link>
            . For wallet how-tos without repeating them here, see{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              deposit guide
            </Link>{" "}
            and{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:underline">
              withdrawal guide
            </Link>
            .
          </p>

          <div className="bg-secondary rounded-xl p-6 border border-accent/30 not-prose">
            <h2 className="text-xl font-bold text-white mb-3">Ready to install the official build?</h2>
            <p className="text-gray-300 mb-4 text-base">
              Get the latest ZH88 Game APK through our verified download steps—then run the payment checks above
              before you increase your balance.
            </p>
            <CtaButton href={ROUTES.download} icon="arrow">
              Go to ZH88 Download Page
            </CtaButton>
          </div>

          <p className="text-sm text-gray-500">
            {SITE_NAME} ({SITE_ORIGIN}) publishes independent guides. We are not the game operator. Information
            may change; confirm details inside the live app.
          </p>
        </div>
      </div>
    </article>
  );
}
