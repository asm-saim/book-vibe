import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Listed Books", href: "/list-book" },
    { name: "Reading Stats", href: "/pages-to-read" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 ring-1 ring-green-400/20">
            <Image src={logo} width={28} height={28} alt="Book Vibe logo" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Book <span className="text-green-400">Vibe</span>
            </h1>
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
              Discover • Read • Enjoy
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200  hover:bg-white/5 hover:text-white"}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white">
            Sign In
          </button>

          <button className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-green-500/10 transition-all duration-200 hover:bg-green-400 hover:shadow-green-500/20">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-2xl"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="rounded-lg text-slate-300 hover:bg-white/5 hover:text-green-400">
                  {item.name}
                </Link>
              </li>
            ))}

            <div className="my-2 border-t border-white/10" />

            <li>
              <a className="text-slate-300">Sign In</a>
            </li>

            <li>
              <a className="font-semibold text-green-400">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
