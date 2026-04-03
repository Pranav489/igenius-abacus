// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Close mobile menu automatically when resizing to desktop
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "School Project", href: "/school-project" },
    { name: "Franchise", href: "/franchise" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
          transition: "all 0.3s ease",
          background: "#FFF9F0",
          backdropFilter: scrolled ? "blur(0px)" : "none",
        }}
      >
        

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Logo Section */}
          <Link href="/" style={{ display: "block", textDecoration: "none", margin: 0, padding: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                position: "relative",
                margin: 0,
                padding: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  background: "radial-gradient(circle, rgba(255,140,66,0.25) 0%, rgba(255,140,66,0.1) 40%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
              />
              
              <div
                style={{
                  position: "relative",
                  height: "70px",
                  width: "auto",
                  flexShrink: 0,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Image
                  src="/images/igenius-logo.png"
                  alt="I-Genius Abacus Academy Logo"
                  width={180}
                  height={70}
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  priority
                />
              </div>

              {/* <div style={{ margin: 0, padding: 0, lineHeight: 1.2 }}>
                <span
                  style={{
                    fontFamily: "var(--font-host-grotesk), sans-serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #1E1B2C 0%, #FF8C42 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                  }}
                >
                  I-Genius
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.85rem",
                    color: "#4A4A6A",
                    display: "block",
                    lineHeight: 1.2,
                    marginTop: "2px",
                  }}
                >
                  Abacus Academy
                </span>
              </div> */}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="desktop-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#1E1B2C",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF8C42";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#1E1B2C";
                }}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#FF8C42",
                padding: "0.6rem 1.5rem",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E6782E";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FF8C42";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Enroll Now →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 1001,
            }}
            className="mobile-menu-btn"
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                background: "#1E1B2C",
                margin: "5px 0",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                background: "#1E1B2C",
                margin: "5px 0",
                transition: "all 0.3s ease",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                background: "#1E1B2C",
                margin: "5px 0",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
          }
        `}</style>
      </nav>

      {/* Mobile Menu - Only rendered on mobile */}
      {isMobile && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: "400px",
              background: "#FFF9F0",
              transform: isOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s ease",
              padding: "5rem 2rem 2rem 2rem",
              zIndex: 1001,
              boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
              overflowY: "auto",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#1E1B2C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#1E1B2C",
                    textDecoration: "none",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(74,74,106,0.1)",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#FF8C42",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "100px",
                  textDecoration: "none",
                  display: "inline-block",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                Enroll Now →
              </Link>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.5)",
                zIndex: 1000,
              }}
            />
          )}
        </>
      )}
    </>
  );
}