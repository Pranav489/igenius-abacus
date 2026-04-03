// app/page.js

import CoursesSection from "@/components/home/CoursesSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import SchoolProject from "@/components/home/SchoolProject";
import StatsSection from "@/components/home/StatsSection";
import SuccessStories from "@/components/home/SuccessStories";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustBadges from "@/components/home/TrustBadges";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBadges />
      <StatsSection />
      <WhyChooseUs />
      <CoursesSection />
      <SchoolProject />
      <SuccessStories />
      {/* <TestimonialsSection /> */}
      <CTASection />
      {/* Rest of your sections */}
    </main>
  );
}