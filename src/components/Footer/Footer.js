import React from "react";
import { SiBehance, SiLinkedin, SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-100 py-3 px-2">
      <div className="lg:max-w-screen-xl flex items-center justify-between mx-auto">
        <p className="font-bold text-sm">
          Made With <span className="font-normal">💖</span> By Amr Arnous
        </p>
        <ul className="flex items-center">
          <li className="mx-3 text-lg text-gray-800">
            <a
              target="_blank"
              href="https://www.behance.net/amrarnous"
              rel="noreferrer"
            >
              <SiBehance />
            </a>
          </li>
          <li className="mx-3 text-lg text-gray-800">
            <a target="_blank" href="#">
              <SiLinkedin />
            </a>
          </li>
          <li className="mx-3 text-lg text-gray-800">
            <a target="_blank" href="#">
              <SiInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
