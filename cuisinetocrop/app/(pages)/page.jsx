// app/page.jsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E5F9E0] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#02254D] mb-6">Welcome to CuisineToCrop</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#02254D] mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            CuisineToCrop is a revolutionary platform connecting local farmers with businesses, 
            promoting sustainable agriculture and farm-fresh ingredients. Our mission is to 
            empower farmers and support local economies while providing high-quality produce 
            to restaurants and food businesses.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#02254D] mb-4">Find Local Farms</h2>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search for farms or ingredients" 
              className="flex-grow p-2 border border-[#40C9A2] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#40C9A2]"
            />
            <button className="bg-[#40C9A2] text-white px-4 py-2 rounded-r-lg hover:bg-[#3BB191] transition duration-300">
              Log in
            </button>
          </div>
        </section>
        
        <Link href="/api/auth/login">
            <button className="inline-block bg-[#02254D] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300">
              Log in
            </button>
          </Link>

          <break></break>

        <Link href="/Dashboard" className="inline-block bg-[#02254D] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300">
          Go to Dashboard
        </Link>

        
      </main>
    </div>
  );
}