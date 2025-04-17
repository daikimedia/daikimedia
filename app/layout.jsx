import "@/scss/theme.scss";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  weight: ["400", "500", "600"], // Essential weights only
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta_sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"], // Essential weights only
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta_sans",
});

const playfair = Playfair_Display({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Daiki Media | Expert SEO & Website Development Agency",
  description:
    "Daiki Media offers top-notch SEO and website development services to help businesses grow online. Build stunning websites, improve search rankings, and boost traffic with our expert team. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EIBnMq71KKUDT895qyPc5L_RMaDrmBpUG8pgX3FO6N4"
        />
        <link rel="canonical" href="https://www.daikimedia.com/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Daiki Media" />
        <meta property="og:description" content="Daiki Media provides expert SEO and website development services." />
        <meta property="og:image" content="https://www.daikimedia.com/images/logo.png" />
        <meta property="og:url" content="https://www.daikimedia.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daiki Media" />
        <meta name="twitter:description" content="Daiki Media provides expert SEO and website development services." />
        <meta name="twitter:image" content="https://www.daikimedia.com/images/logo.png" />
        <meta name="twitter:site" content="@daiki.Media" />

        {/* Google Tag Manager - Deferred with Safety */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload" // Load after page is interactive
          src="https://www.googletagmanager.com/gtag/js?id=GTM-NZZ2849"
          onError={(e) => {
            console.error("GTM script failed to load:", e);
          }}
        />
      </head>
      <body
        className={cn(
          "relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300",
          inter.variable,
          jakarta_sans.variable,
          playfair.variable
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};