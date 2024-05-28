'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/assets/enoobs_logo2.png';
const Header = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  return (
    <header className="z-10 md:absolute lg:absolute relative top-0 w-full md:px-20 lg:px-20 px-10 py-5 flex bg-black lg:bg-unset md:bg-unset lg:bg-none md:bg-none justify-between font-inter">
      <nav
        className=" flex w-full items-center justify-between py-1"
        aria-label="Global"
      >
        <div className="">
          <Link href="/">
            <Image className="w-40 h-10" alt="" src={Logo} />
          </Link>
        </div>
        <div className="lg:flex md:flex hidden justify-end w-full">
          <div className="flex float-left">
            <div className=" m-auto text-white p-3 font-light text-sm">
              <Link href="/">Home</Link>
            </div>
            <div className=" m-auto text-white p-3 font-light text-sm">
              <Link href="/">About</Link>
            </div>
            <div className=" m-auto text-white p-3 font-light text-sm">
              <Link href="/">Blog</Link>
            </div>
            <div className=" m-auto text-white p-3 font-light text-sm">
              <Link href="#about-us">About Us</Link>
            </div>
            <div className=" m-auto text-white p-3 font-light text-sm">
              <Link href="#contact-us">Contact</Link>
            </div>
            {/* <div className="ml-4 text-white cursor-pointer text-sm py-3.5 px-6 rounded-full h-12 bg-main-green">{`Download`}</div> */}
          </div>
        </div>
        <div className={`flex md:hidden lg:hidden`}>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => {
              setShowSidePanel(!showSidePanel);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {showSidePanel && (
        <div role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                {/* <Image className="h-8 w-auto logo" src={Logo} alt=""></Image> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => {
                  setShowSidePanel(false);
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <div className="" id="disclosure-1">
                      <div className="px-4 py-2">
                        <Link
                          target="_blank"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                          href="/"
                        >
                          Home
                        </Link>
                        <Link
                          target="_blank"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                          href="#about-us"
                        >
                          About Us
                        </Link>
                        <Link
                          target="_blank"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                          href="/"
                        >
                          Docs
                        </Link>
                        <Link
                          target="_blank"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                          href="#contact-us"
                        >
                          Contact
                        </Link>
                        <Link
                          target="_blank"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                          href="/"
                        >
                          {` Let's talk`}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
