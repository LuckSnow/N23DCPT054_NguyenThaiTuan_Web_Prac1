"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 pb-6 px-2 sm:px-4 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 hover:opacity-90 transition shrink-0">
          Blogs
        </Link>

        {/* Desktop Navigation Links (hiển thị từ màn hình lg >= 1024px) */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-xs font-semibold uppercase tracking-widest text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition whitespace-nowrap">
            About
          </Link>
          <Link href="/" className="hover:text-gray-900 transition whitespace-nowrap">
            Products
          </Link>
          <Link href="/" className="hover:text-gray-900 transition whitespace-nowrap">
            Testimonial
          </Link>
          <Link href="/" className="text-gray-950 font-bold border-b-2 border-gray-900 pb-0.5 whitespace-nowrap">
            Blog
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 shrink-0">
          <Link
            href="/login"
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gray-800 hover:text-gray-950 transition whitespace-nowrap"
          >
            <span>Login</span>
            <span className="text-sm font-normal">↗</span>
          </Link>
          <Link
            href="/get-started"
            className="bg-[#944327] hover:bg-[#7e3820] text-white text-xs font-semibold uppercase tracking-wider px-4 xl:px-5 py-2.5 rounded-full transition shadow-sm whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile / Tablet menu button (dành cho màn hình < 1024px bao gồm iPad Mini) */}
        <div className="lg:hidden flex items-center gap-3 shrink-0">
          <Link
            href="/get-started"
            className="bg-[#944327] hover:bg-[#7e3820] text-white text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full transition"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-hidden rounded-lg hover:bg-stone-100 transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden pt-4 pb-2 px-2 border-t border-gray-100 mt-4 space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2 text-xs font-semibold uppercase tracking-widest text-gray-600">
            <Link href="/" className="py-2 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/" className="py-2 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/" className="py-2 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Testimonial
            </Link>
            <Link href="/" className="py-2 text-gray-950 font-bold" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/login" className="py-2 text-gray-800 flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
              <span>Login</span> ↗
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

