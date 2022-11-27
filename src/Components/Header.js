// Header — used across all pages

import React, { useState } from "react";
import { Link as NavLink } from "react-router-dom";

import logo from "../assets/logos_icons/logo.svg";
import { sections } from "../Data/AppData";
import NavElement from "./NavElement";

function Header() {
  // Use useState hook to set visibility of mobile menu
  const [mobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <header>
      {/* Navigation bar, including logo and mobile menu */}
      <nav>
        <div className="relative p-4 sm:p-6 my-1 md:my-3 md:mx-4 lg:mx-6 xl:mx-10">
          {/* Flex container */}
          <div className="flex place-items-center justify-between">
            {/* Logo & wordmark */}
            <NavLink to="../" className="no-underline">
              <div id="logo-wordmark">
                <div id="logo" className="flex space-x-1 md:space-x-4">
                  <img
                    src={logo}
                    alt="Tongariro Cinemas logo"
                    className="h-[36px] w-[36px]"
                  />
                  <div
                    id="wordmark"
                    className="flex font-wordmark font-extrabold md:text-xl uppercase place-items-center"
                  >
                    Tongariro Cinemas
                  </div>
                </div>
              </div>
            </NavLink>
            {/* Tablet and desktop menu */}
            <div id="nav-menu" className="hidden md:flex space-x-6">
              {/* Map over sections, creating mobile menu (with hover state on links) */}
              {sections.map((section) => (
                <NavElement
                  destination={"../" + section.linkTo}
                  name={section.headingName}
                  key={"NavDesktop" + section.id}
                  isDecorated={true}
                />
              ))}
            </div>
            {/* Hamburger button */}
            <button
              id="hamburger-button"
              className="block relative my-auto w-6 h-6 md:hidden focus:outline-none"
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
        {/* Mobile menu. Rendered conditionally: added to DOM only upon hamburger-button click */}
        {mobileMenuVisible && (
          <div
            id="mobile-menu"
            className="my-8 mx-20 flex flex-col items-center self-end py-8 space-y-4 sm:w-auto sm:self-center border"
          >
            {/* Map over sections, creating mobile menu (no hover state on links) */}
            {sections.map((section) => (
              <NavElement
                destination={section.linkTo}
                name={section.headingName}
                key={"NavMobile" + section.id}
                isDecorated={false}
              />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
