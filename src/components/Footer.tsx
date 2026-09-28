import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { BLOG_POSTS, ROUTES, SITE_DOMAIN, SITE_NAME } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">{SITE_NAME}</h2>
            <p className="text-sm text-gray-300 mb-4">
              ZH88 Game is a popular online earning platform with casino-style cards, slots, and prediction games.
              Deposit and withdraw with JazzCash, EasyPaisa, and bank transfer in Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.home} className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href={ROUTES.download} className="text-gray-300 hover:text-accent transition-colors">Download</Link></li>
              <li><Link href={ROUTES.pc} className="text-gray-300 hover:text-accent transition-colors">PC Version</Link></li>
              <li><Link href={ROUTES.blog} className="text-gray-300 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href={ROUTES.about} className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.contact} className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.deposit} className="text-gray-300 hover:text-accent transition-colors">Deposit Guide</Link></li>
              <li><Link href={ROUTES.withdraw} className="text-gray-300 hover:text-accent transition-colors">Withdraw Guide</Link></li>
              <li>
                <Link href={`/blog/${BLOG_POSTS[1].slug}`} className="text-gray-300 hover:text-accent transition-colors">
                  Account & Login
                </Link>
              </li>
              <li>
                <Link href={`/blog/${BLOG_POSTS[3].slug}`} className="text-gray-300 hover:text-accent transition-colors">
                  Earning Tips
                </Link>
              </li>
              <li><Link href={ROUTES.privacy} className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href={ROUTES.disclaimer} className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Download ZH88 Game APK for Android and start playing with daily rewards, referrals, and VIP perks.
            </p>
            <CtaButton ariaLabel="Download ZH88 Game APK for Android">DOWNLOAD NOW</CtaButton>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="hover:text-accent">{SITE_DOMAIN}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
