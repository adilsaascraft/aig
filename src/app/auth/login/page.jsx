'use client';
import '../../globals.css';
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha';

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (!recaptchaToken) {
      setError('Please verify reCAPTCHA.')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        router.push('/dashboard')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#AFBDD1]  to-[#FFFFFF] shadow-lg flex items-center justify-center">
      <div className="bg-gradient-to-r from-[#FFFFFF]  to-[#FFFFFF] mt-[50px] backdrop-blur-[35px] shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={setRecaptchaToken}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-sky-800 text-white p-2 rounded hover:bg-sky-900"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="text-sm mt-3 text-blue-600 cursor-pointer">
            Forgot Password?
          </div>
          <p className="text-sm mt-4">
            Don’t have an account?{' '}
            <a href="/auth/register" className="text-blue-700 underline">
              Sign up now
            </a>
          </p>
        </div>

        {/* Image Section (Hidden on Mobile) */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750328348/AIG_Event_Software/login-signup/login.png"
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
  )
}
