// components/home/SchoolProject.jsx (Gridless, Boxless, Cardless)
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  FaSchool, 
  FaChalkboardTeacher, 
  FaCalendarAlt, 
  FaUsers, 
  FaArrowRight,
  FaCheckCircle,
  FaHandshake,
  FaClock
} from "react-icons/fa";
import { MdVerified, MdEmojiEvents } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

export default function SchoolProject() {
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

  const benefits = [
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: "No Hassles in Managing",
      description: "I-Genius sends our Abacus teachers to schools during school hours. No need to manage your own teachers.",
      color: "#FF8C42"
    },
    {
      icon: <FaClock size={24} />,
      title: "Flexible Teaching Hours",
      description: "Teaching hours as per the school schedule. Completely flexible and customizable.",
      color: "#4ECDC4"
    },
    {
      icon: <MdVerified size={24} />,
      title: "Govt. Authorized Institute",
      description: "Associates with Govt. authorized & most trusted institutes. ISO 9001-2015 Certified.",
      color: "#9B59B6"
    },
    {
      icon: <GiBookshelf size={24} />,
      title: "Best Educational Modules",
      description: "Best math-based abacus educational modules designed for school curriculum integration.",
      color: "#FFE66D"
    },
    {
      icon: <MdEmojiEvents size={24} />,
      title: "Authorized Competitions",
      description: "Authorized institute for conducting Abacus District, State, National & International competitions.",
      color: "#FF6B6B"
    },
    {
      icon: <FaUsers size={24} />,
      title: "Most Trusted Institute",
      description: "Trusted by 1.5 Lakh+ students & parents across India and abroad.",
      color: "#2ECC71"
    }
  ];

  const stats = [
    { value: "165+", label: "School Project Associations" },
    { value: "10,000+", label: "Current Students Enrolled" },
    { value: "1.5L+", label: "Total Students Trained" },
    { value: "2015", label: "Program Started" }
  ];

  const schoolsList = [
    "Maratha Vidhya Prasarak Samaj's Schools",
    "International English Medium Schools",
    "Private English Medium Schools",
    "Private Marathi Medium Schools",
    "Schools across Nashik District",
    "Schools across Major Cities of Maharashtra"
  ];

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
      {/* Background SVG Doodles - Visible */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.3,
        }}
      >
        {/* School Bus Doodle */}
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            top: "8%",
            right: "3%",
            width: "160px",
            height: "auto",
          }}
          viewBox="0 0 200 150"
        >
          <rect x="20" y="50" width="160" height="50" rx="8" fill="#FFE66D" fillOpacity="0.15" stroke="#FFE66D" strokeWidth="2.5"/>
          <rect x="30" y="30" width="80" height="25" rx="4" fill="#FFE66D" fillOpacity="0.1" stroke="#FFE66D" strokeWidth="2"/>
          <circle cx="55" cy="100" r="15" fill="#FFE66D" fillOpacity="0.1" stroke="#FFE66D" strokeWidth="2"/>
          <circle cx="145" cy="100" r="15" fill="#FFE66D" fillOpacity="0.1" stroke="#FFE66D" strokeWidth="2"/>
          <rect x="130" y="40" width="40" height="15" rx="3" fill="#FFE66D" fillOpacity="0.1" stroke="#FFE66D" strokeWidth="2"/>
          <circle cx="55" cy="100" r="6" fill="#FFE66D" opacity="0.4"/>
          <circle cx="145" cy="100" r="6" fill="#FFE66D" opacity="0.4"/>
        </svg>

        {/* Handshake Doodle */}
        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "2%",
            width: "110px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M25,45 Q30,38 38,45 L48,58 Q55,65 62,58 L72,45 Q80,38 85,45" fill="none" stroke="#4ECDC4" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M30,52 L42,65" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
          <path d="M68,52 L80,65" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="35" cy="50" r="3" fill="#4ECDC4" opacity="0.5"/>
          <circle cx="75" cy="50" r="3" fill="#4ECDC4" opacity="0.5"/>
        </svg>

        {/* Books Doodle */}
        <svg
          className="doodle-float-reverse"
          style={{
            position: "absolute",
            top: "15%",
            left: "2%",
            width: "90px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <rect x="15" y="25" width="25" height="45" rx="3" fill="#FF8C42" fillOpacity="0.15" stroke="#FF8C42" strokeWidth="2.5"/>
          <rect x="32" y="20" width="25" height="50" rx="3" fill="#FF8C42" fillOpacity="0.2" stroke="#FF8C42" strokeWidth="2.5"/>
          <rect x="49" y="30" width="25" height="40" rx="3" fill="#FF8C42" fillOpacity="0.15" stroke="#FF8C42" strokeWidth="2.5"/>
          <line x1="20" y1="35" x2="35" y2="35" stroke="#FF8C42" strokeWidth="1.5" opacity="0.5"/>
          <line x1="20" y1="45" x2="35" y2="45" stroke="#FF8C42" strokeWidth="1.5" opacity="0.5"/>
        </svg>

        {/* Trophy Doodle */}
        <svg
          className="doodle-pulse"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "4%",
            width: "80px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M30,20 L70,20 L75,45 Q50,58 25,45 Z" fill="#FFE66D" fillOpacity="0.15" stroke="#FFE66D" strokeWidth="2.5"/>
          <rect x="45" y="45" width="10" height="25" fill="none" stroke="#FFE66D" strokeWidth="2"/>
          <path d="M38,70 L62,70" stroke="#FFE66D" strokeWidth="2"/>
          <circle cx="50" cy="30" r="12" fill="none" stroke="#FFE66D" strokeWidth="2" strokeDasharray="3,3"/>
          <path d="M50,20 L53,28 L62,30 L55,36 L57,45 L50,40 L43,45 L45,36 L38,30 L47,28 Z" fill="#FFE66D" opacity="0.4"/>
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
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            School Integration Program
          </span>
          <h2
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            Abacus Program for Schools
          </h2>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Implementing the abacus brain development program since 2015 at the school level
          </p>
        </div>

        {/* Stats Row - No Boxes, Just Text */}
        <div
          className={isVisible ? "fade-up-delay-1" : ""}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                minWidth: "150px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), monospace",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "#FF8C42",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout - No Boxes */}
        <div
          className={isVisible ? "fade-up-delay-2" : ""}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4rem",
            marginBottom: "4rem",
          }}
        >
          {/* Left Column - Benefits */}
          <div
            style={{
              flex: "1",
              minWidth: "280px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <FaHandshake size={28} color="#FF8C42" />
              <h3
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Why Choose I-Genius?
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      color: benefit.color,
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-host-grotesk), sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.6)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Schools List */}
          <div
            style={{
              flex: "1",
              minWidth: "280px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <FaSchool size={28} color="#4ECDC4" />
              <h3
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Our School Partners
              </h3>
            </div>

            <p
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Presently our abacus course is running in <span style={{ color: "#FF8C42" }}>165+ Schools</span> of North Maharashtra's renowned educational institute <span style={{ color: "#4ECDC4" }}>"Maratha Vidhya Prasarak Samaj's Nashik"</span>, and other prestigious institutions.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {schoolsList.map((school, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "calc(50% - 0.5rem)",
                    minWidth: "180px",
                  }}
                >
                  <FaCheckCircle size={12} color="#4ECDC4" />
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {school}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial - No Box */}
            <div
              style={{
                marginTop: "1rem",
                paddingLeft: "1rem",
                borderLeft: "2px solid #FF8C42",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.8)",
                  fontStyle: "italic",
                  marginBottom: "0.5rem",
                }}
              >
                "I-Genius has transformed how our students approach mathematics. The results have been outstanding."
              </p>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.75rem",
                  color: "#FF8C42",
                }}
              >
                — Principal, Maratha Vidhya Prasarak Samaj School
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section - No Boxes */}
        <div
          className={isVisible ? "fade-up-delay-3" : ""}
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#FFFFFF",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            How It Works
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 auto 1rem",
                  color: "#FF8C42",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                1
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                }}
              >
                School Tie-up
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                I-Genius ties up with schools
              </p>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 auto 1rem",
                  color: "#4ECDC4",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                2
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                }}
              >
                Teacher Deployment
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Trained teachers sent to schools
              </p>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 auto 1rem",
                  color: "#9B59B6",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                3
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                }}
              >
                During School Hours
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Training during school hours
              </p>
            </div>
            <div style={{ textAlign: "center", minWidth: "150px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 auto 1rem",
                  color: "#2ECC71",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                4
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                }}
              >
                Student Success
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Master mental arithmetic
              </p>
            </div>
          </div>
        </div>

        {/* CTA - No Box */}
        <div
          className={isVisible ? "fade-up-delay-4" : ""}
          style={{
            marginTop: "3rem",
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Link
            href="/school-project"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "1rem",
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
              e.currentTarget.style.gap = "0.75rem";
            }}
          >
            Partner With Us
            <FaArrowRight size={14} />
          </Link>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.4)",
              marginTop: "1rem",
            }}
          >
            Join 165+ schools already benefiting from our program
          </p>
        </div>
      </div>
    </section>
  );
}