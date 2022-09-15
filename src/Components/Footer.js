// Footer — used across all pages

import React from "react";

function Footer() {
  return (
    <footer className="sticky top-[100vh] m-auto text-xs p-10 place-items-end text-center md:text-right">
      {/* Gradient before: */}
      {/* bg-gradient-to-t from-slate-900 via-slate-700 to-slate-500 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mx-6 lg:mx-16">
        {/* If gradient in use, set text to "text-teal-50" */}
        <div
          id="copyright"
          className="font-mono flex-row pb-3 md:pb-0"
          title="Site by Hugh Lilly (ID 20220344)"
        >
          © 2022 Tongariro Cinemas Ltd.
        </div>
        <div id="image-credits">
          Logo and icons from&nbsp;
          <a
            href="https://iconscout.com/icon-pack/cinema-53"
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
          >
            Cinema Icon Pack
          </a>
          &nbsp;on&nbsp;
          <a
            href="https://iconscout.com"
            className="underline hover:no-underline"
          >
            IconScout
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
