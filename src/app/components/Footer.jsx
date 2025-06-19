import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Address</h3>
          <p className="text-sm leading-relaxed">
            1-66/AIG/2 to 5, Mindspace Road, Gachibowli,<br />
            Hyderabad, Telangana 500032<br />
            <strong>Ambulance Services:</strong> +91 40 4244 4244<br />
            <strong>Appointments:</strong> +91 40 4244 4222<br /><br />
            <strong>Asian Institute of Gastroenterology Private Limited (AIG Hospitals)</strong><br />
            6/3/661, Somajiguda, Hyderabad, Telangana 500082
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Conferences</a></li>
            <li><a href="#" className="hover:underline">Workshops</a></li>
            <li><a href="#" className="hover:underline">CMEs</a></li>
            <li><a href="#" className="hover:underline">Login/Sign Up</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end">
          <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750330449/AIG_Event_Software/DummyImages/aig-logo_wyynuk.png" alt="AIG Logo" className="h-12 mb-4" />
          <a href="mailto:info@aighospitals.com" className="text-sm font-semibold underline mb-4">
            info@aighospitals.com
          </a>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg mb-6">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>

          {/* Certifications */}
          <div className="flex space-x-3">
            <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750330477/AIG_Event_Software/DummyImages/gold_tbgvxg.png" alt="Gold Seal" className="h-10 w-10" />
            <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750330512/AIG_Event_Software/DummyImages/nabn_holcws.png" alt="NABH" className="h-10 w-10" />
            <img src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750330510/AIG_Event_Software/DummyImages/medical_pi8zwl.png" alt="Medical Logo" className="h-10 w-10" />
          </div>
        </div>
      </div>

      <div className="bg-blue-800 text-center text-sm py-4">
        © Copyright 2025 AIG Hospital. All Rights Reserved.
      </div>
    </footer>
  )
}
