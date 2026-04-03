// components/home/WhyIgenius.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaLaptop, 
  FaTrophy, 
  FaSchool, 
  FaCertificate,
  FaBrain,
  FaHeart,
  FaStar,
  FaGem
} from "react-icons/fa";
import { MdVerified, MdEmojiEvents } from "react-icons/md";

export default function WhyChooseUs() {
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

  const features = [
    {
      id: 1,
      icon: <FaChalkboardTeacher size={28} />,
      title: "Qualified Trainers",
      description: "A strong team of 50+ highly motivated and well-trained teachers. Your kids will learn from math experts.",
      color: "#FF8C42",
      delay: 0,
    },
    {
      id: 2,
      icon: <FaBook size={28} />,
      title: "Research-Based Study Material",
      description: "Well-researched books developed by child age groups and level-wise, plus child-friendly abacus tools and board games.",
      color: "#4ECDC4",
      delay: 1,
    },
    {
      id: 3,
      icon: <FaLaptop size={28} />,
      title: "Online / Offline Classes",
      description: "Conducting online/offline classes for all courses offered by the academy, flexible learning options.",
      color: "#9B59B6",
      delay: 2,
    },
    {
      id: 4,
      icon: <MdEmojiEvents size={28} />,
      title: "National Competitions",
      description: "Organized Abacus District/State National/International level competitions every year to eliminate exam fear.",
      color: "#FFE66D",
      delay: 3,
    },
    {
      id: 5,
      icon: <FaSchool size={28} />,
      title: "School Project Associations",
      description: "Associated with 165+ prestigious schools and institutes, with over 10,000+ students currently enrolled.",
      color: "#FF6B6B",
      delay: 4,
    },
    {
      id: 6,
      icon: <FaCertificate size={28} />,
      title: "Govt. Authorized Institute",
      description: "ISO 9001-2015 Certified & Authorised by EBVTR Govt. of India. Most trusted institute by 1.5 lakh students.",
      color: "#2ECC71",
      delay: 5,
    },
  ];

  const achievements = [
    { label: "Years of Excellence", value: "18+", icon: <FaStar size={20} /> },
    { label: "Students Trained", value: "1.5L+", icon: <FaBrain size={20} /> },
    { label: "Happy Parents", value: "98%", icon: <FaHeart size={20} /> },
    { label: "Success Rate", value: "95%", icon: <FaGem size={20} /> },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "5rem 2rem",
        background: "#FFF9F0",
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
          zIndex: 0,
        }}
      >
        {/* Brain Hemisphere Doodle */}
        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            top: "10%",
            left: "2%",
            width: "120px",
            height: "auto",
            opacity: 0.15,
          }}
          viewBox="0 0 100 100"
        >
          <path d="M30,40 Q20,30 25,20 Q35,15 45,25 Q50,20 55,25 Q65,15 75,20 Q80,30 70,40 Q75,55 65,65 Q55,75 50,70 Q45,75 35,65 Q25,55 30,40 Z" fill="none" stroke="#9B59B6" strokeWidth="2"/>
          <path d="M45,30 Q50,25 55,30 Q50,35 45,30 Z" fill="#9B59B6" opacity="0.5"/>
          <path d="M65,35 Q70,30 75,35 Q70,40 65,35 Z" fill="#9B59B6" opacity="0.5"/>
        </svg>

        {/* Puzzle Pieces Doodle */}
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "3%",
            width: "100px",
            height: "auto",
            opacity: 0.15,
          }}
          viewBox="0 0 100 100"
        >
          <path d="M20,20 L40,20 L40,30 Q45,35 40,40 L40,50 L20,50 Z" fill="none" stroke="#FF8C42" strokeWidth="2"/>
          <path d="M40,20 L60,20 L60,40 L55,40 Q50,45 55,50 L60,50 L60,60 L40,60 Z" fill="none" stroke="#FF8C42" strokeWidth="2"/>
          <path d="M20,50 L40,50 L40,70 L35,70 Q30,65 35,60 L30,60 Q25,55 30,50 L20,50 Z" fill="none" stroke="#FF8C42" strokeWidth="2"/>
        </svg>

        {/* Sparkle Stars */}
        <svg
          className="doodle-float-reverse"
          style={{
            position: "absolute",
            top: "30%",
            right: "8%",
            width: "60px",
            height: "auto",
            opacity: 0.2,
          }}
          viewBox="0 0 100 100"
        >
          <path d="M50,10 L55,40 L85,45 L55,50 L50,80 L45,50 L15,45 L45,40 Z" fill="#FFE66D" />
        </svg>

        {/* Connected Dots Network */}
        <svg
          className="doodle-pulse"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "80px",
            height: "auto",
            opacity: 0.12,
          }}
          viewBox="0 0 100 100"
        >
          <circle cx="20" cy="20" r="4" fill="#4ECDC4" />
          <circle cx="50" cy="30" r="4" fill="#4ECDC4" />
          <circle cx="80" cy="20" r="4" fill="#4ECDC4" />
          <circle cx="30" cy="60" r="4" fill="#4ECDC4" />
          <circle cx="70" cy="60" r="4" fill="#4ECDC4" />
          <line x1="20" y1="20" x2="50" y2="30" stroke="#4ECDC4" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="50" y1="30" x2="80" y2="20" stroke="#4ECDC4" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="20" y1="20" x2="30" y2="60" stroke="#4ECDC4" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="80" y1="20" x2="70" y2="60" stroke="#4ECDC4" strokeWidth="1" strokeDasharray="3,3"/>
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
            Why Choose Us
          </span>
          <h2
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#1E1B2C",
              marginBottom: "1rem",
            }}
          >
            Why I-Genius Abacus?
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
            Recognized as one of the best abacus institutes in Maharashtra, we provide excellence in abacus education
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={isVisible ? "fade-up-delay-1" : ""}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                display: "flex",
                gap: "1.5rem",
                padding: "1.5rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "60px",
                  height: "60px",
                  background: `rgba(${parseInt(feature.color.slice(1,3), 16)}, ${parseInt(feature.color.slice(3,5), 16)}, ${parseInt(feature.color.slice(5,7), 16)}, 0.1)`,
                  borderRadius: "50%",
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-host-grotesk), sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1E1B2C",
                    marginBottom: "0.5rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.9rem",
                    color: "#4A4A6A",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Strip */}
        <div
          className={isVisible ? "fade-up-delay-2" : ""}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            padding: "2rem",
            background: "linear-gradient(135deg, rgba(255,140,66,0.05) 0%, rgba(78,205,196,0.05) 100%)",
            borderRadius: "20px",
          }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                flex: "1 1 auto",
                minWidth: "120px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  background: "rgba(255,140,66,0.1)",
                  borderRadius: "50%",
                  color: "#FF8C42",
                  marginBottom: "0.75rem",
                }}
              >
                {achievement.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), monospace",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#1E1B2C",
                  marginBottom: "0.25rem",
                }}
              >
                {achievement.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.85rem",
                  color: "#4A4A6A",
                }}
              >
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div
          className={isVisible ? "fade-up-delay-3" : ""}
          style={{
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#FF8C42",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              borderBottom: "2px solid #FF8C42",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = "1rem";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = "0.75rem";
            }}
          >
            <MdVerified size={20} />
            Learn more about our journey
            <span style={{ fontSize: "1.2rem" }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}