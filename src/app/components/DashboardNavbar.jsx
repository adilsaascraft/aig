'use client';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function DashboardNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logged out');
  };

  return (
    <header className="text-white bg-gradient-to-r from-[#0A0E80] via-[#0E3C96] to-[#75a8f2] shadow-md relative">
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
        <div className="hidden md:flex items-center space-x-4 relative" ref={dropdownRef}>
          <Image
            src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585607/AIG_Event_Software/icons/help_wf3sqb.png"
            alt="Help"
            width={20}
            height={20}
            className="rounded-full"
          />

          <Image
            src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585097/AIG_Event_Software/icons/anouncement_tycrgw.png"
            alt="Anouncement"
            width={25}
            height={25}
            className="rounded-full"
          />

          {/* Profile Picture with Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <Image
                src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585099/AIG_Event_Software/icons/profile_zog8po.png"
                alt="Profile Picture"
                width={32}
                height={32}
                className="rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-0 w-20 bg-gray-300 text-black rounded-lg shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-400 rounded-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
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






























// 'use client';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function DashboardNavbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="text-white bg-gradient-to-r from-[#0A0E80] via-[#0E3C96] to-[#75a8f2] shadow-md">
//       <div className="max-w-full flex items-center justify-between h-16 px-[30px]">
//         {/* Left Section: Logo + Links */}
//         <div className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="AIG Hospitals Logo"
//             width={100}
//             height={50}
//           />
//           <nav className="hidden md:flex space-x-6 ml-[150px]">
//             <a
//               href="#"
//               className="font-medium relative pb-1 after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-white"
//             >
//               Home
//             </a>
//             <a href="#" className="font-medium">
//               Settings
//             </a>
//           </nav>
//         </div>

//         {/* Right Section: Icons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585607/AIG_Event_Software/icons/help_wf3sqb.png"
//            alt="Help" 
//            width={20} 
//            height={20}
//            className='rounded-full'
//             />

        
//           <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585097/AIG_Event_Software/icons/anouncement_tycrgw.png"
//            alt="Anouncement" 
//            width={25} 
//            height={25}
//            className='rounded-full'
//             />
//           {/*Profile Picture */}
//           <Image
//             src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585099/AIG_Event_Software/icons/profile_zog8po.png"
//             alt="Profile Picture"
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-blue-800 px-[30px] py-4">
//           <nav className="space-y-2">
//             <a href="#" className="block font-medium text-white">Home</a>
//             <a href="#" className="block font-medium text-white">Settings</a>
//             <div className="flex space-x-4 pt-4 border-t border-blue-600 mt-4">
//               <button aria-label="Help">
//                 <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750239338/AIG_Event_Software/icons/help_icon.png" alt="Help" width={20} height={20} />
//               </button>
//               <button aria-label="Notifications">
//                 <Image src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750239422/AIG_Event_Software/icons/announcement_icon.png" alt="Megaphone" width={20} height={20} />
//               </button>
//               <Image
//                 src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750239421/AIG_Event_Software/icons/profile_icon.png"
//                 alt="User Avatar"
//                 width={32}
//                 height={32}
//                 className="rounded-full"
//               />
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
