// components/home/CoursesOffered.jsx (Boxless, Cardless with Images)
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function CoursesSection() {
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

  const courses = [
    {
      id: 1,
      title: "Abacus Mental Arithmetic",
      subtitle: "8 Levels | Age 4-14 Years",
      description: "The Total Course completed in 8 Levels, developed in three parts: Basic, Advance & Master Course. Promotes Whole Brain development by stimulating both sides of the brain.",
      benefits: [
        "Whole Brain Development",
        "Improves Concentration & Memory",
        "Enhances Calculation Speed",
        "Builds Confidence"
      ],
      image: "/images/274799.png",
      imageAlt: "Kids learning abacus at I-Genius Academy",
      imagePosition: "right",
      color: "#FF8C42",
      link: "/courses/abacus"
    },
    {
      id: 2,
      title: "Vedic Mathematics",
      subtitle: "1 Month | Age 1st Std & Above",
      description: "Vedic Mathematics consists of 16 sutras and 13 sub-sutras covering addition, subtraction, multiplication, division, square roots, cube roots, and more with simplicity and efficiency.",
      benefits: [
        "10x Faster Calculations",
        "Improves Mental Math Skills",
        "Useful for Competitive Exams",
        "Builds Speed & Accuracy"
      ],
      image: "/images/792345.png",
      imageAlt: "Students learning Vedic Maths techniques",
      imagePosition: "left",
      color: "#4ECDC4",
      link: "/courses/vedic-maths"
    },
    {
      id: 3,
      title: "Rubik's Cube",
      subtitle: "1 Month | Age 1st Std & Above",
      description: "The Rubik's Cube is a 3-D combination puzzle that enhances problem-solving skills, logical thinking, patience, and perseverance while reducing screen time.",
      benefits: [
        "Enhances Problem Solving",
        "Increases Logical Thinking",
        "Boosts Patience & Perseverance",
        "Improves Hand-Eye Coordination"
      ],
      image: "/images/881984.png",
      imageAlt: "Children solving Rubik's Cube at I-Genius",
      imagePosition: "right",
      color: "#9B59B6",
      link: "/courses/rubiks-cube"
    }
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
      {/* Background SVG Doodles - Visible */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.35,
        }}
      >
        {/* Doodle 1: Floating Abacus Beads - Top Right */}
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            top: "5%",
            right: "3%",
            width: "120px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <rect x="20" y="30" width="60" height="40" rx="3" fill="none" stroke="#FF8C42" strokeWidth="2"/>
          <line x1="50" y1="30" x2="50" y2="70" stroke="#FF8C42" strokeWidth="1.5"/>
          <circle cx="35" cy="40" r="5" fill="#FF8C42" opacity="0.7"/>
          <circle cx="50" cy="40" r="5" fill="#FF8C42" opacity="0.7"/>
          <circle cx="65" cy="40" r="5" fill="#FF8C42" opacity="0.7"/>
          <circle cx="35" cy="55" r="5" fill="#FF8C42" opacity="0.7"/>
          <circle cx="50" cy="55" r="5" fill="#FF8C42" opacity="0.7"/>
          <circle cx="65" cy="55" r="5" fill="#FF8C42" opacity="0.7"/>
        </svg>

        {/* Doodle 2: Math Symbols Pattern - Bottom Left */}
        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            bottom: "8%",
            left: "2%",
            width: "100px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <text x="5" y="25" fontSize="28" fill="#4ECDC4" opacity="0.6">+</text>
          <text x="35" y="50" fontSize="22" fill="#4ECDC4" opacity="0.6">−</text>
          <text x="60" y="30" fontSize="26" fill="#4ECDC4" opacity="0.6">×</text>
          <text x="70" y="65" fontSize="20" fill="#4ECDC4" opacity="0.6">÷</text>
          <text x="20" y="80" fontSize="18" fill="#4ECDC4" opacity="0.6">=</text>
        </svg>

        {/* Doodle 3: Cube Net - Middle Right */}
        <svg
          className="doodle-float-reverse"
          style={{
            position: "absolute",
            top: "35%",
            right: "5%",
            width: "90px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <rect x="15" y="15" width="20" height="20" fill="none" stroke="#9B59B6" strokeWidth="2" rx="2"/>
          <rect x="35" y="15" width="20" height="20" fill="none" stroke="#9B59B6" strokeWidth="2" rx="2"/>
          <rect x="55" y="15" width="20" height="20" fill="none" stroke="#9B59B6" strokeWidth="2" rx="2"/>
          <rect x="35" y="35" width="20" height="20" fill="none" stroke="#9B59B6" strokeWidth="2" rx="2"/>
          <rect x="35" y="55" width="20" height="20" fill="none" stroke="#9B59B6" strokeWidth="2" rx="2"/>
          <rect x="15" y="35" width="20" height="20" fill="none" stroke="#9B59B6" strokeWidth="2" rx="2"/>
        </svg>

        {/* Doodle 4: Sparkle Stars - Top Left */}
        <svg
          className="doodle-pulse"
          style={{
            position: "absolute",
            top: "12%",
            left: "4%",
            width: "70px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M50,10 L53,35 L78,38 L53,41 L50,66 L47,41 L22,38 L47,35 Z" fill="#FFE66D" opacity="0.8"/>
          <path d="M25,20 L27,35 L42,37 L27,39 L25,54 L23,39 L8,37 L23,35 Z" fill="#FFE66D" opacity="0.6"/>
        </svg>

        {/* Doodle 5: Brain Wave - Bottom Right */}
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            bottom: "12%",
            right: "6%",
            width: "100px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M20,50 Q30,35 40,50 T60,50 T80,50" fill="none" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25,60 Q35,45 45,60 T65,60 T85,60" fill="none" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="30" cy="50" r="3" fill="#FF8C42" opacity="0.6"/>
          <circle cx="50" cy="50" r="3" fill="#FF8C42" opacity="0.6"/>
          <circle cx="70" cy="50" r="3" fill="#FF8C42" opacity="0.6"/>
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
        {/* Header */}
        <div
          className={isVisible ? "fade-up" : ""}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
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
            }}
          >
            Our Programs
          </span>
          <h2
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#1E1B2C",
              marginTop: "0.5rem",
            }}
          >
            Courses We Offer
          </h2>
        </div>

        {/* Media Strips - No Boxes, Just Content */}
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={isVisible ? `fade-up-delay-${index + 1}` : ""}
            style={{
              display: "flex",
              flexDirection: course.imagePosition === "right" ? "row" : "row-reverse",
              alignItems: "center",
              gap: "4rem",
              padding: "4rem 0",
              borderBottom: index !== courses.length - 1 ? "1px solid rgba(74,74,106,0.15)" : "none",
              flexWrap: "wrap",
            }}
          >
            {/* Image Column - Clean, No Card */}
            <div
              style={{
                flex: "1",
                minWidth: "280px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Column - No Card, No Background */}
            <div
              style={{
                flex: "1",
                minWidth: "280px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#1E1B2C",
                  marginBottom: "0.5rem",
                }}
              >
                {course.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.9rem",
                  color: course.color,
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                {course.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "1rem",
                  color: "#4A4A6A",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                {course.description}
              </p>

              {/* Benefits - Simple List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {course.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FaCheckCircle size={14} color={course.color} />
                    <span
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.85rem",
                        color: "#4A4A6A",
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA - Simple Underline Link */}
              <Link
                href={course.link}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: course.color,
                  textDecoration: "none",
                  borderBottom: `2px solid ${course.color}`,
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
                Learn More
                <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}