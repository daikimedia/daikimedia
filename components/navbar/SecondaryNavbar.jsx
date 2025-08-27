"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SearchOption from "./SearchOption";
import TopBar from "./TopBar";
import SecondaryDesktopNavbar from "./SecondaryDesktopNavbar";
import SecondaryMobileNavbar from "./SecondaryMobileNavbar";

const SecondaryNavbar = ({ hideTopBar = false }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <header>
      {!hideTopBar && <TopBar />}
      <div
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-all duration-500 dark:bg-dark-200",
          sticky ? "nav-sticky" : ""
        )}
      >
        <nav className="container relative flex items-center">
          <div className="nav-logo">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="dark:hidden"
                width={70}
                height={29}
              />
              <img
                src="/images/logo.png"
                alt="logo dark version"
                className="hidden dark:inline-block"
                width={70}
                height={29}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <SecondaryDesktopNavbar />

          {/* Mobile Navigation */}
          <SecondaryMobileNavbar />
        </nav>
      </div>
      {showSearch &&
        createPortal(
          <SearchOption onClose={() => setShowSearch(false)} />,
          document.body
        )}

      <style jsx global>{`
        /* Fix for nav-sticky */
        .nav-sticky {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dark .nav-sticky {
          background-color: #111827;
        }
      `}</style>
    </header>
  );
};

export default SecondaryNavbar;
