import {
  APP_AGGREGATE_RATING,
  APP_DOWNLOAD_URL,
  APP_LOGO,
  APP_SCREENSHOTS,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export { APP_AGGREGATE_RATING, APP_DOWNLOAD_URL, APP_SCREENSHOTS };

export const FACEBOOK_PROFILE_URL = "";

export const ORGANIZATION_SAME_AS: string[] = [];

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}${APP_LOGO}`,
  description:
    "ZH88 Game is an online earning platform popular for casino-style games, local JazzCash & EasyPaisa payments, and real cash rewards in Pakistan.",
  sameAs: ORGANIZATION_SAME_AS,
};
