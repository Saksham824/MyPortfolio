"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  LayoutGrid,
  BookOpen,
  Image as ImageIcon,
  Menu,
  X
} from "lucide-react";
import { ModeToggle } from "@/theme";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/work", label: "Work", icon: LayoutGrid },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/gallery", label: "Gallery", icon: ImageIcon }
];

export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-white/80 via-white/60 to-white/80 dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-zinc-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-zinc-800 shadow-lg transition-all">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-3">
          
          <span className=" sm:inline text-xs font-medium text-gray-700 dark:text-gray-300 opacity-80">
            India/Jammu
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center bg-white/70 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-full shadow px-4 py-1 space-x-2 backdrop-blur-md">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 px-4 py-1 rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-zinc-700 dark:hover:to-zinc-800 transition-all duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Icon size={18} className="opacity-80" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
          <Divider />
          <button className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-zinc-700 transition-all duration-150">
            <ModeToggle />
          </button>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Right: Time */}
        <span className=" sm:inline text-xs font-mono text-gray-700 dark:text-gray-300 opacity-80">
          {time}
        </span>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-72 max-w-full dark:bg-zinc-900 bg-white h-full shadow-2xl flex flex-col p-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Close menu"
            className="self-end mb-6 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-zinc-700 dark:hover:to-zinc-800 transition-all duration-150 text-base font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={20} className="opacity-80" />
                {label}
              </Link>
            ))}
            <Divider vertical={false} />
            <button className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-zinc-700 transition self-start">
              <ModeToggle />
            </button>
          </nav>
        </div>
        {/* Click outside to close */}
        <div className="flex-1" onClick={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}

function Divider({ vertical = true }) {
  return vertical ? (
    <div className="w-px h-6 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent dark:from-blue-700 dark:via-purple-700 dark:to-transparent mx-2 opacity-60" />
  ) : (
    <div className="h-px w-full bg-gradient-to-r from-blue-400 via-purple-400 to-transparent dark:from-blue-700 dark:via-purple-700 dark:to-transparent my-3 opacity-60" />
  );
}