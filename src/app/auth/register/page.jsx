'use client';
import '../../globals.css';
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    prefix: '',
    fullName: '',
    affiliation: '',
    email: '',
    mobile: '',
    country: '',
    password: '',
    agree: false,
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!recaptchaToken) {
      setError('Please verify reCAPTCHA.');
      return;
    }
    if (!form.agree) {
      setError('You must agree to the Terms & Conditions.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const token = await userCredential.user.getIdToken();

      Cookies.set('token', token, { expires: 7 });
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#AFBDD1]  to-[#FFFFFF] shadow-lg flex items-center justify-center">
      <div className="bg-gradient-to-r from-[#FFFFFF]  to-[#FFFFFF] mt-[50px] mb-[50px] shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block mb-1">Prefix</label>
            <input name="prefix" value={form.prefix} onChange={handleChange} placeholder="Eg: Dr, Prof, Mr, Ms, etc." className="w-full border border-gray-300 p-2 rounded" required />
            <label className="block mb-1">Full Name (As to appear on badge and certificate)</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter Full Name" className="w-full border border-gray-300 p-2 rounded" required />
            <label className="block mb-1">Affiliation</label>
            <input name="affiliation" value={form.affiliation} onChange={handleChange} placeholder="Enter Affiliation" className="w-full border border-gray-300 p-2 rounded" />
            <label className="block mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter Email Id" className="w-full border border-gray-300 p-2 rounded" required />
            <label className="block mb-1">Mobile</label>
            <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter Mobile Number" className="w-full border border-gray-300 p-2 rounded" />
            <label className="block mb-1">Country</label>
            <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className="w-full border border-gray-300 p-2 rounded" />
            <label className="block mb-1">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className="w-full border border-gray-300 p-2 rounded" required />
            <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={setRecaptchaToken} />
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
              <label>I agree to all <span className="text-blue-600">Terms & Conditions</span></label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-sky-800 text-white p-2 rounded hover:bg-sky-900" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
            <p className="text-sm mt-3">
              Already have an account? <a href="/auth/login" className="text-blue-600">Login now</a>
            </p>
          </form>
        </div>

        {/* Image Section (Hidden on Mobile) */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/register.png"
            alt="AIG Hospital"
            className="object-cover h-full w-full"
            width={500}
            height={500}
            priority
            loading="eager"
            unoptimized
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
