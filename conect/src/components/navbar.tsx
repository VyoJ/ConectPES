"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "../../public/Logo.png";
import Image from "next/image";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "People", path: "/people" },
    { title: "Facilities", path: "/facilities" },
    { title: "Projects", path: "/projects" },
    { title: "Events", path: "/events" },
    { title: "Accomplishments", path: "/accomplishments" },
    { title: "Publications", path: "/publications" },
    { title: "Contact", path: "/contact" },
    { title: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="w-full lg:h-[75px] shadow bg-[#023047]">
      <div className="items-center mx-4 md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src={Logo} height={100} width={150} alt="logo" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-[#d0a616] text-secondary text-lg"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
