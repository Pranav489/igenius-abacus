"use client";

import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

const AboutSection = () => {
  const highlights = [
    {
      title: "15+ Years of Excellence",
      description: "Pioneering abacus education since 2007 with proven methodologies",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Internationally recognized quality standards in education",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Govt. Authorized Institute",
      description: "Authorised by Educational Board of Vocational Training & Research",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
    {
      title: "World Record Holder",
      description: "Listed in Wonder Book of International London",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "Quality Education",
      description: "Committed to delivering excellence through innovative teaching methods",
    },
    {
      title: "Student-Centric Approach",
      description: "Every child's unique learning journey is our priority",
    },
    {
      title: "Empowerment",
      description: "Building confidence and skills for lifelong success",
    },
    {
      title: "Innovation",
      description: "Continuously evolving our programs to meet modern needs",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative Doodles */}
      <div className="absolute top-20 right-10 w-72 h-72 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 doodle-lightbulb opacity-5 animate-pulse-soft pointer-events-none" />
      
      {/* Background Organic Blob */}
      <div className="absolute inset-0 bg-organic-blob pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E6B17E] bg-[#E6B17E]/10 rounded-full">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A32] mb-4">
            Empowering Young Minds
            <span className="block text-gradient-primary">Since 2007</span>
          </h2>
          <p className="text-[#1E2A32]/70 text-base md:text-lg leading-relaxed">
            I-Genius Abacus Academy has been a pioneer in providing high-quality Abacus Education, 
            transforming over 1.5 lakh students into confident mathematical geniuses.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="image-float relative rounded-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src="/images/231730.jpeg"
                  alt="Students learning abacus at I-Genius Academy"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E6B17E]/20 to-transparent" />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 md:p-5 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E6B17E]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="stat-number-large text-2xl font-bold text-[#1E2A32]">15+</p>
                  <p className="text-xs text-[#1E2A32]/60">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="content-block">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A32] mb-4">
              Unlock the Genius Within
            </h3>
            <p className="text-[#1E2A32]/70 mb-6 leading-relaxed">
              At I-Genius Abacus Academy, we believe every child possesses innate genius waiting to be discovered. 
              Our proven methodology combines traditional abacus training with modern pedagogical techniques to create 
              a holistic brain development program that enhances cognitive abilities, concentration, and confidence.
            </p>
            <p className="text-[#1E2A32]/70 mb-8 leading-relaxed">
              With a network of <span className="font-semibold text-[#E6B17E]">550+ franchisees</span> across India and abroad, 
              and associations with <span className="font-semibold text-[#E6B17E]">165+ prestigious schools</span>, we've created 
              a learning ecosystem that nurtures young minds to excel not just in mathematics, but in all walks of life.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E6B17E]/10 flex items-center justify-center text-[#E6B17E] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E2A32] text-sm md:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#1E2A32]/60 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="px-6 py-3 bg-[#E6B17E] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D49C6C] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border-2 border-[#E6B17E] text-[#E6B17E] font-semibold rounded-full transition-all duration-300 hover:bg-[#E6B17E] hover:text-white hover:-translate-y-0.5 active:translate-y-0"
              >
                Join Free Demo Class
              </Link>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-20">
          {/* Vision Card */}
          <div className="bg-[#FEF9F0] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#E6B17E]/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1E2A32] mb-3">Our Vision</h3>
            <p className="text-[#1E2A32]/70 leading-relaxed">
              To empower grassroots students with the valuable skills and knowledge of abacus calculation, 
              enabling them to excel academically and thrive in today's competitive world.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#FEF9F0] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#E6B17E]/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1E2A32] mb-3">Our Mission</h3>
            <p className="text-[#1E2A32]/70 leading-relaxed">
              To provide high-quality, accessible, and effective abacus training to grassroots students, 
              fostering a love for learning, promoting cognitive development, and building confidence 
              through innovative programs.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A32] mb-8">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E6B17E]/20 to-[#E6B17E]/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-[#E6B17E] animate-pulse-soft" />
                </div>
                <h4 className="font-semibold text-[#1E2A32] mb-2">{value.title}</h4>
                <p className="text-[#1E2A32]/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider-svg w-full mt-16" />
      </div>
    </section>
  );
};

export default AboutSection;