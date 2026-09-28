import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP_AGGREGATE_RATING,
  APP_DOWNLOAD_URL,
  APP_SCREENSHOTS,
} from "@/lib/appFacts";
import CtaButton from "@/components/CtaButton";
import PhoneScreenshot from "@/components/PhoneScreenshot";
import {
  APP_CATEGORY,
  APP_DOWNLOADS,
  APP_LANGUAGES,
  APP_NAME,
  APP_OS,
  APP_SIZE,
  APP_UPDATE,
  APP_VERSION,
  ROUTES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "ZH88 Game Download APK For Android – Real Money App 2026",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download ZH88 Game APK for Android in Pakistan. Casino-style cards, slots & prediction games with JazzCash & EasyPaisa. Free v1.3 – 30MB – 500K+ downloads.",
  keywords: [
    "ZH88 Game",
    "ZH88 APK",
    "ZH88 download",
    "ZH88 Game download",
    "ZH88 Pakistan",
    "ZH88 real money",
    "download ZH88 Game",
    "ZH88 Android APK",
  ],
  openGraph: {
    title: "ZH88 Game Download APK For Android – Real Money App 2026",
    description:
      "ZH88 Game APK for Pakistan — play cards, slots & prediction games, claim bonuses, withdraw via JazzCash & EasyPaisa.",
    images: [
      {
        url: `${SITE_ORIGIN}/zh88.webp`,
        width: 512,
        height: 512,
        alt: "ZH88 Game app icon for Android download",
      },
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 512,
        height: 512,
        alt: "ZH88 Game – real money Android app",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH88 Game Download APK For Android – Real Money App 2026",
    description:
      "ZH88 Game APK for Pakistan — play cards, slots & prediction games, claim bonuses, withdraw via JazzCash & EasyPaisa.",
    images: [`${SITE_ORIGIN}/zh88.webp`, `${SITE_ORIGIN}/feature/og-image.webp`],
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
};

const faqs = [
  {
    q: "Does the ZH88 Game offer you a practice mode?",
    a: "Yes. ZH88 Game offers demos and low-stakes tables so new players can learn the flow before joining higher-stake rooms.",
  },
  {
    q: "What is the main source of earnings?",
    a: "Most earnings come from gameplay winnings. Daily login rewards, events, referrals, and tournaments can add extra value when used carefully.",
  },
  {
    q: "Will the games work if the app is not updated?",
    a: "Older builds may open, but features, matchmaking, and security fixes work best on the latest ZH88 Game version. Update when a new APK is available.",
  },
  {
    q: "Are there any hidden charges on the ZH88 Game?",
    a: "The APK download is free. Deposits and withdrawals follow the amounts and wallet rules you confirm in the app. Always review offer terms before claiming bonuses.",
  },
  {
    q: "Does ZH88 work in offline mode?",
    a: "No. ZH88 Game needs a stable internet connection for live rooms, wallet actions, and account sync.",
  },
  {
    q: "Do you get any reward for daily logging in the app?",
    a: "Yes. Continuous login streaks can unlock coins, cash credits, or free spins depending on the current promotion.",
  },
  {
    q: "Can your account be temporarily blocked on the ZH88 Game?",
    a: "Yes. Suspicious activity, rule breaches, or incomplete verification can lead to a temporary hold until support reviews the account.",
  },
  {
    q: "Is it a safe option for long-term gaming?",
    a: "ZH88 can be used more safely when you download from a trusted source, protect OTPs, use strong passwords, and treat play as entertainment—not guaranteed income.",
  },
  {
    q: "Is identity verification required on the ZH88 Game?",
    a: "Basic signup uses phone or email with OTP. Extra verification may be requested before larger withdrawals to protect wallets from fraud.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description:
          "ZH88 Game download site for Android players in Pakistan seeking casino-style games and real cash rewards.",
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "ZH88 Game Download APK For Android – Real Money App 2026",
        description:
          "Download ZH88 Game APK for Android. Play cards, slots and prediction games with JazzCash and EasyPaisa support.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/zh88.webp`,
          width: 512,
          height: 512,
          name: "ZH88 Game",
          description: "ZH88 Game official app icon for Android APK download",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/zh88.webp`,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
          creditText: "ZH88 logo",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE_EMAIL,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: APP_NAME,
        operatingSystem: APP_OS,
        applicationCategory: "GameApplication",
        image: `${SITE_ORIGIN}/zh88.webp`,
        logo: `${SITE_ORIGIN}/zh88.webp`,
        aggregateRating: APP_AGGREGATE_RATING,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
        },
        downloadUrl: APP_DOWNLOAD_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        description:
          "ZH88 Game is an online mobile gaming platform where players enjoy casino-style cards, slots, and prediction games with local JazzCash and EasyPaisa payments in Pakistan.",
        screenshot: [...APP_SCREENSHOTS],
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
      {
        "@type": "HowTo",
        name: "How to Download and Install the ZH88 Game",
        description: "Install ZH88 Game APK on Android in a few steps.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open the official site",
            text: "Visit the official ZH88 website on Chrome.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download the APK",
            text: "Tap the download button and wait for the file to finish.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Allow unknown sources",
            text: "Enable installation from unknown sources in Android security settings.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Install the APK",
            text: "Open the APK from Downloads and confirm installation.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Register and play",
            text: "Open ZH88 Game, create an account, and start playing.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  const toc = [
    { id: "introduction", label: "Introduction to ZH88 Game" },
    { id: "what-is-zh88", label: "What is the ZH88 Game?" },
    { id: "key-features", label: "Key Features of the ZH88 Game" },
    { id: "whats-new", label: "What is New in the Latest Version" },
    { id: "popular-pakistan", label: "Why ZH88 is Popular in Pakistan" },
    { id: "how-to-earn", label: "How to Earn Real Cash Rewards" },
    { id: "download-install", label: "How to Download and Install" },
    { id: "system-requirements", label: "System Requirements" },
    { id: "why-prefer", label: "Why Players Prefer ZH88" },
    { id: "register", label: "How to Register an Account" },
    { id: "login", label: "How to Log In" },
    { id: "payment-methods", label: "Deposit and Withdraw Methods" },
    { id: "deposit-withdraw-steps", label: "Deposit and Withdraw Steps" },
    { id: "tips", label: "Tips and Tricks" },
    { id: "safety", label: "Safety and Security" },
    { id: "vip-lounge", label: "VIP Lounge" },
    { id: "issues", label: "Common Issues and Solutions" },
    { id: "pros-cons", label: "Pros and Cons" },
    { id: "final-thoughts", label: "Final Thoughts" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-accent">{SITE_NAME}</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Game Download APK For Android – Real Money App 2026
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">
                ZH88 Game
              </Link>{" "}
              is an online earning platform that is popular for its casino-style games and practical reward options.
              You can download the Android APK from this page and explore cards, slots, and prediction games with a
              simple layout built for Pakistani players.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 my-6">
              <CtaButton ariaLabel="Download ZH88 Game APK">Download ZH88 Game</CtaButton>
              <div className="flex items-center gap-2 text-sm text-gray-300" aria-label="App rating 4.5 out of 5 from 500000 ratings">
                <span className="text-accent font-bold text-lg">4.5</span>
                <span className="text-accent" aria-hidden="true">★★★★☆</span>
                <span>(500,000) · Free · Android · Game</span>
              </div>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-6" style={{ minHeight: "120px" }}>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{APP_DOWNLOADS}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">4.5★</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{APP_SIZE}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/zh88.webp"
              alt="ZH88 Game official Android app icon"
              title="ZH88 Game – Download APK for Android"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
            />
          </figure>
        </div>
      </section>

      {/* APK details */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">ZH88 Game APK Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", APP_NAME],
                ["Category", APP_CATEGORY],
                ["App Size", APP_SIZE],
                ["Version", APP_VERSION],
                ["Required OS", APP_OS],
                ["Last Update", APP_UPDATE],
                ["Downloads", APP_DOWNLOADS],
                ["Language", APP_LANGUAGES],
                ["Price", "0$"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-secondary/50" : "bg-primary/50"}>
                  <td className="py-4 px-6 font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TOC */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-accent">Table of Contents</h2>
          <ol className="grid md:grid-cols-2 gap-2 list-decimal list-inside text-gray-300">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-accent hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="introduction" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">Introduction to ZH88 Game</h2>
          <div className="md:flex md:gap-10 items-center">
            <div className="space-y-4 text-gray-300 leading-relaxed md:w-2/3">
              <p>
                ZH88 Game APK is a fast-growing online platform that lets you play a wide variety of games and aim for
                real cash rewards. The layout stays simple so you can move between categories without confusion, while
                regular updates keep performance and features moving forward.
              </p>
              <p>
                Daily activities and a reward-based system help beginners explore rooms without rushing into large
                deposits. For players who want entertainment plus competitive sessions, ZH88 Game is a practical Android
                option in Pakistan.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
              <PhoneScreenshot
                src="/zh88-pakistan-games.webp"
                alt="ZH88 Game lobby showing popular games available in Pakistan"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="what-is-zh88" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">What is the ZH88 Game?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              ZH88 Game App is an online mobile gaming platform where you can play casino-style games and chase real
              cash outcomes. It is built for people who want real-time gameplay with promotions that can reduce the need
              to fund every session from day one.
            </p>
            <p>
              Local payment methods keep deposits and withdrawals familiar for Pakistani users. Fair-room rules and
              account security features are part of the experience, so entertainment and competitive play sit side by
              side.
            </p>
          </div>
        </div>
      </section>

      <section id="key-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">Key Features of the ZH88 Game</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "User-Friendly Interface",
              body: "The dashboard keeps game categories easy to scan. Clear menus and bright graphics help beginners understand options quickly and start a session with less friction.",
            },
            {
              title: "Wide Range of Games",
              body: "Cards, slots, and prediction games sit in one app. Each category has its own rhythm and reward pattern, and new titles appear with updates.",
            },
            {
              title: "Attractive Bonuses & Rewards",
              body: "Welcome offers, daily login bonuses, cashback, and festive events can stretch playtime when you follow the stated terms.",
            },
            {
              title: "Secure Payment Methods",
              body: "Encrypted gateways, wallet verification, and local rails such as JazzCash and EasyPaisa support smoother PKR transfers.",
            },
            {
              title: "Quick Registration",
              body: "Signup asks for basic details plus OTP verification. Password recovery stays straightforward so returning players can get back into rooms quickly.",
            },
            {
              title: "Referral Earning System",
              body: "Share your invite link or code. Successful registrations can add bonus value even when you are not in a live table.",
              image: "/zh88-invite-friends.webp",
              alt: "ZH88 Game invite friends referral screen",
            },
            {
              title: "VIP Membership",
              body: "Active players can climb VIP levels for stronger rewards, exclusive offers, priority withdrawals, and faster support paths.",
            },
            {
              title: "Responsible Customer Support",
              body: "Live chat, email, and FAQs cover account and technical questions. Live chat is best for quick steps; email suits longer cases.",
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.body}</p>
              {"image" in feature && feature.image ? (
                <PhoneScreenshot
                  src={feature.image}
                  alt={feature.alt || feature.title}
                  size="sm"
                  className="mt-5"
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <PhoneScreenshot
            src="/zh88-features.webp"
            alt="ZH88 Game feature highlights on the Android app home screen"
            size="lg"
          />
        </div>
      </section>

      <section id="whats-new" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">What is New in the Latest Version of the ZH88 Game?</h2>
          <div className="space-y-6 text-gray-300">
            {[
              ["01. Smart AI-Based Matchmaking System", "Opponents are matched closer to your recent skill level so rooms feel fairer for beginners and regulars."],
              ["02. Personalized Recommendations", "The app studies what you play most and suggests similar categories so you spend less time searching."],
              ["03. In-App Achievements", "Badges and titles unlock after milestones such as win streaks or tournament finishes."],
              ["04. Advanced Transaction History", "Wallet analytics show clearer weekly and monthly summaries for deposits and withdrawals."],
              ["05. Multi-Language Support", "Urdu and English options make menus easier for players across different regions."],
              ["06. Low-Data Consumption", "Compressed graphics help mid-range phones stay smooth on 3G/4G connections."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="popular-pakistan" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">Why is the ZH88 Game becoming Popular in Pakistan?</h2>
          <p className="text-gray-300 leading-relaxed">
            ZH88 Game APK is trending in Pakistan because it pairs entertainment with earning potential. Mobile-friendly
            design and simple registration lower the entry barrier, while JazzCash and EasyPaisa keep wallet moves
            familiar. Bonuses and seasonal events also keep daily engagement high for players who enjoy casino-style
            sessions.
          </p>
        </div>
      </section>

      <section id="how-to-earn" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">How to Earn Real Cash Rewards on the ZH88 Game?</h2>
        <div className="space-y-6">
          {[
            ["01. Gameplay Winnings", "Skill, table choice, and bet size influence results. Focused practice on one or two games usually beats random hopping."],
            ["02. Daily Login Rewards", "Login streaks can grant coins, cash credits, or free spins that add runway for the next session."],
            ["03. Special Events & Rewards", "Limited-time festivals and challenges often raise prize pools for active players."],
            ["04. Referral Program", "Invite friends with your code. Successful signups can create longer-term bonus value. See our bonus guide for details."],
            ["05. Tournaments & Competitions", "Daily and weekly contests offer prize pools and VIP points for strong finishes."],
          ].map(([title, body]) => (
            <div key={title} className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-400 text-sm">
          Want deeper strategy notes? Read{" "}
          <Link href="/blog/zh88-earning-tips-pakistan-2026" className="text-accent hover:underline">
            ZH88 earning tips for Pakistan
          </Link>
          .
        </p>
      </section>

      <section id="download-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">How to Download and Install the ZH88 Game?</h2>
          <ol className="space-y-4 text-gray-300 list-decimal list-inside leading-relaxed">
            <li>Open Chrome and visit a trusted ZH88 download page such as this site or the official publisher link.</li>
            <li>Tap the download button and wait until the APK finishes downloading.</li>
            <li>Go to Settings → Security / Privacy and allow installs from unknown sources for your browser or files app.</li>
            <li>Open the APK from Downloads and confirm installation.</li>
            <li>Launch ZH88 Game, register your account, and explore the lobby.</li>
          </ol>
          <div className="mt-8 flex justify-center">
            <CtaButton href={ROUTES.download} ariaLabel="Open ZH88 download guide">
              Full Download Guide
            </CtaButton>
          </div>
        </div>
      </section>

      <section id="system-requirements" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">System Requirements of the ZH88 Game</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800 text-left">
            <thead className="bg-secondary">
              <tr>
                <th className="py-4 px-6 text-accent">Features</th>
                <th className="py-4 px-6 text-accent">Minimum</th>
                <th className="py-4 px-6 text-accent">Recommended</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {[
                ["Operating System", "Android 5.0+", "Android 8.0+"],
                ["RAM", "2GB", "4GB"],
                ["Storage", "500MB", "1GB"],
                ["Processor", "Dual-core", "Quad-core"],
                ["Internet", "Stable 3G/4G", "Strong 4G/5G"],
              ].map((row) => (
                <tr key={row[0]} className="bg-primary/40">
                  {row.map((cell) => (
                    <td key={cell} className="py-4 px-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="why-prefer" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">Why Do Players Prefer ZH88 Over Other Gaming Platforms?</h2>
          <p className="text-gray-300 leading-relaxed">
            Players often choose ZH88 Game APK because the interface stays readable and sessions feel smooth for both
            beginners and regulars. Rewards are structured enough to track progress, and the overall experience feels
            more consistent than apps that bury menus or delay wallet tools.
          </p>
        </div>
      </section>

      <section id="register" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">How to Register an Account on the ZH88 Game?</h2>
          <div className="md:flex md:gap-10 items-start">
            <ol className="space-y-3 text-gray-300 list-decimal list-inside leading-relaxed md:w-2/3">
              <li>Open the ZH88 Game app and tap Register.</li>
              <li>Enter a valid phone number or email.</li>
              <li>Set a strong password with letters, numbers, and symbols.</li>
              <li>Double-check the details and submit the form.</li>
              <li>Complete OTP verification and start browsing games.</li>
            </ol>
            <PhoneScreenshot
              src="/zh88-register-account.webp"
              alt="ZH88 Game registration screen on Android"
              size="md"
              className="mt-6 md:mt-0 mx-auto"
            />
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Need screenshots and troubleshooting? See the{" "}
            <Link href="/blog/zh88-login-and-registration-guide" className="text-accent hover:underline">
              ZH88 login and registration guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">How to log in to the ZH88 Game?</h2>
          <div className="md:flex md:gap-10 items-start">
            <ol className="space-y-3 text-gray-300 list-decimal list-inside leading-relaxed md:w-2/3">
              <li>Launch the ZH88 Game app.</li>
              <li>Open Login and enter the same credentials used at signup.</li>
              <li>Use password reset if you forgot your details.</li>
              <li>Verify the fields and confirm login.</li>
              <li>Pick a game category that matches your comfort level.</li>
            </ol>
            <PhoneScreenshot
              src="/zh88-login-account.webp"
              alt="ZH88 Game login screen with account fields"
              size="md"
              className="mt-6 md:mt-0 mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="payment-methods" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">Methods to Deposit and Withdraw Money on the ZH88 Game</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["01. EasyPaisa", "Popular mobile wallet with real-time style transfers and wide 24/7 availability across Pakistan."],
            ["02. JazzCash", "Widely used digital wallet for quick deposits and withdrawals with a familiar mobile flow."],
            ["03. Bank Transfer", "Traditional option for larger amounts when you want bank records and stronger transfer trails."],
          ].map(([title, body]) => (
            <div key={title} className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="deposit-withdraw-steps" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">How to Deposit and Withdraw Money on the ZH88 Game?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-accent mb-4">Deposit Method</h3>
            <PhoneScreenshot
              src="/zh88-deposit-money.webp"
              alt="ZH88 Game deposit wallet screen for EasyPaisa and JazzCash"
              size="md"
              className="mb-4"
            />
            <ol className="space-y-2 text-gray-300 list-decimal list-inside leading-relaxed">
              <li>Open the app and log in.</li>
              <li>Go to Wallet and tap Deposit.</li>
              <li>Choose EasyPaisa, JazzCash, or bank transfer.</li>
              <li>Enter wallet or account details and the amount.</li>
              <li>Confirm the deposit and wait for the balance update.</li>
            </ol>
            <Link href={ROUTES.deposit} className="inline-block mt-4 text-accent hover:underline font-semibold">
              Full deposit guide →
            </Link>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-accent mb-4">Withdrawal Method</h3>
            <PhoneScreenshot
              src="/zh88-withdraw-money.webp"
              alt="ZH88 Game withdraw money screen for Pakistani wallets"
              size="md"
              className="mb-4"
            />
            <ol className="space-y-2 text-gray-300 list-decimal list-inside leading-relaxed">
              <li>Log in to ZH88 Game.</li>
              <li>Open Wallet and tap Withdraw.</li>
              <li>Select the faster method available to you.</li>
              <li>Enter accurate account details and amount.</li>
              <li>Confirm withdrawal and track status in history.</li>
            </ol>
            <Link href={ROUTES.withdraw} className="inline-block mt-4 text-accent hover:underline font-semibold">
              Full withdraw guide →
            </Link>
          </div>
        </div>
      </section>

      <section id="tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">Tips and Tricks to Maximize Your Earnings</h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
            <li>Play with a fixed budget and avoid chasing losses.</li>
            <li>Use bonuses only after reading wagering or claim rules.</li>
            <li>Focus on one or two games until patterns feel natural.</li>
            <li>Use the referral program as a side boost, not the only plan.</li>
            <li>Withdraw wins regularly instead of leaving everything in-app.</li>
            <li>Stay calm—emotional decisions usually cost more than they win.</li>
          </ul>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">About the Safety and Security of the ZH88 Game</h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
            <li>Use a strong unique password and never share it.</li>
            <li>Never share OTP or verification codes.</li>
            <li>Download only from this site or another trusted official source.</li>
            <li>Avoid financial actions on public Wi‑Fi.</li>
            <li>Review account activity regularly for anything unusual.</li>
            <li>Keep the latest version installed for security patches.</li>
          </ul>
          <p className="mt-4 text-gray-400 text-sm">
            More detail:{" "}
            <Link href="/blog/is-zh88-safe-real-or-fake-pakistan" className="text-accent hover:underline">
              Is ZH88 safe, real or fake in Pakistan?
            </Link>
          </p>
        </div>
      </section>

      <section id="vip-lounge" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">VIP Lounge of ZH88 Game</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["01. High-Stakes Gameplay", "Access higher tables and challenges that are usually closed to standard accounts."],
            ["02. Exclusive Deposit Offers", "Custom deposit bonuses and cashback styles tailored for VIP members."],
            ["03. Personalized Recommendations", "Suggestions based on your history so you spend less time hunting rooms."],
            ["04. Advanced Security", "Stronger account controls such as alerts and stricter verification for VIP wallets."],
            ["05. Early Access to New Features", "Try new games and tools before they open to every player."],
          ].map(([title, body]) => (
            <div key={title} className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="issues" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">Common Issues & Solutions of the ZH88 Game</h2>
        <div className="space-y-6">
          {[
            {
              title: "01. Cannot update the App",
              problem: "Install errors often come from low storage or compatibility conflicts.",
              solutions: ["Free enough storage", "Uninstall the old build before installing the new APK", "Restart the phone and retry"],
            },
            {
              title: "02. Bonus Not Credited",
              problem: "Bonuses may wait until offer terms are completed.",
              solutions: ["Read the bonus terms", "Finish the required actions", "Contact support with your account ID"],
            },
            {
              title: "03. Account Suspension",
              problem: "Suspicious activity can pause access until verification finishes.",
              solutions: ["Follow account rules", "Avoid duplicate or fake accounts", "Submit accurate details when asked"],
            },
            {
              title: "04. Slow Performance",
              problem: "Weak networks cause buffering during live rooms.",
              solutions: ["Use stable 4G/Wi‑Fi", "Enable low-data mode if available", "Free storage and close heavy apps"],
            },
            {
              title: "05. App Crashing",
              problem: "Outdated builds or heavy background apps can force closes.",
              solutions: ["Update to the latest APK", "Clear cache", "Close background apps before playing"],
            },
          ].map((issue) => (
            <div key={issue.title} className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">{issue.title}</h3>
              <p className="text-gray-300 mb-3">
                <span className="text-accent font-semibold">Problem:</span> {issue.problem}
              </p>
              <p className="text-accent font-semibold mb-2">Solutions</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {issue.solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">Pros and Cons</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8 border border-green-900/40">
            <h3 className="text-2xl font-bold text-white mb-4">Pros</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>User-friendly interface</li>
              <li>Daily bonuses and rewards</li>
              <li>Multiple game options</li>
              <li>Fast registration process</li>
              <li>Smooth gameplay on mid-range phones</li>
              <li>Regular updates</li>
              <li>24/7 style customer support channels</li>
            </ul>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-red-900/40">
            <h3 className="text-2xl font-bold text-white mb-4">Cons</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Risk of financial loss</li>
              <li>Internet dependency</li>
              <li>Possible withdrawal delays during peak times</li>
              <li>In-app purchases and deposits</li>
              <li>Not suitable for underage users</li>
              <li>Needs continuous monitoring of balance</li>
              <li>Competitive environment</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="final-thoughts" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">Final Thoughts</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            ZH88 Game APK is a modern online gaming platform that mixes entertainment with reward-based sessions. The
            simple interface suits beginners, while bonuses, referrals, and tournaments keep regular players engaged.
            Like every real-money app, play responsibly and treat ZH88 as entertainment—not a guaranteed income plan.
          </p>
          <div className="flex justify-center mt-8">
            <CtaButton ariaLabel="Download ZH88 Game now">DOWNLOAD NOW</CtaButton>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-accent">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="bg-secondary rounded-xl border border-gray-800 p-6 group">
              <summary className="cursor-pointer list-none font-semibold text-white text-lg flex justify-between items-center">
                {item.q}
                <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="mt-4 text-gray-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
