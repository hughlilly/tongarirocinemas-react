// Header — used across all pages

import React, { useState } from "react";
import logo from "../assets/logos_icons/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  // Use useState hook to set visibility of mobile menu
  const [mobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <header>
      {/* Navigation bar, including logo and mobile menu */}
      <nav>
        <div className="relative p-6 mx-auto my-3 md:mx-4 lg:mx-6 xl:mx-10">
          {/* Flex container */}
          <div className="flex place-items-center justify-between">
            {/* Logo & wordmark */}
            <Link
              to="/"
              className="no-underline"
              onClick={() => {
                setMobileMenuVisibility(false);
                const hamBtn = document.getElementById("hamburger-button");
                hamBtn.classList.toggle("open");
              }}
            >
              <div id="logo-wordmark">
                <div id="logo" className="flex space-x-4">
                  <img
                    src={logo}
                    alt="Tongariro Cinemas logo"
                    className="h-[36px] w-[36px]"
                  />
                  <div
                    id="wordmark"
                    className="flex font-wordmark font-extrabold text-xl uppercase place-items-center"
                  >
                    Tongariro Cinemas
                  </div>
                </div>
              </div>
            </Link>
            {/* Tablet and desktop menu */}
            <div id="nav-menu" className="hidden md:flex space-x-6">
              <Link
                to="/now-playing"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                Now Playing
              </Link>
              <Link
                to="/tickets"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                Tickets
              </Link>
              <Link
                to="/rewards"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                Rewards
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                About Us
              </Link>
            </div>
            {/* Hamburger button */}
            <button
              id="hamburger-button"
              className="block hamburger md:hidden focus:outline-none"
              onClick={(event) => {
                setMobileMenuVisibility(!mobileMenuVisible);
                event.currentTarget.classList.toggle("open");
              }}
            >
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </div>
        {/* Mobile menu — rendered conditionally: added to DOM only upon hamburger button click */}
        {mobileMenuVisible && (
          <div
            id="mobile-menu"
            className="my-8 mx-20 flex flex-col items-center self-end py-8 space-y-4 sm:w-auto sm:self-center border"
          >
            <Link to="/now-playing">Now Playing</Link>
            <Link to="/tickets">Tickets</Link>
            <Link to="/rewards">Rewards</Link>
            <Link to="/about">About Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
