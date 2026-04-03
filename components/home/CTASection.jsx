// components/home/CTABanner.jsx (Boxless, Cardless Version)
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp, FaStar } from "react-icons/fa";

export default function CTASection() {
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

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "5rem 2rem",
        background: "linear-gradient(135deg, #1E1B2C 0%, #2D2A4A 100%)",
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
          opacity: 0.25,
        }}
      >
        {/* Floating Abacus Beads */}
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "120px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <rect x="20" y="30" width="60" height="40" rx="3" fill="none" stroke="#FF8C42" strokeWidth="2"/>
          <circle cx="35" cy="40" r="5" fill="#FF8C42" opacity="0.6"/>
          <circle cx="50" cy="40" r="5" fill="#FF8C42" opacity="0.6"/>
          <circle cx="65" cy="40" r="5" fill="#FF8C42" opacity="0.6"/>
          <circle cx="35" cy="55" r="5" fill="#FF8C42" opacity="0.6"/>
          <circle cx="50" cy="55" r="5" fill="#FF8C42" opacity="0.6"/>
          <circle cx="65" cy="55" r="5" fill="#FF8C42" opacity="0.6"/>
        </svg>

        {/* Sparkle Stars */}
        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            bottom: "15%",
            left: "3%",
            width: "80px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M50,10 L55,40 L85,45 L55,50 L50,80 L45,50 L15,45 L45,40 Z" fill="#FFE66D" opacity="0.7"/>
          <path d="M20,20 L23,35 L38,38 L23,41 L20,56 L17,41 L2,38 L17,35 Z" fill="#FFE66D" opacity="0.5"/>
        </svg>

        {/* Arrow Doodle */}
        <svg
          className="doodle-float-reverse"
          style={{
            position: "absolute",
            top: "40%",
            right: "8%",
            width: "70px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M20,50 L70,50" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="70,45 80,50 70,55" fill="#4ECDC4" opacity="0.6"/>
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
        <div
          className={isVisible ? "fade-up" : ""}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          {/* Left Column - Text Content */}
          <div
            style={{
              flex: "2",
              minWidth: "280px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#FF8C42",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              LIMITED TIME OFFER
            </span>
            <h2
              style={{
                fontFamily: "var(--font-host-grotesk), sans-serif",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Ready to Unlock Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF8C42 0%, #FFE66D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Child's Potential?
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2rem",
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              Join 1.5 Lakh+ students who have transformed their mathematical abilities through our proven abacus training.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#FF8C42",
                  textDecoration: "none",
                  borderBottom: "2px solid #FF8C42",
                  padding: "0.3rem 0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = "1rem";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = "0.5rem";
                }}
              >
                Enroll Now
                <FaArrowRight size={12} />
              </Link>
              <a
                href="https://wa.me/917770045402"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#25D366";
                  e.currentTarget.style.gap = "0.75rem";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.gap = "0.5rem";
                }}
              >
                <FaWhatsapp size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column - Stats - No Boxes */}
          <div
            style={{
              flex: "1",
              minWidth: "250px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk), monospace",
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    color: "#FF8C42",
                    marginBottom: "0.25rem",
                  }}
                >
                  1.5L+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "1px",
                  }}
                >
                  STUDENTS TRAINED
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk), monospace",
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    color: "#4ECDC4",
                    marginBottom: "0.25rem",
                  }}
                >
                  98%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "1px",
                  }}
                >
                  SUCCESS RATE
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk), monospace",
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    color: "#9B59B6",
                    marginBottom: "0.25rem",
                  }}
                >
                  550+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "1px",
                  }}
                >
                  FRANCHISEES
                </div>
              </div>
            </div>

            {/* Rating - No Box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: "0.25rem" }}>
                <FaStar size={14} color="#FFE66D" />
                <FaStar size={14} color="#FFE66D" />
                <FaStar size={14} color="#FFE66D" />
                <FaStar size={14} color="#FFE66D" />
                <FaStar size={14} color="#FFE66D" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Rated 4.9/5 by 5000+ parents
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badge - No Box */}
        <div
          className={isVisible ? "fade-up-delay-1" : ""}
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "1px",
            }}
          >
            ISO 9001-2015 CERTIFIED | AUTHORISED BY EBVTR GOVT. OF INDIA
          </span>
        </div>
      </div>
    </section>
  );
}