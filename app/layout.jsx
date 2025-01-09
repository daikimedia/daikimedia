import "@/scss/theme.scss";
// import Providers from "@/utils/providers";
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
  title: {
    default: "Daiki Media | Expert SEO & Website Development Agency",
  },
  description:
    "Daiki Media offers top-notch SEO and website development services to help businesses grow online. Build stunning websites, improve search rankings, and boost traffic with our expert team. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16658963349"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16658963349');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300",
          inter.variable,
          jakarta_sans.variable,
          playfair.variable
        )}
      >
        {/* <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
