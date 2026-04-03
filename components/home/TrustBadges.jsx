// components/home/TrustBadges.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { FaAward, FaTrophy, FaCertificate } from "react-icons/fa";

export default function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const badges = [
    {
      id: 1,
      type: "certification",
      icon: <MdVerified size={32} color="#FF8C42" />,
      title: "ISO 9001-2015 Certified",
      description: "International Quality Standard",
      link: "/certifications",
    },
    {
      id: 2,
      type: "government",
      icon: <FaCertificate size={28} color="#4ECDC4" />,
      title: "Authorised by EBVTR",
      description: "Govt. of India",
      link: "/certifications",
    },
    {
      id: 3,
      type: "award",
      icon: <FaTrophy size={28} color="#FFE66D" />,
      title: "World Record Holder",
      description: "Wonder Book of International London",
      link: "/certifications",
    },
    {
      id: 4,
      type: "recognition",
      icon: <FaAward size={28} color="#9B59B6" />,
      title: "Best Abacus Institute",
      description: "Maharashtra",
      link: "/certifications",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Maratha Vidhya Prasarak Samaj",
      logo: "/images/partners/mvps-logo.png", // Replace with actual logo
      width: 120,
      height: 60,
    },
    {
      id: 2,
      name: "EBVTR Govt. of India",
      logo: "/images/ebvtr-logo.png", // Replace with actual logo
      width: 100,
      height: 60,
    },
    {
      id: 3,
      name: "ISO",
      logo: "/images/iso-logo.png", // Replace with actual logo
      width: 80,
      height: 60,
    },
    {
      id: 4,
      name: "Wonder Book of Records",
      logo: "/images/wonderbook-logo.png", // Replace with actual logo
      width: 100,
      height: 60,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "3rem 2rem",
        background: "#F9F6F0",
        overflow: "hidden",
      }}
    >
      {/* Background SVG Doodles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      >
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            top: "10%",
            right: "2%",
            width: "60px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M50,10 L55,40 L85,45 L55,50 L50,80 L45,50 L15,45 L45,40 Z" fill="#FFE66D" />
        </svg>
        
        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "3%",
            width: "50px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="30" fill="none" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="4,4"/>
        </svg>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div
          className={isVisible ? "fade-up" : ""}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "#FF8C42",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Trust & Recognition
          </span>
          <h2
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#1E1B2C",
              marginBottom: "1rem",
            }}
          >
            India's Most Trusted Abacus Academy
          </h2>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "1rem",
              color: "#4A4A6A",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Recognized and certified by leading national and international organizations
          </p>
        </div>

        {/* Badges Grid */}
        <div
          className={isVisible ? "fade-up-delay-1" : ""}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {badges.map((badge, index) => (
            <Link
              key={badge.id}
              href={badge.link}
              style={{
                textDecoration: "none",
                display: "block",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    background: "rgba(255,140,66,0.1)",
                    borderRadius: "50%",
                    marginBottom: "1rem",
                  }}
                >
                  {badge.icon}
                </div>
                
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-host-grotesk), sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#1E1B2C",
                    marginBottom: "0.5rem",
                  }}
                >
                  {badge.title}
                </h3>
                
                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.85rem",
                    color: "#4A4A6A",
                    margin: 0,
                  }}
                >
                  {badge.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Partners Strip - Marquee Effect */}
        <div
          className={isVisible ? "fade-up-delay-2" : ""}
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(74,74,106,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
              textAlign: "center",
              color: "#4A4A6A",
              marginBottom: "1.5rem",
              letterSpacing: "1px",
            }}
          >
            PROUDLY ASSOCIATED WITH
          </p>
          
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div
              className="marquee"
              style={{
                display: "flex",
                gap: "3rem",
                animation: "marquee 20s linear infinite",
                width: "fit-content",
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "120px",
                    opacity: 0.6,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.6";
                  }}
                >
                  {partner.logo ? (
                    <div
                      style={{
                        position: "relative",
                        width: `${partner.width}px`,
                        height: `${partner.height}px`,
                      }}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "100px",
                        height: "60px",
                        background: "rgba(74,74,106,0.1)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.75rem",
                        color: "#4A4A6A",
                        textAlign: "center",
                      }}
                    >
                      {partner.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add marquee animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee {
          animation: marquee 25s linear infinite;
        }
        
        .marquee:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
}