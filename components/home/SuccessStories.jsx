// components/home/SuccessStories.jsx (Gridless, Boxless, Cardless)
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaPlay, 
  FaStar, 
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
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

  const successStories = [
    {
      id: 1,
      name: "Riya Sharma",
      age: 12,
      grade: "7th Standard",
      achievement: "National Abacus Champion 2024",
      description: "Completed all 8 levels in just 18 months. Calculation speed improved from 60 to 2 seconds per sum.",
      beforeScore: 60,
      afterScore: 2,
      improvement: "96%",
      video: "/videos/riya-performance.mp4",
      testimonial: "Abacus has changed my life. I can now calculate faster than a calculator!",
      rating: 5
    },
    {
      id: 2,
      name: "Aarav Patel",
      age: 10,
      grade: "5th Standard",
      achievement: "State Level Champion",
      description: "Struggled with math anxiety before. Now performs mental calculations with ease and confidence.",
      beforeScore: 45,
      afterScore: 5,
      improvement: "89%",
      video: "/videos/aarav-performance.mp4",
      testimonial: "I used to fear math, but now it's my favorite subject. Thank you I-Genius!",
      rating: 5
    },
    {
      id: 3,
      name: "Ananya Desai",
      age: 9,
      grade: "4th Standard",
      achievement: "International Bronze Medalist",
      description: "Represented India at International Abacus Olympiad. Solves 50 sums in under 2 minutes.",
      beforeScore: 50,
      afterScore: 3,
      improvement: "94%",
      video: "/videos/ananya-performance.mp4",
      testimonial: "The best decision my parents made was enrolling me in I-Genius!",
      rating: 5
    }
  ];

  const parentTestimonials = [
    {
      id: 1,
      name: "Mrs. Mehta",
      childName: "Kavya Mehta",
      quote: "Within 6 months, my daughter's math grades went from C to A+. The improvement in her concentration is remarkable.",
      rating: 5
    },
    {
      id: 2,
      name: "Mr. Sharma",
      childName: "Rahul Sharma",
      quote: "My son's confidence has skyrocketed. He now participates in all school competitions with enthusiasm.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Kulkarni",
      childName: "Sneha Kulkarni",
      quote: "As an educator myself, I can vouch for the quality of I-Genius training. The whole brain development approach truly works.",
      rating: 5
    }
  ];

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

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
      {/* Background SVG Doodles - More Visible */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.35,
        }}
      >
        {/* Sparkle Stars */}
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            top: "8%",
            right: "4%",
            width: "90px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M50,10 L55,40 L85,45 L55,50 L50,80 L45,50 L15,45 L45,40 Z" fill="#FFE66D" opacity="0.7"/>
          <path d="M25,15 L28,30 L43,33 L28,36 L25,51 L22,36 L7,33 L22,30 Z" fill="#FFE66D" opacity="0.5"/>
          <path d="M80,55 L82,68 L95,70 L82,72 L80,85 L78,72 L65,70 L78,68 Z" fill="#FFE66D" opacity="0.5"/>
        </svg>

        {/* Trophy Doodle */}
        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "2%",
            width: "80px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M30,25 L70,25 L75,50 Q50,62 25,50 Z" fill="#FF8C42" fillOpacity="0.15" stroke="#FF8C42" strokeWidth="2.5"/>
          <rect x="45" y="50" width="10" height="25" fill="none" stroke="#FF8C42" strokeWidth="2"/>
          <path d="M38,75 L62,75" stroke="#FF8C42" strokeWidth="2"/>
          <circle cx="50" cy="25" r="18" fill="none" stroke="#FFE66D" strokeWidth="2" strokeDasharray="4,4"/>
          <path d="M50,10 L54,30 L74,34 L54,38 L50,58 L46,38 L26,34 L46,30 Z" fill="#FFE66D" opacity="0.5"/>
        </svg>

        {/* Quote Marks */}
        <svg
          className="doodle-float-reverse"
          style={{
            position: "absolute",
            top: "45%",
            right: "3%",
            width: "70px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M25,35 L15,60 L40,60 Z" fill="#4ECDC4" opacity="0.4"/>
          <path d="M75,35 L65,60 L90,60 Z" fill="#4ECDC4" opacity="0.4"/>
        </svg>

        {/* Brain Wave Doodle */}
        <svg
          className="doodle-pulse"
          style={{
            position: "absolute",
            top: "30%",
            left: "3%",
            width: "100px",
            height: "auto",
            opacity: 0.25,
          }}
          viewBox="0 0 100 100"
        >
          <path d="M10,50 Q25,30 40,50 T70,50 T100,50" fill="none" stroke="#9B59B6" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="25" cy="50" r="4" fill="#9B59B6" opacity="0.5"/>
          <circle cx="55" cy="50" r="4" fill="#9B59B6" opacity="0.5"/>
          <circle cx="85" cy="50" r="4" fill="#9B59B6" opacity="0.5"/>
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
            Real Results
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
            Success Stories That Inspire
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
            Watch how our students transformed their mathematical abilities
          </p>
        </div>

        {/* Success Stories - No Cards, Just Content */}
        <div
          className={isVisible ? "fade-up-delay-1" : ""}
          style={{
            marginBottom: "5rem",
          }}
        >
          {successStories.map((story, index) => (
            <div
              key={story.id}
              style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                gap: "4rem",
                padding: "3rem 0",
                borderBottom: index !== successStories.length - 1 ? "1px solid rgba(74,74,106,0.15)" : "none",
                flexWrap: "wrap",
              }}
            >
              {/* Video Column */}
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
                    background: "linear-gradient(135deg, #1E1B2C 0%, #2D2A4A 100%)",
                    borderRadius: "24px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlayVideo(story.id)}
                >
                  {playingVideo === story.id ? (
                    <video
                      src={story.video}
                      controls
                      autoPlay
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0,0,0,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "70px",
                            height: "70px",
                            background: "rgba(255,255,255,0.95)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FF8C42",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <FaPlay size={28} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Content Column - No Boxes */}
              <div
                style={{
                  flex: "1",
                  minWidth: "280px",
                }}
              >
                {/* Rating Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.3rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {[...Array(story.rating)].map((_, i) => (
                    <FaStar key={i} size={16} color="#FFE66D" />
                  ))}
                </div>

                {/* Name and Achievement */}
                <h3
                  style={{
                    fontFamily: "var(--font-host-grotesk), sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
                    fontWeight: 700,
                    color: "#1E1B2C",
                    marginBottom: "0.25rem",
                  }}
                >
                  {story.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.9rem",
                    color: "#FF8C42",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <MdEmojiEvents size={16} />
                  {story.achievement} • {story.grade} • Age {story.age}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "1rem",
                    color: "#4A4A6A",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {story.description}
                </p>

                {/* Improvement Indicator - Simple Line */}
                <div
                  style={{
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.75rem",
                        color: "#4A4A6A",
                      }}
                    >
                      Before: {story.beforeScore}s/sum
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "0.75rem",
                        color: "#4A4A6A",
                      }}
                    >
                      After: {story.afterScore}s/sum
                    </span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      background: "rgba(78,205,196,0.2)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: story.improvement,
                        height: "100%",
                        background: "#4ECDC4",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontSize: "0.7rem",
                      color: "#4ECDC4",
                      marginTop: "0.3rem",
                    }}
                  >
                    {story.improvement} faster calculation
                  </p>
                </div>

                {/* Quote - Simple, No Box */}
                <div
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <FaQuoteLeft size={14} color="#FF8C42" style={{ opacity: 0.5, display: "inline", marginRight: "6px" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontSize: "0.9rem",
                      color: "#4A4A6A",
                      fontStyle: "italic",
                    }}
                  >
                    {story.testimonial}
                  </span>
                  <FaQuoteRight size={14} color="#FF8C42" style={{ opacity: 0.5, display: "inline", marginLeft: "6px", verticalAlign: "top" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Testimonials - No Cards, Just Text */}
        <div
          className={isVisible ? "fade-up-delay-2" : ""}
          style={{
            marginBottom: "4rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
              fontWeight: 600,
              color: "#1E1B2C",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            What Parents Say
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            {parentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{
                  flex: "1",
                  minWidth: "280px",
                  maxWidth: "350px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={14} color="#FFE66D" />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.95rem",
                    color: "#4A4A6A",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-host-grotesk), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#1E1B2C",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontSize: "0.75rem",
                      color: "#FF8C42",
                    }}
                  >
                    Parent of {testimonial.childName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Simple */}
        <div
          className={isVisible ? "fade-up-delay-3" : ""}
          style={{
            marginTop: "3rem",
            textAlign: "center",
            padding: "3rem 0",
            borderTop: "1px solid rgba(74,74,106,0.1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-host-grotesk), sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 600,
              color: "#1E1B2C",
              marginBottom: "0.5rem",
            }}
          >
            Ready to Write Your Success Story?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.9rem",
              color: "#4A4A6A",
              marginBottom: "1.5rem",
            }}
          >
            Join 1.5 Lakh+ students who have transformed their mathematical abilities
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.9rem",
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
            Start Your Journey Today
            <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}