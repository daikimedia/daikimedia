import "@/scss/theme.scss";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import GTMNoScript from "@/components/GTMNoScript";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import WebSiteSchema from "@/components/schema/WebSiteSchema";
import DynamicBreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ReviewSchema from "@/components/schema/ReviewSchema";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'arial'],
});
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta_sans",
  preload: false,
});
const playfair = Playfair_Display({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: false, 
});

export const metadata = {
  title: "Daiki Media | Expert SEO & Website Development Agency",
  description:
    "Connect with the best graphic design agencies to create visually compelling designs that strengthen brand identity and captivate target audiences effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EIBnMq71KKUDT895qyPc5L_RMaDrmBpUG8pgX3FO6N4"
        />
        
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* ✅ ADDED: Preload critical font */}
        <link
          rel="preload"
          href={inter.style.fontFamily}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        <link
          rel="preload"
          as="image"
          href="https://www.daikimedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimg.81f0ff33.avif&w=1920&q=75"
          type="image/avif"
        />

        <meta property="og:title" content="Daiki Media" />
        <meta
          property="og:description"
          content="Daiki Media provides expert SEO and website development services."
        />
        <meta
          property="og:image"
          content="https://www.daikimedia.com/images/logo.png"
        />
        <meta property="og:url" content="https://www.daikimedia.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image " />
        <meta name="twitter:title" content="daiki media" />
        <meta
          name="twitter:description"
          content="Daiki Media provides expert SEO and website development services."
        />
        <meta
          name="twitter:image"
          content="https://www.daikimedia.com/images/logo.png"
        />
        <meta name="twitter:site" content="@daiki.Media" />
        <GTMNoScript />
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
        <PrimaryNavbar />
        <DynamicBreadcrumbSchema />
        {children}
        <ReviewSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <WhatsAppFloat />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZZ2849');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "priqspzydx");`,
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Daiki Media",
              url: "https://www.daikimedia.com",
              description:
                "Daiki Media provides expert SEO and website development services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jalan Ara, SD 7/3d, Bandar Sri Damansara",
                addressLocality: "Kuala Lumpur",
                addressRegion: "KL",
                postalCode: "52200",
                addressCountry: "MY",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+601114850067",
                contactType: "customer service",
              },
            }),
          }}
        />
        
        <Script
          id="facebook-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              if (!window.fbq) {
                fbq('init', '4648082808576876');
                fbq('track', 'PageView');
              }
            `,
          }}
        />
        
        
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};