"use client";

import { useState } from "react";
import Link from "next/link";

const ClassModesSection = () => {
  const [activeMode, setActiveMode] = useState("online");

  const modes = {
    online: {
      title: "Online Classes",
      subtitle: "Learn from Anywhere, Anytime",
      description: "Experience the same quality education from the comfort of your home with our interactive online classes. Our virtual classroom platform brings the abacus learning experience directly to your screen.",
      features: [
        {
          title: "Live Interactive Sessions",
          description: "Real-time classes with experienced instructors",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: "Recorded Sessions",
          description: "Access class recordings for revision anytime",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          title: "Digital Study Material",
          description: "E-books, practice sheets, and interactive tools",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
        },
        {
          title: "Virtual Abacus Tool",
          description: "Interactive digital abacus for practice",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: "One-on-One Attention",
          description: "Personalized attention in small batch sizes",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
        },
        {
          title: "Progress Tracking",
          description: "Regular assessments and performance reports",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
      ],
      benefits: [
        "Flexible scheduling across time zones",
        "No travel time or expenses",
        "Learn from expert trainers nationwide",
        "Parent observation available",
        "Recorded sessions for revision",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-[#2F9B8C] to-[#24796D]",
      bgColor: "bg-[#2F9B8C]/5",
    },
    offline: {
      title: "Offline Classes",
      subtitle: "Traditional Classroom Experience",
      description: "Join our physical learning centers for hands-on abacus training. Experience the benefits of in-person interaction, peer learning, and direct mentorship from our expert trainers.",
      features: [
        {
          title: "Physical Abacus Tools",
          description: "Hands-on practice with quality abacus instruments",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: "Peer Learning Environment",
          description: "Learn and grow with fellow students",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
        },
        {
          title: "Dedicated Study Material",
          description: "Physical books, practice sheets, and abacus kit",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
        },
        {
          title: "In-Person Mentorship",
          description: "Direct guidance from experienced trainers",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
        },
        {
          title: "Structured Environment",
          description: "Distraction-free learning atmosphere",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
            </svg>
          ),
        },
        {
          title: "Regular Assessments",
          description: "Weekly tests and competitive exams",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
        },
      ],
      benefits: [
        "550+ centers across India",
        "Physical interaction with peers",
        "Immediate doubt resolution",
        "Access to library resources",
        "Participation in events & competitions",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-[#E6B17E] to-[#D49C6C]",
      bgColor: "bg-[#E6B17E]/5",
    },
  };

  const currentMode = modes[activeMode];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#FEF9F0]">
      {/* Decorative Doodles */}
      <div className="absolute top-20 left-10 w-72 h-72 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-56 h-56 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 doodle-lightbulb opacity-5 animate-pulse-soft pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E6B17E] bg-[#E6B17E]/10 rounded-full">
            Learning Options
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A32] mb-4">
            Choose Your Learning Mode
            <span className="block text-gradient-primary">Flexible. Convenient. Effective.</span>
          </h2>
          <p className="text-[#1E2A32]/70 text-base md:text-lg">
            Whether you prefer the comfort of home or the energy of a classroom, we've got you covered
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
            <button
              onClick={() => setActiveMode("online")}
              className={`px-6 md:px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeMode === "online"
                  ? "bg-[#2F9B8C] text-white shadow-md"
                  : "text-[#1E2A32] hover:text-[#2F9B8C]"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Online Classes
              </span>
            </button>
            <button
              onClick={() => setActiveMode("offline")}
              className={`px-6 md:px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeMode === "offline"
                  ? "bg-[#E6B17E] text-white shadow-md"
                  : "text-[#1E2A32] hover:text-[#E6B17E]"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Offline Classes
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentMode.bgColor} mb-4`}>
              {currentMode.icon}
              <span className={`text-sm font-semibold ${activeMode === "online" ? "text-[#2F9B8C]" : "text-[#E6B17E]"}`}>
                {currentMode.title}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A32] mb-3">
              {currentMode.subtitle}
            </h3>
            
            <p className="text-[#1E2A32]/70 max-w-2xl mx-auto leading-relaxed">
              {currentMode.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentMode.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${currentMode.bgColor} flex items-center justify-center text-${activeMode === "online" ? "[#2F9B8C]" : "[#E6B17E]"} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E2A32] text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[#1E2A32]/60 text-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className={`p-6 rounded-xl ${currentMode.bgColor} mb-8`}>
            <p className="font-semibold text-[#1E2A32] mb-3 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Benefits
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentMode.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-[#1E2A32]/70">
                  <svg className="w-3 h-3 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                activeMode === "online"
                  ? "bg-[#2F9B8C] text-white hover:bg-[#24796D]"
                  : "bg-[#E6B17E] text-white hover:bg-[#D49C6C]"
              }`}
            >
              Enroll for {activeMode === "online" ? "Online" : "Offline"} Classes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#2F9B8C]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#2F9B8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#1E2A32] mb-2">Flexible Schedule</h4>
            <p className="text-[#1E2A32]/60 text-sm">Choose class timings that suit your routine. Morning, afternoon, or evening batches available.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E6B17E]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#1E2A32] mb-2">Expert Trainers</h4>
            <p className="text-[#1E2A32]/60 text-sm">Learn from certified and experienced abacus trainers who are passionate about teaching.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-svg w-full mt-16" />
      </div>
    </section>
  );
};

export default ClassModesSection;