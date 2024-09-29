"use client";
import { useState } from "react";
import Nav from "./nav";

export default function Layout({ children, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Nav isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`flex-grow transition-all duration-300 ease-in-out ${
          isOpen ? "ml-60" : "ml-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
