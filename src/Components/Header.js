// Header — used across all pages

import React, { useState } from "react";
import logo from "../assets/logos_icons/logo.svg";
import { Link as NavLink } from "react-router-dom";

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
            <NavLink to="/" className="no-underline">
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
            </NavLink>
            {/* Tablet and desktop menu */}
            <div id="nav-menu" className="hidden md:flex space-x-6">
              <NavLink
                to="/now-playing"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                Now Playing
              </NavLink>
              <NavLink
                to="/tickets"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                Tickets
              </NavLink>
              <NavLink
                to="/rewards"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                Rewards
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-blue-800 hover:underline hover:underline-offset-4"
              >
                About Us
              </NavLink>
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
            <NavLink to="/now-playing">Now Playing</NavLink>
            <NavLink to="/tickets">Tickets</NavLink>
            <NavLink to="/rewards">Rewards</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
