import "@/scss/theme.scss";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Daiki Media" />
        <meta property="og:description" content="Daiki Media provides expert SEO and website development services." />
        <meta property="og:image" content="/public/logo.png" />
        <meta property="og:url" content="https://www.daikimedia.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image " />
        <meta name="twitter:title" content="daiki media" />
        <meta name="twitter:description" content="Daiki Media provides expert SEO and website development services." />
        <meta name="twitter:image" content="/pulic/logo.png" />
        <meta name="twitter:site" content="@daiki.Media" />

        {/*  Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZZ2849');
          `}
        </Script>
             {/*Schema Markup for SEO */}
             <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "LocalBusiness",
              "name": "Daiki Media",
              "url": "https://daikimedia.com ",
              "description": "Daiki Media provides expert SEO and website development services.",
              "address": {
                "@type": "PostalAddress ",
                "streetAddress": "Jalan Ara, SD 7/3d, Bandar Sri Damansara",
                "addressLocality": "Kuala Lumpur",
                "addressRegion": "KL",
                "postalCode": "52200",
                "addressCountry": "MY"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+601114850067",
                "contactType": "customer service"
              }
            })
          }}
        />

        {/*  Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZZ2849');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZZ2849"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZZ2849"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node,
};