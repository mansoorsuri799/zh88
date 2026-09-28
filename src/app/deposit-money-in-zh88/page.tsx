import { Metadata } from "next";
import Link from "next/link";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { APP_LOGO, APP_OG_IMAGE, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import CtaButton from "@/components/CtaButton";
import PhoneScreenshot from "@/components/PhoneScreenshot";

const PAGE_PATH = ROUTES.deposit;
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "How to Deposit Money in ZH88 (JazzCash & EasyPaisa)",
  description:
    "Deposit PKR in ZH88 Game using JazzCash, EasyPaisa, or bank transfer. Step-by-step Pakistan guide with responsible gaming tips.",
  keywords:
    "deposit money ZH88, ZH88 JazzCash, ZH88 EasyPaisa, add funds ZH88, ZH88 recharge Pakistan",
  openGraph: {
    title: "How to Deposit Money in ZH88",
    description:
      "Quick, secure deposit guide for ZH88 Game with JazzCash, EasyPaisa, and bank transfer in Pakistan.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_ORIGIN}${APP_OG_IMAGE}`,
        width: 512,
        height: 512,
        alt: "Deposit money in ZH88 Game using JazzCash or EasyPaisa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Deposit Money in ZH88?",
    description: "Step-by-step ZH88 deposit guide for Pakistani mobile wallets and bank transfer.",
    images: [`${SITE_ORIGIN}${APP_OG_IMAGE}`],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const howToSteps = [
  {
    name: "Open ZH88 Game",
    text: "Launch the ZH88 app on Android, ensure stable mobile data or Wi‑Fi, and log in with your registered number and password.",
  },
  {
    name: "Open the wallet or shop",
    text: "From the home screen, tap Wallet, Shop, or Add Funds—wording may vary by app version.",
  },
  {
    name: "Pick a payment method",
    text: "Select JazzCash, EasyPaisa, or Bank Transfer. Use an account in your own name that matches your ZH88 profile.",
  },
  {
    name: "Enter the amount in PKR",
    text: "Choose a preset amount (for example Rs 200, 500, 1000) or type a custom value within app limits. Deposit only what you can afford to lose.",
  },
  {
    name: "Confirm and pay",
    text: "Review fees and bonuses, submit the request, then approve the payment in your JazzCash/EasyPaisa app or complete the bank transfer as shown.",
  },
  {
    name: "Wait for balance update",
    text: "Most deposits reflect within minutes. If PKR does not appear, check transaction history before contacting in-app support.",
  },
];

export default function DepositMoneyInZh88Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "How to Deposit Money in ZH88?",
        description:
          "Deposit PKR in ZH88 using JazzCash, EasyPaisa, or bank transfer with a step-by-step Pakistan guide.",
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
          name: "Deposit money in ZH88",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to deposit money in ZH88",
        description: "Add PKR to your ZH88 wallet with JazzCash, EasyPaisa, or bank transfer.",
        url: PAGE_URL,
        totalTime: "PT3M",
        estimatedCost: { "@type": "MonetaryAmount", currency: "PKR", value: "200" },
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
            name: "Which deposit methods does ZH88 support in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ZH88 commonly supports JazzCash, EasyPaisa, and bank transfer. Available options appear inside the in-app wallet or shop section.",
            },
          },
          {
            "@type": "Question",
            name: "Is it safe to deposit PKR in ZH88?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use official app builds, verify payment prompts on your own wallet app, and never share OTPs with third parties. Gaming involves financial risk—deposit responsibly.",
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
        name: "Deposit Money in ZH88",
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
                Deposit Money in ZH88
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to deposit money in <span className="text-accent">ZH88</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              JazzCash, EasyPaisa, and bank transfer for Pakistani players
            </p>
            <CtaButton>Download ZH88 to deposit</CtaButton>
            <div className="mt-10 flex justify-center">
              <PhoneScreenshot
                src="/zh88-deposit-money.webp"
                alt="ZH88 Game deposit screen — add PKR via JazzCash or EasyPaisa in Pakistan"
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
              <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                ZH88 Game
              </Link>{" "}
              lets you add PKR to your in-app wallet before joining tables or events. If you have not
              installed the app yet, start with our{" "}
              <Link href={ROUTES.download} className="text-accent hover:underline font-semibold">
                ZH88 download guide
              </Link>
              . Deposits are not an investment—only fund amounts you are comfortable losing.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When you win eligible balance, you can{" "}
              <Link href={ROUTES.withdraw} className="text-accent hover:underline font-semibold">
                withdraw money from ZH88
              </Link>{" "}
              using the same verified JazzCash, EasyPaisa, or bank details where supported.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Supported deposit methods
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Labels inside the app may differ slightly by version. Always confirm the merchant name
            before approving a wallet payment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "JazzCash",
                body: "Pay from your JazzCash wallet. Approve the in-app prompt on the number linked to your account.",
              },
              {
                title: "EasyPaisa",
                body: "Use EasyPaisa for quick PKR top-ups. Double-check amount and recipient before confirming.",
              },
              {
                title: "Bank transfer",
                body: "When offered, follow in-app bank details and keep your transfer receipt until the balance updates.",
              },
            ].map((method) => (
              <div key={method.title} className="bg-[#0A1F18] rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-accent mb-3">{method.title}</h3>
                <p className="text-gray-300 leading-relaxed">{method.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-10 text-white">Step-by-step deposit</h2>
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Responsible funding tips</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Set a weekly PKR budget and stop when you reach it.</li>
              <li>Do not borrow money to deposit or chase losses.</li>
              <li>Keep screenshots of wallet approvals for your records.</li>
              <li>Contact support through official in-app channels only.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary border-t border-gray-800 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to add PKR?</h2>
          <p className="text-gray-300 mb-6">
            Install or update ZH88, then deposit through your preferred Pakistani wallet.
          </p>
          <CtaButton>Download ZH88 Game</CtaButton>
        </div>
      </section>
    </article>
  );
}
