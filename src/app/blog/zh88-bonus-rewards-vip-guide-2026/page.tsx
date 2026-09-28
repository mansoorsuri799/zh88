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

const SLUG = "zh88-bonus-rewards-vip-guide-2026";
const DATE = "2026-02-08";
const TITLE = "ZH88 Bonus, Rewards & VIP Guide 2026";
const DESCRIPTION =
  "Welcome bonus, daily login rewards, cashback, referral offers, and VIP lounge perks explained for ZH88 players.";

export const metadata: Metadata = {
  title: "ZH88 Bonuses & VIP Rewards Explained (2026 Pakistan)",
  description: DESCRIPTION,
  keywords: [
    "ZH88 bonus",
    "ZH88 VIP",
    "ZH88 rewards",
    "ZH88 referral",
    "ZH88 daily login",
    "ZH88 welcome bonus",
  ],
  alternates: { canonical: `${SITE_ORIGIN}/blog/${SLUG}` },
  openGraph: {
    title: "ZH88 Bonuses & VIP Rewards Explained (2026 Pakistan)",
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: SITE_NAME,
    type: "article",
    publishedTime: DATE,
    images: [{ url: `${SITE_ORIGIN}${APP_OG_IMAGE}`, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH88 Bonuses & VIP Rewards Explained (2026 Pakistan)",
    description: DESCRIPTION,
    images: [`${SITE_ORIGIN}${APP_TWITTER_IMAGE}`],
  },
};

export default function Zh88BonusGuidePage() {
  return (
    <article className="min-h-screen bg-primary py-10 px-4">
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        image={`${SITE_ORIGIN}/zh88-invite-friends.webp`}
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
          <p className="text-gray-400 text-sm">Updated {DATE} · 8 min read</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            ZH88 Game promotes welcome packs, daily check-ins, event missions, referral commissions, and VIP
            lounge tiers. Promotions change often, and wagering or turnover rules may apply before you withdraw
            bonus balance. This 2026 guide explains what each reward type usually means—read the live in-app
            terms before you claim anything.
          </p>

          <PhoneScreenshot
            src="/zh88-invite-friends.webp"
            alt="ZH88 invite friends and referral rewards screen"
            size="lg"
            className="my-8"
            caption="Referral and invite screens reward sharing—only promote to adults who understand the risks."
          />

          <h2 className="text-2xl font-bold text-accent">Welcome and first-time offers</h2>
          <p>
            New accounts often see a welcome bonus after registration or first qualifying deposit. The amount,
            game restrictions, and expiry timer vary by campaign. Screenshot the promo banner and note whether
            the bonus is cash, chips, or locked until you play a set volume. Bonuses can help you explore tables
            but they are not free money—you can still lose the underlying deposit.
          </p>

          <h2 className="text-2xl font-bold text-accent">Daily login and streak rewards</h2>
          <p>
            Open the rewards or mission hub each day to collect login gifts—coins, spin tokens, or small cash
            vouchers. Missing a day may reset streak counters. Set a phone reminder if you enjoy these perks,
            but skip chasing login rewards if they push you to play longer than your budget allows.
          </p>

          <h2 className="text-2xl font-bold text-accent">Events, missions, and seasonal campaigns</h2>
          <p>
            Festive events (Eid, cricket seasons, weekend leaderboards) sometimes add deposit match codes or
            tournament tickets. Check the event page for start/end times in Pakistan Standard Time. Complete
            tasks in order—some require specific games like Teen Patti or Dragon vs Tiger—and claim rewards
            before the countdown ends.
          </p>

          <PhoneScreenshot
            src="/zh88-features.webp"
            alt="ZH88 Game features and promotions hub"
            size="lg"
            className="my-8"
            caption="Feature and promo hubs rotate—verify active campaigns inside the app."
          />

          <h2 className="text-2xl font-bold text-accent">Referral and invite-friends rewards</h2>
          <p>
            Share your invite code so friends register with your link. You may earn a commission when they
            deposit or play qualifying hands. Ethical tip: explain that real-money games carry loss risk—never
            promise fixed income. Abuse patterns (self-referrals, fake numbers) can void rewards and freeze
            accounts.
          </p>

          <h2 className="text-2xl font-bold text-accent">VIP lounge levels</h2>
          <p>
            VIP tiers typically track monthly turnover or total deposits. Higher levels might unlock faster
            support, exclusive rebates, birthday gifts, or custom deposit channels. Progress is not automatic
            profit—moving up often means more play volume. Compare VIP perks with your actual budget; staying
            at a lower tier is fine for casual players.
          </p>

          <h2 className="text-2xl font-bold text-accent">Smart habits when claiming bonuses</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Read turnover / wagering requirements before accepting large promo credits.</li>
            <li>Prefer bonuses tied to games you already understand.</li>
            <li>Keep screenshots of promo rules if a dispute arises later.</li>
            <li>Combine bonuses with bankroll limits from our{" "}
              <Link href="/blog/zh88-earning-tips-pakistan-2026" className="text-accent hover:underline">
                earning tips guide
              </Link>
              .
            </li>
            <li>Contact support inside the app if a claimed reward does not credit within stated time.</li>
          </ul>

          <div className="bg-secondary rounded-xl p-6 border border-accent/30 not-prose">
            <h2 className="text-xl font-bold text-white mb-3">Explore ZH88 on your phone</h2>
            <p className="text-gray-300 mb-4 text-base">
              Install the latest APK, register, then open the rewards tab to see live 2026 campaigns.
            </p>
            <div className="flex flex-wrap gap-4">
              <CtaButton href={ROUTES.home} icon="arrow">
                ZH88 Home Overview
              </CtaButton>
              <CtaButton href={ROUTES.download} icon="download">
                Download ZH88 APK
              </CtaButton>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Promotional values change without notice. {SITE_NAME} does not operate in-game billing; always confirm
            offers in the official app.
          </p>
        </div>
      </div>
    </article>
  );
}
