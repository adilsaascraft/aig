'use client';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DashboardNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="text-white bg-gradient-to-r from-[#0A0E80] via-[#0E3C96] to-[#75a8f2] shadow-md">
      <div className="max-w-full flex items-center justify-between h-16 px-[30px]">
        {/* Left Section: Logo + Links */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="AIG Hospitals Logo"
            width={100}
            height={50}
          />
          <nav className="hidden md:flex space-x-6 ml-[150px]">
            <a
              href="#"
              className="font-medium relative pb-1 after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-white"
            >
              Home
            </a>
            <a href="#" className="font-medium">
              Settings
            </a>
          </nav>
        </div>

        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Help">
            <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585607/AIG_Event_Software/icons/help_wf3sqb.png" alt="Help" width={20} height={20} />
          </button>
          <button aria-label="Anouncement">
            <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585097/AIG_Event_Software/icons/anouncement_tycrgw.png" alt="Anouncement" width={25} height={25} />
          </button>
          <Image
            src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585099/AIG_Event_Software/icons/profile_zog8po.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-[30px] py-4">
          <nav className="space-y-2">
            <a href="#" className="block font-medium text-white">Home</a>
            <a href="#" className="block font-medium text-white">Settings</a>
            <div className="flex space-x-4 pt-4 border-t border-blue-600 mt-4">
              <button aria-label="Help">
                <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750239338/AIG_Event_Software/icons/help_icon.png" alt="Help" width={20} height={20} />
              </button>
              <button aria-label="Notifications">
                <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750239422/AIG_Event_Software/icons/announcement_icon.png" alt="Megaphone" width={20} height={20} />
              </button>
              <Image
                src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750239421/AIG_Event_Software/icons/profile_icon.png"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
