// components/Footer.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "School Project", href: "/school-project" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ];

  const courses = [
    { name: "Abacus (8 Levels)", href: "/courses/abacus" },
    { name: "Vedic Maths", href: "/courses/vedic-maths" },
    { name: "Rubik's Cube", href: "/courses/rubiks-cube" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/igeniusabacus" },
    { name: "Instagram", href: "https://instagram.com/igeniusabacus" },
    { name: "YouTube", href: "https://youtube.com/@igeniusabacus" },
    { name: "LinkedIn", href: "https://linkedin.com/company/igeniusabacus" },
  ];

  // SVG Icons for social media - Clean versions
// SVG Icons for social media - All consistent 18x18 size
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.991 5.657 21.128 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.95 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.343 21.128 22 16.991 22 12Z" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163C15.204 2.163 15.584 2.176 16.849 2.233C18.015 2.285 18.648 2.481 19.076 2.648C19.636 2.867 20.054 3.124 20.489 3.559C20.924 3.994 21.181 4.412 21.4 4.972C21.566 5.4 21.763 6.033 21.815 7.199C21.872 8.464 21.885 8.844 21.885 12.048C21.885 15.252 21.872 15.632 21.815 16.897C21.763 18.063 21.566 18.696 21.4 19.124C21.181 19.684 20.924 20.102 20.489 20.537C20.054 20.972 19.636 21.229 19.076 21.448C18.648 21.615 18.015 21.811 16.849 21.863C15.584 21.92 15.204 21.933 12 21.933C8.796 21.933 8.416 21.92 7.151 21.863C5.985 21.811 5.352 21.615 4.924 21.448C4.364 21.229 3.946 20.972 3.511 20.537C3.076 20.102 2.819 19.684 2.6 19.124C2.434 18.696 2.237 18.063 2.185 16.897C2.128 15.632 2.115 15.252 2.115 12.048C2.115 8.844 2.128 8.464 2.185 7.199C2.237 6.033 2.434 5.4 2.6 4.972C2.819 4.412 3.076 3.994 3.511 3.559C3.946 3.124 4.364 2.867 4.924 2.648C5.352 2.481 5.985 2.285 7.151 2.233C8.416 2.176 8.796 2.163 12 2.163ZM12 0C8.742 0 8.332 0.014 7.052 0.072C5.775 0.13 4.904 0.333 4.14 0.63C3.345 0.939 2.668 1.354 2.002 2.021C1.335 2.688 0.92 3.365 0.611 4.16C0.313 4.924 0.111 5.795 0.053 7.072C-0.005 8.352 -0.019 8.762 -0.019 12.02C-0.019 15.278 -0.005 15.688 0.053 16.968C0.111 18.245 0.313 19.116 0.611 19.88C0.92 20.675 1.335 21.352 2.002 22.019C2.668 22.686 3.345 23.101 4.14 23.41C4.904 23.707 5.775 23.91 7.052 23.968C8.332 24.026 8.742 24.04 12 24.04C15.258 24.04 15.668 24.026 16.948 23.968C18.225 23.91 19.096 23.707 19.86 23.41C20.655 23.101 21.332 22.686 21.999 22.019C22.666 21.352 23.081 20.675 23.39 19.88C23.687 19.116 23.89 18.245 23.948 16.968C24.006 15.688 24.02 15.278 24.02 12.02C24.02 8.762 24.006 8.352 23.948 7.072C23.89 5.795 23.687 4.924 23.39 4.16C23.081 3.365 22.666 2.688 21.999 2.021C21.332 1.354 20.655 0.939 19.86 0.63C19.096 0.333 18.225 0.13 16.948 0.072C15.668 0.014 15.258 0 12 0Z" fill="white"/>
    <path d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.789 16 8 14.211 8 12C8 9.789 9.789 8 12 8C14.211 8 16 9.789 16 12C16 14.211 14.211 16 12 16Z" fill="white"/>
    <path d="M18.935 5.60001C18.935 6.163 18.477 6.62 17.915 6.62C17.352 6.62 16.895 6.163 16.895 5.60001C16.895 5.03701 17.352 4.58001 17.915 4.58001C18.477 4.58001 18.935 5.03701 18.935 5.60001Z" fill="white"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186C23.333 5.602 23.009 5.076 22.565 4.665C22.121 4.254 21.575 3.974 20.986 3.857C19.198 3.5 12 3.5 12 3.5C12 3.5 4.802 3.5 3.014 3.857C2.425 3.974 1.879 4.254 1.435 4.665C0.991 5.076 0.667 5.602 0.502 6.186C0.164 7.98 -0.001 9.998 -0.001 12C-0.001 14.002 0.164 16.02 0.502 17.814C0.667 18.398 0.991 18.924 1.435 19.335C1.879 19.746 2.425 20.026 3.014 20.143C4.802 20.5 12 20.5 12 20.5C12 20.5 19.198 20.5 20.986 20.143C21.575 20.026 22.121 19.746 22.565 19.335C23.009 18.924 23.333 18.398 23.498 17.814C23.836 16.02 24.001 14.002 24.001 12C24.001 9.998 23.836 7.98 23.498 6.186ZM9.5 15.5V8.5L16 12L9.5 15.5Z" fill="white"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452H16.894V14.882C16.894 13.391 16.069 12.591 14.894 12.591C13.719 12.591 12.894 13.391 12.894 14.882V20.452H9.341V9.5H12.894V11.063C13.464 10.179 14.494 9.5 15.894 9.5C18.044 9.5 20.447 11.052 20.447 14.882V20.452Z" fill="white"/>
    <path d="M5.337 7.866C4.252 7.866 3.375 6.987 3.375 5.902C3.375 4.817 4.252 3.938 5.337 3.938C6.422 3.938 7.3 4.817 7.3 5.902C7.3 6.987 6.422 7.866 5.337 7.866Z" fill="white"/>
    <path d="M6.543 20.452H3.895V9.5H6.543V20.452Z" fill="white"/>
  </svg>
);

  // Map social names to their SVG components
  const getSocialIcon = (name) => {
    switch(name) {
      case 'Facebook': return <FacebookIcon />;
      case 'Instagram': return <InstagramIcon />;
      case 'YouTube': return <YoutubeIcon />;
      case 'LinkedIn': return <LinkedinIcon />;
      default: return null;
    }
  };

  return (
    <footer
      style={{
        position: "relative",
        background: "#1E1B2C",
        color: "#FFFFFF",
        padding: "4rem 2rem 2rem",
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
          opacity: 0.05,
        }}
      >
        <svg
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "150px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="#FFFFFF" />
        </svg>
        <svg
          style={{
            position: "absolute",
            bottom: "20%",
            left: "3%",
            width: "100px",
            height: "auto",
          }}
          viewBox="0 0 100 100"
        >
          <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="#FFFFFF" strokeWidth="2" />
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
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Company Info - Updated Logo Section */}
<div>
  <Link
    href="/"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
      textDecoration: "none",
    }}
  >
    <div
      style={{
        position: "relative",
        height: "70px",
        width: "auto",
        flexShrink: 0,
      }}
    >
      <Image
        src="/images/igenius-logo.png"
        alt="I-Genius Abacus Academy"
        width={180}
        height={70}
        style={{
          height: "100%",
          width: "auto",
          objectFit: "contain",
        }}
        priority={false}
      />
    </div>
  </Link>
  <p
    style={{
      fontFamily: "var(--font-plus-jakarta), sans-serif",
      fontSize: "0.9rem",
      lineHeight: "1.6",
      color: "#C4C4D4",
      marginBottom: "1.5rem",
    }}
  >
    ISO 9001-2015 Certified | Authorised by EBVTR Govt. of India
    <br />
    <br />
    Established in 2007, pioneering high-quality Abacus Education across India and abroad.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-host-grotesk), sans-serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "1.5rem",
                position: "relative",
                display: "inline-block",
              }}
            >
              Quick Links
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "40px",
                  height: "2px",
                  background: "#FF8C42",
                }}
              />
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: "0.75rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontSize: "0.9rem",
                      color: "#C4C4D4",
                      textDecoration: "none",
                      transition: "color 0.3s ease, transform 0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FF8C42";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#C4C4D4";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-host-grotesk), sans-serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "1.5rem",
                position: "relative",
                display: "inline-block",
              }}
            >
              Our Courses
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "40px",
                  height: "2px",
                  background: "#FF8C42",
                }}
              />
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {courses.map((course) => (
                <li key={course.name} style={{ marginBottom: "0.75rem" }}>
                  <Link
                    href={course.href}
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontSize: "0.9rem",
                      color: "#C4C4D4",
                      textDecoration: "none",
                      transition: "color 0.3s ease, transform 0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FF8C42";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#C4C4D4";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-host-grotesk), sans-serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "1.5rem",
                position: "relative",
                display: "inline-block",
              }}
            >
              Stay Updated
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "40px",
                  height: "2px",
                  background: "#FF8C42",
                }}
              />
            </h3>
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "0.9rem",
                color: "#C4C4D4",
                marginBottom: "1rem",
              }}
            >
              Subscribe to get updates about new courses and events.
            </p>
            <form onSubmit={handleSubscribe} style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    minWidth: "180px",
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.9rem",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "100px",
                    color: "#FFFFFF",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.75rem 1.5rem",
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    background: "#FF8C42",
                    border: "none",
                    borderRadius: "100px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
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
                  Subscribe 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </form>
            {subscribed && (
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "0.85rem",
                  color: "#4ECDC4",
                  marginTop: "0.5rem",
                }}
              >
                ✓ Thank you for subscribing!
              </p>
            )}

            {/* Contact Info */}
            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "2px", flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FF8C42"/>
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.85rem",
                    color: "#C4C4D4",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner, Sharanpur Road, Nashik
                </p>
              </div>
              
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#FF8C42"/>
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.85rem",
                    color: "#C4C4D4",
                    margin: 0,
                  }}
                >
                  +91 7770045402
                </p>
              </div>
              
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#FF8C42"/>
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "0.85rem",
                    color: "#C4C4D4",
                    margin: 0,
                  }}
                >
                  info.igeniusnsk@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links with SVG Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FF8C42";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getSocialIcon(social.name)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.8rem",
              color: "#8888A0",
            }}
          >
            © {new Date().getFullYear()} I-Genius Abacus Academy India Pvt Ltd. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "0.7rem",
              color: "#8888A0",
              marginTop: "0.5rem",
            }}
          >
            ISO 9001-2015 Certified | Authorised by EBVTR Govt. of India
          </p>
        </div>
      </div>
    </footer>
  );
}