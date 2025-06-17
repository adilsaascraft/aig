// components/Navbar.jsx

'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="w-full bg-gradient-to-r from-[#0A0E80] via-[#0E3C96] to-[#75a8f2] shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="AIG Hospitals Logo" width={150} height={40} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li><Link href="/" className="hover:underline underline-offset-8">Home</Link></li>
          <li><Link href="/about" className="hover:underline underline-offset-8">About Us</Link></li>
          <li><Link href="/conferences" className="hover:underline underline-offset-8">Conferences</Link></li>
          <li><Link href="/workshops" className="hover:underline underline-offset-8">Workshops</Link></li>
          <li><Link href="/cmes" className="hover:underline underline-offset-8">CMEs</Link></li>
        </ul>

        {/* Login/Sign Up Button */}
        <Link href="/auth/login" className="z-20">
          <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0A0E80] transition duration-300 text-sm">
            Login/ Sign Up
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white z-20"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Sidebar (Mobile Menu) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <span className="font-semibold text-[#0A0E80]">Menu</span>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-700">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col space-y-6 p-6 text-[#0A0E80] font-semibold text-base">
            <li><Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setSidebarOpen(false)}>About Us</Link></li>
            <li><Link href="/conferences" onClick={() => setSidebarOpen(false)}>Conferences</Link></li>
            <li><Link href="/workshops" onClick={() => setSidebarOpen(false)}>Workshops</Link></li>
            <li><Link href="/cmes" onClick={() => setSidebarOpen(false)}>CMEs</Link></li>
          </ul>
        </div>

        {/* Overlay when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </nav>
    </div>
  
  );
}
