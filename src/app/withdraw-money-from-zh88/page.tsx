import { Metadata } from "next";
import Link from "next/link";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { APP_LOGO, APP_OG_IMAGE, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import CtaButton from "@/components/CtaButton";
import PhoneScreenshot from "@/components/PhoneScreenshot";

const PAGE_PATH = ROUTES.withdraw;
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "How to Withdraw Money from ZH88 (Fast PKR Guide)",
  description:
    "Withdraw PKR from ZH88 Game via JazzCash, EasyPaisa, or bank transfer. Step-by-step cash-out guide for Pakistan with timing and safety tips.",
  keywords:
    "withdraw ZH88, ZH88 cash out, ZH88 JazzCash withdrawal, ZH88 EasyPaisa payout, ZH88 bank transfer",
  openGraph: {
    title: "How to Withdraw Money from ZH88",
    description:
      "Secure withdrawal walkthrough for ZH88 Game using JazzCash, EasyPaisa, and bank transfer in Pakistan.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_ORIGIN}${APP_OG_IMAGE}`,
        width: 512,
        height: 512,
        alt: "Withdraw PKR from ZH88 Game to JazzCash or EasyPaisa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Withdraw Money from ZH88?",
    description: "Complete ZH88 withdrawal guide for Pakistani players.",
    images: [`${SITE_ORIGIN}${APP_OG_IMAGE}`],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const howToSteps = [
  {
    name: "Open ZH88 and sign in",
    text: "Use your registered mobile number and password. Complete any pending KYC or binding steps shown in the app.",
  },
  {
    name: "Go to Wallet",
    text: "Tap Wallet or Withdraw from the menu to view your playable and withdrawable balance.",
  },
  {
    name: "Choose Withdraw",
    text: "Select the withdraw option and review minimum amounts, fees, and daily limits listed for your account tier.",
  },
  {
    name: "Enter PKR amount",
    text: "Type an amount within allowed limits. Withdraw winnings you actually earned—promotional bonus rules may apply separately.",
  },
  {
    name: "Select JazzCash, EasyPaisa, or bank",
    text: "Pick the payout channel you already verified during registration or in profile settings.",
  },
  {
    name: "Confirm account details",
    text: "Enter wallet number or bank account information exactly as registered. Mistyped digits are a common cause of failed payouts.",
  },
  {
    name: "Submit and track status",
    text: "Confirm the request, then monitor processing status in the app. Most requests complete within hours, but delays can happen during peak times.",
  },
];

export default function WithdrawMoneyFromZh88Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "How to Withdraw Money from ZH88?",
        description:
          "Withdraw PKR from ZH88 using JazzCash, EasyPaisa, or bank transfer with a clear Pakistan-focused guide.",
        url: PAGE_URL,
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
        inLanguage: "en-US",
        hasPart: {
          "@type": "HowTo",
          "@id": `${PAGE_URL}#howto`,
          name: "Withdraw money from ZH88",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to withdraw money from ZH88",
        description: "Cash out PKR from ZH88 to JazzCash, EasyPaisa, or bank transfer.",
        url: PAGE_URL,
        totalTime: "PT10M",
        step: howToSteps.map((s) => ({
          "@type": "HowToStep",
          name: s.name,
          text: s.text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How long do ZH88 withdrawals take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many JazzCash and EasyPaisa withdrawals process within a few hours, but some requests can take up to 24 hours depending on verification and volume.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum ZH88 withdrawal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Minimums vary by method and app version. Check the withdraw screen for current PKR limits before submitting a request.",
            },
          },
          {
            "@type": "Question",
            name: "Why was my ZH88 payout rejected?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common reasons include mismatched account names, unverified wallets, bonus wagering requirements, or incorrect account numbers. Use in-app support with your transaction ID.",
            },
          },
        ],
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      {
        "@type": "ListItem",
        position: 2,
        name: "Withdraw Money from ZH88",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <article className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative py-12 md:py-16 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
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
                Withdraw Money from ZH88
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to withdraw money from <span className="text-accent">ZH88</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              JazzCash, EasyPaisa, and bank transfer cash-out steps
            </p>
            <CtaButton>Download ZH88</CtaButton>
            <div className="mt-10 flex justify-center">
              <PhoneScreenshot
                src="/zh88-withdraw-money.webp"
                alt="ZH88 Game withdrawal flow — cash out PKR to JazzCash or EasyPaisa"
                size="lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              After playing on{" "}
              <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                ZH88 Game
              </Link>
              , you can request a payout to a verified JazzCash, EasyPaisa, or bank account. Winnings
              are never guaranteed—treat withdrawals as returning funds you earned under the app&apos;s
              rules, not as fixed income.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              New users should complete a small{" "}
              <Link href={ROUTES.deposit} className="text-accent hover:underline font-semibold">
                test deposit in ZH88
              </Link>{" "}
              only if they choose to play with real PKR, and should read bonus terms before
              withdrawing promotional balance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Withdrawal methods in Pakistan
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "JazzCash",
                body: "Send PKR to the JazzCash number bound in your ZH88 profile. Names should match your CNIC records where required.",
              },
              {
                title: "EasyPaisa",
                body: "Receive payouts on your EasyPaisa wallet. Keep the app updated to see approval notifications quickly.",
              },
              {
                title: "Bank transfer",
                body: "Link a bank card or account inside Wallet > Withdraw if the option appears. Maximum per-request limits depend on your tier.",
              },
            ].map((method) => (
              <div key={method.title} className="bg-[#0A1F18] rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-accent mb-3">{method.title}</h3>
                <p className="text-gray-300 leading-relaxed">{method.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-10 text-white">Step-by-step withdrawal</h2>
          <ol className="space-y-6 list-none">
            {howToSteps.map((step, index) => (
              <li key={step.name} className="bg-secondary rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-[#0A1F18] text-white rounded-full flex items-center justify-center text-xl font-bold"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Common questions</h2>
          {[
            {
              q: "Can I withdraw without playing?",
              a: "Most real-money platforms require gameplay or bonus rules to be met before promotional funds become withdrawable. Check ZH88 terms inside the app.",
            },
            {
              q: "Should I use the same wallet for deposit and withdraw?",
              a: "Yes—using the same verified JazzCash or EasyPaisa account reduces verification delays.",
            },
            {
              q: "What if processing takes longer than a day?",
              a: "Save your withdrawal ID and contact official in-app support. Avoid sharing OTPs with unofficial agents on social media.",
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-secondary rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-2">{faq.q}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-secondary border-t border-gray-800 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">Need the app first?</h2>
          <p className="text-gray-300 mb-6">
            Follow our download guide, then return here to cash out responsibly.
          </p>
          <CtaButton href={ROUTES.download} icon="arrow">
            ZH88 download guide
          </CtaButton>
        </div>
      </section>
    </article>
  );
}
