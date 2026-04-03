// components/home/Testimonials.jsx (Slider Version)
"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    { name: "Mrs. Priya Mehta", role: "Parent of Kavya", quote: "I-Genius transformed my daughter's mathematical abilities. Her confidence has grown tremendously!", rating: 5 },
    { name: "Riya Sharma", role: "Student, National Champion", quote: "I love abacus! Now I can calculate faster than anyone in my class.", rating: 5 },
    { name: "Dr. Suresh Patil", role: "Principal, MVPS School", quote: "The best decision our school made was partnering with I-Genius. Outstanding results!", rating: 5 }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} style={{ padding: "5rem 2rem", background: "#FFF9F0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div className={isVisible ? "fade-up" : ""}>
          <span style={{ fontFamily: "var(--font-plus-jakarta), sans-serif", fontSize: "0.85rem", color: "#FF8C42", letterSpacing: "2px" }}>Testimonials</span>
          <h2 style={{ fontFamily: "var(--font-host-grotesk), sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1E1B2C", marginTop: "0.5rem" }}>What People Say</h2>
        </div>

        <div className={isVisible ? "fade-up-delay-1" : ""} style={{ marginTop: "2rem" }}>
          <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "1rem" }}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (<FaStar key={i} color="#FFE66D" />))}
            </div>
            <FaQuoteLeft size={30} color="#FF8C42" style={{ opacity: 0.3, marginBottom: "1rem" }} />
            <p style={{ fontFamily: "var(--font-plus-jakarta), sans-serif", fontSize: "1rem", color: "#4A4A6A", lineHeight: 1.6, marginBottom: "1.5rem" }}>"{testimonials[currentIndex].quote}"</p>
            <div><strong style={{ fontFamily: "var(--font-host-grotesk), sans-serif", color: "#1E1B2C" }}>{testimonials[currentIndex].name}</strong><br /><span style={{ fontSize: "0.8rem", color: "#FF8C42" }}>{testimonials[currentIndex].role}</span></div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
            <button onClick={prev} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(74,74,106,0.2)", background: "#FFFFFF", cursor: "pointer" }}><FaArrowLeft size={14} /></button>
            <button onClick={next} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(74,74,106,0.2)", background: "#FFFFFF", cursor: "pointer" }}><FaArrowRight size={14} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}