import "@/scss/theme.scss";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import GTMNoScript from "@/components/GTMNoScript";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import WebSiteSchema from "@/components/schema/WebSiteSchema";
import DynamicBreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

// Dynamically load ALL non-critical components
const ReviewSchema = dynamic(() => import("@/components/schema/ReviewSchema"), { ssr: false });
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), { 
  ssr: false,
  loading: () => null 
});

// OPTIMIZED: All fonts deferred - no preload, system fonts first
const inter = Inter({
  subsets: ["latin"],
  display: "optional", // ← CHANGE THIS: "optional" is best for performance
  variable: "--font-inter",
  preload: false, // ← NO PRELOAD
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: false, // ← Reduce overhead
});

const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-jakarta_sans",
  preload: false,
  adjustFontFallback: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-playfair",
  preload: false,
  adjustFontFallback: false,
});

export const metadata = {
  title: "Daiki Media | Expert SEO & Website Development Agency",
  description: "Connect with the best graphic design agencies...",
};

// Critical inline CSS - includes system font fallbacks
const criticalCSS = `
  header, nav, .navbar { height: 80px; }
  body { 
    padding-top: 80px; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  img, video { aspect-ratio: attr(width) / attr(height); }
  .hero-section { min-height: 50vh; }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="EIBnMq71KKUDT895qyPc5L_RMaDrmBpUG8pgX3FO6N4" />
        
        {/* Remove ALL preconnects - they're not needed if fonts/analytics are deferred */}
        
        {/* Critical CSS inlined */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Meta tags remain */}
        <meta property="og:title" content="Daiki Media" />
        <meta property="og:description" content="Daiki Media provides expert SEO..." />
        <meta property="og:image" content="https://www.daikimedia.com/images/logo.png" />
        <meta property="og:url" content="https://www.daikimedia.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="daiki media" />
        <meta name="twitter:description" content="Daiki Media provides expert SEO..." />
        <meta name="twitter:image" content="https://www.daikimedia.com/images/logo.png" />
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
        
        {/* Lazy load everything below the fold */}
        <ReviewSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <WhatsAppFloat />
        
        {/* Load analytics AFTER everything else */}
        <Script
          id="gtm"
          strategy="lazyOnload" // ← Changed from afterInteractive
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NZZ2849');
            `
          }}
        />
        
        {/* Load all other analytics together when idle */}
        <Script
          id="all-other-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Clarity
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "priqspzydx");
              
              // Facebook Pixel
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
            `
          }}
        />
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.node };