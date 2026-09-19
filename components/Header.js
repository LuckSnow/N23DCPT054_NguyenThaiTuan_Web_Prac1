"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 pb-6 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 hover:opacity-90 transition">
          essos
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition">
            About
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            Products
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            Testimonial
          </Link>
          <Link href="/" className="text-gray-950 font-bold border-b-2 border-gray-900 pb-0.5">
            Blog
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/login"
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gray-800 hover:text-gray-950 transition"
          >
            <span>Login</span>
            <span className="text-sm font-normal">↗</span>
          </Link>
          <Link
            href="/get-started"
            className="bg-[#944327] hover:bg-[#7e3820] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/get-started"
            className="bg-[#944327] text-white text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-hidden"
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

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 px-2 border-t border-gray-100 mt-4 space-y-3">
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
