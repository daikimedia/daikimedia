"use client";
import NavbarItem from "@/data/navbar";
import { cn } from "@/utils/cn";
import { faAngleDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SearchOption from "./SearchOption";

const PrimaryNavbar = () => {
  const { menuData } = NavbarItem;
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(true);

  const handleStickyNavbar = () => {
    setSticky(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 z-50 w-full bg-transparent pt-8 transition-all duration-500 max-md:z-[500]",
          sticky ? "nav-sticky" : ""
        )}
      >
        <nav className="container dark:text-white relative flex items-center">
          <div className="nav-logo xl:min-w-[150px]">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="dark:hidden"
                width={120}
                height={100}
              />
              <img
                src="/images/logo.png"
                alt="logo dark version"
                className="hidden dark:inline-block"
                width={160}
                height={120}
              />
            </Link>
          </div>

          <ul className="nav-list mx-auto hidden rounded-large bg-white p-2.5 shadow-nav dark:bg-dark-200 lg:flex [&>*:not(:last-child)]:me-1">
            {menuData.menuContent.map((menuItem) => (
              <li
                className={`${menuItem.megaMenu ? "group" : !menuItem.path ? "group relative" : ""}`}
                key={menuItem.id}
              >
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={cn(
                      "flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium capitalize leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5"
                    )}
                  >
                    {menuItem.title}
                  </Link>
                ) : menuItem.megaMenu ? (
                  <>
                    <Link
                      href="#"
                      className={cn(
                        "hover:border-borderColour dark:hover:border-borderColour/10 group flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:bg-white hover:duration-500 dark:text-white dark:hover:bg-dark-200 lg:px-4 xl:px-5",
                        menuItem.title === "page" ? "active" : ""
                      )}
                    >
                      {menuItem.title}
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="ml-1 mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white"
                      />
                    </Link>
                    <div className="absolute left-0 top-12 z-10 w-full origin-top scale-y-0 rounded-medium h-[500px] bg-white p-2.5 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 dark:text-white">
                      <div className="grid grid-cols-4 gap-6 px-4">
                        {["3.1", "3.2", "3.3", "3.4"].map((category) => (
                          <div key={category} className="h-64 ">
                            {menuItem.submenu
                              .filter(
                                (item) =>
                                  String(item.id).startsWith(category) &&
                                  item.header
                              )
                              .map((headerItem) => (
                                <div key={headerItem.id}>
                                  <h5 className="font-bold mb-2 text-black dark:text-white">
                                    {headerItem.header}
                                  </h5>
                                  <ul>
                                    {menuItem.submenu
                                      .filter(
                                        (item) =>
                                          String(item.id).startsWith(
                                            category
                                          ) && !item.header
                                      )
                                      .map((submenuItem) => (
                                        <li
                                          className="relative text-sm py-2 capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                                          key={submenuItem.id}
                                        >
                                          <Link
                                            href={submenuItem.path}
                                            className="flex"
                                          >
                                            <span className="text-black dark:text-white">
                                              {submenuItem.title}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="#"
                      className={cn(
                        "flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium capitalize leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5",
                        menuItem.title === "home" ? "active" : ""
                      )}
                    >
                      {menuItem.title}
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="ml-1 mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white"
                      />
                    </Link>
                    <ul className="absolute left-0 top-12 z-10 min-w-[250px] origin-top scale-y-0 rounded-md bg-white p-5 opacity-0 duration-500  group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
                      {menuItem.submenu.map((submenuItem) => (
                        <li
                          className="relative overflow-hidden pb-2.5 text-base capitalize text-paragraph duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0  before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                          key={submenuItem.id}
                        >
                          <Link href={submenuItem.path} className="flex">
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          <ul className="ml-auto flex items-center [&>*:not(:last-child)]:me-2.5">
            <li className="max-lg:hidden">
              <Link
                href="https://api.whatsapp.com/send?phone=601114850067"
                className="btn btn-navbar btn-sm"
              >
                Free Website Audit
              </Link>
            </li>
            <li className="max-lg:inline-block lg:hidden">
              <button
                className="mobile-menu-button relative h-10 w-10 rounded-full bg-white outline-none dark:bg-dark-200"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </button>
            </li>
          </ul>

          <div
            className={`mobile-menu max-lg:overflow-y-auto ${showMobileMenu ? "open" : ""}`}
          >
            <button
              className="navbar-toggle-close absolute right-6 top-5 h-10 w-10 rounded-full bg-white outline-none dark:bg-dark-200"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-800 dark:text-white"
              />
            </button>
            <ul className="nav-list flex w-full max-w-[500px] flex-col gap-5 landscape:h-full">
              {menuData.menuContent.map((menuItem) => (
                <li
                  className={cn(menuItem.path ? "relative" : "group relative")}
                  key={menuItem.id}
                >
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={cn(
                        "flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-gray-800 transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5"
                      )}
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                      {menuItem.title}
                    </Link>
                  ) : menuItem.megaMenu ? (
                    <>
                      <Link
                        href="#"
                        className="hover:border-borderColour dark:hover:border-borderColour/10 group flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-gray-800 transition-colors duration-500 hover:bg-white hover:duration-500 dark:text-white dark:hover:bg-dark-200 lg:px-4 xl:px-5"
                      >
                        {menuItem.title}
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="ml-auto mt-1 text-gray-800 duration-500 group-hover:rotate-180 dark:text-white"
                        />
                      </Link>

                      <div className="absolute left-0 top-12 z-10 w-full origin-top scale-y-0 rounded-medium bg-white p-2.5 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 dark:text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                          {["3.2", "3.1", "3.3", "3.4"].map((category) => (
                            <div key={category}>
                              {menuItem.submenu
                                .filter(
                                  (item) =>
                                    String(item.id).startsWith(category) &&
                                    item.header
                                )
                                .map((headerItem) => (
                                  <div key={headerItem.id}>
                                    <h3 className="font-bold mb-2 text-gray-800 dark:text-white">
                                      {headerItem.header}
                                    </h3>
                                    <ul>
                                      {menuItem.submenu
                                        .filter(
                                          (item) =>
                                            String(item.id).startsWith(
                                              category
                                            ) && !item.header
                                        )
                                        .map((submenuItem) => (
                                          <li
                                            className="relative text-sm py-2 capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                                            key={submenuItem.id}
                                          >
                                            <Link
                                              href={submenuItem.path}
                                              className="flex"
                                              onClick={() =>
                                                setShowMobileMenu(
                                                  !showMobileMenu
                                                )
                                              }
                                            >
                                              <span className="text-gray-800 dark:text-white">
                                                {submenuItem.title}
                                              </span>
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="#"
                        className="flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-gray-800 transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5"
                      >
                        {menuItem.title}
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="ml-auto mt-1 text-gray-800 duration-500 group-hover:rotate-180 dark:text-white"
                        />
                      </Link>
                      <ul className="absolute left-0 top-12 z-10 min-w-[250px] origin-top scale-y-0 rounded-md bg-white p-5 opacity-0 duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="relative overflow-hidden pb-2.5 text-base capitalize text-gray-800 duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                            key={submenuItem.id}
                          >
                            <Link
                              href={submenuItem.path}
                              className="flex"
                              onClick={() => setShowMobileMenu(!showMobileMenu)}
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}

              <li>
                <Link
                  href="/request-demo"
                  className="  btn-navbar  btn-sm"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {showSearch &&
        createPortal(
          <SearchOption onClose={() => setShowSearch(false)} />,
          document.body
        )}

      <style jsx global>{`
        /* Mobile menu styles */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          padding: 80px 20px 20px;
          background-color: white;
          transition: all 0.5s ease-in-out;
          overflow-y: auto;
          z-index: 999;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        }

        .dark .mobile-menu {
          background-color: #1f2937; /* dark mode background */
        }

        .mobile-menu.open {
          right: 0;
        }

        /* Ensure text is visible in mobile menu */
        .mobile-menu a,
        .mobile-menu span,
        .mobile-menu h3,
        .mobile-menu h5 {
          color: #1f2937 !important; /* Force dark text on light background */
        }

        .dark .mobile-menu a,
        .dark .mobile-menu span,
        .dark .mobile-menu h3,
        .dark .mobile-menu h5 {
          color: white !important; /* Force light text on dark background */
        }

        /* Submenu styling for mobile */
        .mobile-menu .group:hover ul,
        .mobile-menu .group:hover div {
          position: static !important;
          opacity: 1 !important;
          transform: scaleY(1) !important;
          box-shadow: none;
          margin-top: 10px;
          margin-bottom: 10px;
          background-color: rgba(0, 0, 0, 0.05) !important;
          border-radius: 8px;
          height: auto !important;
          overflow: visible !important;
        }

        .dark .mobile-menu .group:hover ul,
        .dark .mobile-menu .group:hover div {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }

        /* Mega menu styling for mobile */
        .mobile-menu .group:hover div {
          padding: 15px !important;
        }

        .mobile-menu .group:hover div .grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 15px !important;
        }

        /* Toggle button styling */
        .navbar-toggle-close {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1f2937;
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .dark .navbar-toggle-close {
          color: white;
          background-color: #374151;
        }

        /* Fix for nav-sticky */
        .nav-sticky {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dark .nav-sticky {
          background-color: #111827;
        }
      `}</style>
    </>
  );
};

export default PrimaryNavbar;
