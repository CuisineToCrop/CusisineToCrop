"use client";
import { useState, useEffect } from "react";
import Nav from "./nav.jsx";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import localFont from "next/dist/compiled/@next/font/dist/local/index.js";

export default function DashboardLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Nav isMobile={isMobile} />
      <main
        className={`bg-black flex-grow overflow-y-auto p-4 z-0 ${
          isMobile ? "" : "ml-20"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

