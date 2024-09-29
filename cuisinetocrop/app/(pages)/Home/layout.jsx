// app/layout.jsx
import React from 'react';
import Nav from './nav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#E5F9E0]">
        <Nav />
        {children}
      </body>
    </html>
  );
}

// app/nav.jsx
import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-[#02254D] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">CuisineToCrop</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-[#40C9A2]">Home</Link></li>
          <li><Link href="/dashboard" className="hover:text-[#40C9A2]">Dashboard</Link></li>
          <li><Link href="/account" className="hover:text-[#40C9A2]">Account</Link></li>
        </ul>
      </div>
    </nav>
  );
}