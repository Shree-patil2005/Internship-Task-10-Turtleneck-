'use client';
import { useState } from 'react';
import { account } from '../lib/appwrite';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Appwrite SDK Version:', require('appwrite/package.json').version);
      await account.createEmailSession(email, password);
      alert('Login successful!');
      router.push('/dashboard'); 
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://thumbs.dreamstime.com/z/open-book-abstract-green-background-stylized-image-globe-background-open-book-abstract-green-background-243784566.jpg")',
      }}
    >
      
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-1 flex items-center justify-center h-32 shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold drop-shadow-lg tracking-wide">
            Welcome to Smart Read LMS Portal
          </h1>
          <p className="text-2xl italic mt-2 drop-shadow-md">Read • Learn • Grow</p>
        </div>
      </header>

      
      <div className="flex items-center justify-center mt-10">
        <div
          className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full max-w-md text-center bg-cover bg-center border border-yellow-300"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/c0/97/a4/c097a4a50e1c2bdcfd7c93898983ff95.jpg")',
          }}
        >
          <h2 className="text-[31px] mb-4 text-yellow-300 underline tracking-widest font-bold">
            LOGIN
          </h2>

          <div className="text-left">
            <label className="block text-yellow-300 font-bold text-[23px] mb-1" htmlFor="email">
              Email Address:
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white bg-transparent placeholder-white transition duration-300"
            />

            <label className="block text-yellow-300 font-bold text-[23px] mb-1" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white bg-transparent placeholder-white transition duration-300"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 rounded-md font-semibold shadow-lg transition duration-300"
          >
            Login
          </button>

          <p className="mt-6 text-[25px] text-black-600 drop-shadow-sm">
            Don’t have an account?{' '}
            <a href="/signup" className="text-yellow-300 font-semibold hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
