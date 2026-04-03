// components/home/StatsCounter.jsx (Light Version)
"use client";

import { useEffect, useRef, useState } from "react";
import { FaUsers, FaSchool, FaGlobe, FaChalkboardTeacher } from "react-icons/fa";
import { MdBusiness, MdEmojiEvents } from "react-icons/md";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    franchisees: 0,
    schools: 0,
    trainers: 0,
    countries: 0,
    awards: 0,
  });
  
  const sectionRef = useRef(null);
  const animationStarted = useRef(false);

  const stats = [
    {
      id: "students",
      icon: <FaUsers size={32} />,
      targetValue: 150000,
      suffix: "+",
      label: "Students Trained",
      description: "Since 2007",
      color: "#FF8C42",
    },
    {
      id: "franchisees",
      icon: <MdBusiness size={32} />,
      targetValue: 550,
      suffix: "+",
      label: "Authorized Franchisees",
      description: "Across India & Abroad",
      color: "#4ECDC4",
    },
    {
      id: "schools",
      icon: <FaSchool size={32} />,
      targetValue: 165,
      suffix: "+",
      label: "School Project Associations",
      description: "North Maharashtra",
      color: "#9B59B6",
    },
    {
      id: "trainers",
      icon: <FaChalkboardTeacher size={32} />,
      targetValue: 50,
      suffix: "+",
      label: "Qualified Trainers",
      description: "Highly Motivated Team",
      color: "#FF6B6B",
    },
    {
      id: "countries",
      icon: <FaGlobe size={32} />,
      targetValue: 5,
      suffix: "",
      label: "Countries Presence",
      description: "Global Reach",
      color: "#2ECC71",
    },
    {
      id: "awards",
      icon: <MdEmojiEvents size={32} />,
      targetValue: 10,
      suffix: "+",
      label: "Awards & Recognitions",
      description: "National & International",
      color: "#FFE66D",
    },
  ];

  const formatNumber = (num) => {
    if (num >= 100000) {
      return (num / 100000).toFixed(1) + "L";
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    if (isVisible && !animationStarted.current) {
      animationStarted.current = true;
      
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      
      const startValues = {
        students: 0,
        franchisees: 0,
        schools: 0,
        trainers: 0,
        countries: 0,
        awards: 0,
      };
      
      const targetValues = {
        students: 150000,
        franchisees: 550,
        schools: 165,
        trainers: 50,
        countries: 5,
        awards: 10,
      };
      
      const increments = {};
      Object.keys(targetValues).forEach(key => {
        increments[key] = targetValues[key] / steps;
      });
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        
        if (currentStep >= steps) {
          setCounts(targetValues);
          clearInterval(interval);
        } else {
          const newCounts = {};
          Object.keys(targetValues).forEach(key => {
            newCounts[key] = Math.min(
              Math.floor(startValues[key] + increments[key] * currentStep),
              targetValues[key]
            );
          });
          setCounts(newCounts);
        }
      }, stepTime);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
        background: "linear-gradient(135deg, #FFF9F0 0%, #F3F0FF 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Doodles */}
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
          <path d="M50,10 L55,40 L85,45 L55,50 L50,80 L45,50 L15,45 L45,40 Z" fill="#FFE66D" />
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
            Our Impact in Numbers
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
            Transforming Education Since 2007
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
            Our growing numbers reflect the trust and success we've built over the years
          </p>
        </div>

        <div
          className={isVisible ? "fade-up-delay-1" : ""}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              style={{
                textAlign: "center",
                padding: "2rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "70px",
                  height: "70px",
                  background: `rgba(${parseInt(stat.color.slice(1,3), 16)}, ${parseInt(stat.color.slice(3,5), 16)}, ${parseInt(stat.color.slice(5,7), 16)}, 0.1)`,
                  borderRadius: "50%",
                  marginBottom: "1.5rem",
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), monospace",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: stat.color,
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                {formatNumber(counts[stat.id])}{stat.suffix}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-host-grotesk), sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1E1B2C",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.label}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.85rem",
                  color: "#4A4A6A",
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}