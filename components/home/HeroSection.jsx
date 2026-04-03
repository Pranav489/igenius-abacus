// components/home/HeroSection.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [youtubeApiReady, setYoutubeApiReady] = useState(false);
  const videoRefs = useRef({});
  const youtubePlayers = useRef({});
  const slideInterval = useRef(null);
  const isInitialized = useRef(false);
  const slideContainerRef = useRef(null);
  const isTransitioning = useRef(false);

  const slides = [
    {
      id: 1,
      type: "video",
      videoSource: "youtube",
      youtubeId: "XrAlH7mRDbs",
      poster: "/images/143040.jpg",
      headline: "Welcome to I-Genius Abacus Academy",
      subheadline: "ISO 9001-2015 Certified | Authorised by EBVTR Govt. of India",
      ctaPrimary: { text: "Explore Courses", link: "/courses" },
      ctaSecondary: { text: "Enroll Now →", link: "/contact" },
    },
    {
      id: 2,
      type: "image",
      src: "/images/35306.jpg",
      headline: "Whole Brain Development for Ages 4-14",
      subheadline: "Stimulate both sides of the brain with our proven Abacus methodology",
      ctaPrimary: { text: "View Courses", link: "/courses" },
      ctaSecondary: { text: "Book Free Demo →", link: "/contact" },
    },
    {
      id: 3,
      type: "video",
      videoSource: "youtube",
      youtubeId: "bnIGi72dg4A",
      poster: "/images/cartoon-student-math-class.jpg",
      headline: "1.5 Lakh+ Students Trained Since 2007",
      subheadline: "Watch our students perform amazing mental math calculations",
      ctaPrimary: { text: "Find a Center", link: "/franchise" },
      ctaSecondary: { text: "Online Classes →", link: "/courses" },
    },
    {
      id: 4,
      type: "video",
      videoSource: "youtube",
      youtubeId: "5moN0k6Krj8",
      poster: "/images/424845387_9086b820-9f6f-4a80-b579-28fc9bd49a77.jpg",
      headline: "Watch Our Students in Action",
      subheadline: "Mental math calculations that will amaze you",
      ctaPrimary: { text: "View Courses", link: "/courses" },
      ctaSecondary: { text: "Book Free Demo →", link: "/contact" },
    },
    {
      id: 5,
      type: "image",
      src: "/images/2589676_15595.jpg",
      headline: "Become a Franchise Partner",
      subheadline: "Earn ₹25,000 - ₹30,000+ per month with our proven business model",
      ctaPrimary: { text: "Apply Now", link: "/franchise" },
      ctaSecondary: { text: "Learn More →", link: "/franchise" },
    },
  ];

  // Load YouTube API only once
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = () => {
        setYoutubeApiReady(true);
      };
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      setYoutubeApiReady(true);
    }
  }, []);

  // Initialize YouTube player for current slide
  useEffect(() => {
    if (!youtubeApiReady) return;
    
    const currentSlideData = slides[currentSlide];
    if (currentSlideData?.type === "video" && currentSlideData?.videoSource === "youtube") {
      const slideId = currentSlideData.id;
      const playerContainer = document.getElementById(`youtube-player-${slideId}`);
      
      // Only create player if container exists and player doesn't exist
      if (playerContainer && !youtubePlayers.current[slideId]) {
        try {
          youtubePlayers.current[slideId] = new window.YT.Player(`youtube-player-${slideId}`, {
            videoId: currentSlideData.youtubeId,
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              mute: 1,
            },
            events: {
              onReady: (event) => {
                event.target.playVideo();
              },
              onError: (error) => {
                console.error("YouTube player error:", error);
              },
            },
          });
        } catch (error) {
          console.error("Error creating YouTube player:", error);
        }
      } else if (youtubePlayers.current[slideId]) {
        // Player exists, just play it
        try {
          youtubePlayers.current[slideId].playVideo();
        } catch (error) {
          console.error("Error playing YouTube video:", error);
        }
      }
    }
  }, [currentSlide, youtubeApiReady, slides]);

  // Handle local video
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    
    if (currentSlideData?.type === "video" && currentSlideData?.videoSource === "local") {
      const currentVideo = videoRefs.current[currentSlide];
      if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(e => console.log("Video play error:", e));
      }
    }
  }, [currentSlide, slides]);

  // Auto-rotate slides
  useEffect(() => {
    if (isAutoSliding && !isTransitioning.current) {
      slideInterval.current = setInterval(() => {
        if (!isTransitioning.current) {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }
      }, 10000);
    } else {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    }
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isAutoSliding, slides.length]);

  // Pause videos when leaving slide (don't destroy them)
  useEffect(() => {
    // Pause local videos for other slides
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video && parseInt(key) !== currentSlide) {
        video.pause();
      }
    });
    
    // Pause YouTube players for other slides (don't destroy)
    slides.forEach((slide) => {
      if (slide.type === "video" && slide.videoSource === "youtube" && slide.id !== slides[currentSlide]?.id) {
        const player = youtubePlayers.current[slide.id];
        if (player && typeof player.pauseVideo === 'function') {
          try {
            player.pauseVideo();
          } catch (error) {
            console.error("Error pausing YouTube video:", error);
          }
        }
      }
    });
  }, [currentSlide, slides]);

  // Clean up on unmount - safely destroy players
  useEffect(() => {
    return () => {
      // Clear all intervals first
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
      
      // Safely destroy YouTube players
      Object.keys(youtubePlayers.current).forEach((key) => {
        const player = youtubePlayers.current[key];
        if (player && typeof player.destroy === 'function') {
          try {
            // Don't actually destroy, just stop the video
            player.stopVideo();
          } catch (error) {
            console.error("Error stopping YouTube video:", error);
          }
        }
      });
    };
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  }, [slides.length]);

  const toggleAutoSlide = useCallback(() => {
    setIsAutoSliding((prev) => !prev);
  }, []);

  const goToSlide = useCallback((index) => {
    if (isTransitioning.current || index === currentSlide) return;
    isTransitioning.current = true;
    setCurrentSlide(index);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  const renderBackgroundMedia = () => {
    if (currentSlideData.type === "image") {
      return (
        <>
          <Image
            src={currentSlideData.src}
            alt={currentSlideData.headline}
            fill
            priority={currentSlide === 0}
            style={{
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        </>
      );
    }

    if (currentSlideData.type === "video") {
      if (currentSlideData.videoSource === "local") {
        return (
          <>
            <video
              ref={(el) => {
                if (el) {
                  videoRefs.current[currentSlide] = el;
                }
              }}
              src={currentSlideData.src}
              poster={currentSlideData.poster}
              autoPlay={true}
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
              }}
            />
          </>
        );
      } else if (currentSlideData.videoSource === "youtube") {
        return (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <div
                id={`youtube-player-${currentSlideData.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)",
                zIndex: 1,
              }}
            />
          </>
        );
      }
    }
    return null;
  };

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        maxHeight: "900px",
        overflow: "hidden",
        marginTop: "0",
        padding: "0",
      }}
      className="hero-slider"
      ref={slideContainerRef}
    >
      {/* Background Media */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        {renderBackgroundMedia()}
      </div>

      {/* Background SVG Doodles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.15,
        }}
        className="doodles-container"
      >
        <svg
          className="doodle-float"
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "120px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <rect x="20" y="30" width="60" height="40" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
          <circle cx="35" cy="40" r="5" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="50" cy="40" r="5" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="65" cy="40" r="5" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="35" cy="55" r="5" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="50" cy="55" r="5" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="65" cy="55" r="5" fill="#FFFFFF" opacity="0.7"/>
        </svg>

        <svg
          className="doodle-float-slow"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "3%",
            width: "80px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M50,10 L55,40 L85,45 L55,50 L50,80 L45,50 L15,45 L45,40 Z" fill="#FFE66D" />
        </svg>

        <svg
          className="doodle-float-reverse"
          style={{
            position: "absolute",
            top: "40%",
            left: "8%",
            width: "60px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <text x="10" y="30" fontSize="30" fill="#FFFFFF" opacity="0.8">+</text>
          <text x="40" y="60" fontSize="25" fill="#FFFFFF" opacity="0.8">−</text>
          <text x="65" y="35" fontSize="28" fill="#FFFFFF" opacity="0.8">×</text>
        </svg>
      </div>

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFFFFF",
          padding: "100px 2rem 100px 2rem",
        }}
        className="content-container"
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {/* Animated Badge */}
          <div
            className="fade-up"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "2px",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                padding: "0.5rem 1rem",
                borderRadius: "100px",
                display: "inline-block",
              }}
              className="badge-text"
            >
              EST. 2007 | ISO 9001-2015 CERTIFIED
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up-delay-1"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              marginBottom: "1.5rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.2)",
            }}
          >
            {currentSlideData.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="fade-up-delay-2"
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              marginBottom: "2rem",
              opacity: 0.95,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {currentSlideData.subheadline}
          </p>

          {/* CTA Buttons */}
          <div
            className="fade-up-delay-3"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href={currentSlideData.ctaPrimary.link}
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#1E1B2C",
                background: "#FFFFFF",
                padding: "0.8rem 2rem",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              className="cta-primary"
            >
              {currentSlideData.ctaPrimary.text}
            </Link>
            <Link
              href={currentSlideData.ctaSecondary.link}
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "transparent",
                padding: "0.8rem 2rem",
                borderRadius: "100px",
                textDecoration: "none",
                border: "2px solid #FFFFFF",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.color = "#1E1B2C";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              className="cta-secondary"
            >
              {currentSlideData.ctaSecondary.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          color: "#FFFFFF",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.4)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
        className="nav-arrow"
        aria-label="Previous slide"
      >
        <MdChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          color: "#FFFFFF",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.4)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
        className="nav-arrow"
        aria-label="Next slide"
      >
        <MdChevronRight size={28} />
      </button>

      {/* Auto-Slide Toggle Button */}
      <button
        onClick={toggleAutoSlide}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          zIndex: 3,
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          color: "#FFFFFF",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        }}
        className="auto-slide-toggle"
        aria-label={isAutoSliding ? "Pause auto-slide" : "Resume auto-slide"}
      >
        {isAutoSliding ? <IoPauseCircle size={28} /> : <IoPlayCircle size={28} />}
      </button>

      {/* Slide Indicators / Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: "0.75rem",
          padding: "0.5rem 1rem",
          borderRadius: "50px",
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",
        }}
        className="slide-dots"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? "30px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: currentSlide === index ? "#FF8C42" : "rgba(255,255,255,0.6)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = "rgba(255,255,255,0.9)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = "rgba(255,255,255,0.6)";
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-slider {
            height: 60vh !important;
            min-height: 500px !important;
            max-height: 600px !important;
          }
          
          .doodles-container {
            display: none;
          }
          
          .content-container {
            padding: 70px 0.75rem 70px 0.75rem !important;
          }
          
          .badge-text {
            font-size: 0.55rem !important;
            padding: 0.25rem 0.6rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .nav-arrow {
            display: none !important;
          }
          
          .auto-slide-toggle {
            bottom: 0.75rem !important;
            right: 0.75rem !important;
            width: 32px !important;
            height: 32px !important;
          }
          
          .auto-slide-toggle svg {
            width: 18px !important;
            height: 18px !important;
          }
          
          .slide-dots {
            bottom: 0.75rem !important;
            gap: 0.4rem !important;
            padding: 0.25rem 0.6rem !important;
          }
          
          .slide-dots button {
            width: 5px !important;
            height: 5px !important;
          }
          
          .slide-dots button[style*="width: 30px"] {
            width: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}