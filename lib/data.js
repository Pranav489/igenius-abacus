// ============================================================
// I-Genius Abacus Academy — Central Data File
// ============================================================

export const companyInfo = {
  fullName: "I-Genius Abacus Academy India Pvt Ltd",
  shortName: "I-Genius",
  tagline: "Unlock the Genius Within",
  baseUrl: "https://igeniusindia.in",
  phone: "+91 7770045402",
  phoneRaw: "917770045402",
  email: "info.igeniusnsk@gmail.com",
  address: {
    line1: "Office No. 7/8/9, 2nd Floor Silver Plaza",
    line2: "Opp. BSNL Office, Canada Corner Sharanpur Road",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422002",
    country: "India",
    full: "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road, Nashik - 422002, Maharashtra",
  },
  founded: 2007,
  iso: "ISO 9001:2015 Certified",
  authorization: "Authorised by EBVTR Govt. of India",
  worldRecord: "Listed in Wonder Book of International London",
  social: {
    instagram: "https://www.instagram.com/igenius_abacus_/",
    youtube: "https://www.youtube.com/@igeniusabacusacademy",
    facebook: "https://www.facebook.com/igeniusabacus",
    whatsapp: "https://wa.me/917770045402",
  },
};

// ============================================================
// Navigation Items
// ============================================================
export const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Courses',
    href: '/courses',
    dropdown: [
      { name: 'Abacus (Age 5-14)', href: '/courses/abacus' },
      { name: 'Vedic Maths', href: '/courses/vedic-math' },
      { name: "Rubik's Cube", href: '/courses/rubik-cube' },
      { name: 'View All Courses', href: '/courses' },
    ]
  },
  { name: 'About Us', href: '/about-us' },
  { name: 'School Project', href: '/school-project' },
  { 
    name: "Media", 
    dropdown: [
      { name: "Photo Gallery", href: "/media/gallery" },
      { name: "Video Gallery", href: "/media/videos" },
      { name: "Student Performances", href: "/media/performances" },
      { name: "Events & Competitions", href: "/media/events" },
      { name: "Testimonials", href: "/media/testimonials" },
      { name: "Press Coverage", href: "/media/press" },
    ] 
  },
  { name: 'Franchise', href: '/franchise' },
  { name: 'Blog', href: '/blog' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

export const footerLinks = {
    quickLinks: [
      { name: "About Us", href: "/about-us" },
      { name: "Courses", href: "/courses" },
      { name: "School Project", href: "/school-project" },
      { name: "Franchise", href: "/franchise" },
      { name: "Career", href: "/career" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    courses: [
      { name: "Abacus (Age 5-14)", href: "/courses/abacus" },
      { name: "Vedic Maths", href: "/courses/vedic-math" },
      { name: "Rubik's Cube", href: "/courses/rubik-cube" },
    ],
    media: [
      { name: "Photo Gallery", href: "/media/gallery" },
      { name: "Video Gallery", href: "/media/videos" },
      { name: "Student Performances", href: "/media/performances" },
      { name: "Events & Competitions", href: "/media/events" },
      { name: "Testimonials", href: "/media/testimonials" },
    ],
  };

// Hero slides data
// export const heroSlides = [
//   {
//     id: 1,
//     type: 'video',
//     title: 'The I-Genius',
//     highlightedText: 'Journey',
//     description: 'From a small centre in Nashik to 550+ franchises across 5 countries. Watch our inspiring journey.',
//     ctaPrimary: { text: 'Our Story', link: '/about-us' },
//     ctaSecondary: { text: 'Join Franchise', link: '/franchise' },
//     videoUrl: 'https://www.youtube.com/embed/bnIGi72dg4A',
//     bgColor: 'from-sky-blue/10 to-primary-red/10',
//     badge: 'Our Journey',
//     textPosition: 'left',
//   },
//   {
//     id: 2,
//     type: 'image',
//     title: "Unlock Your Child's",
//     highlightedText: 'Super Brain Power!',
//     description: "Join India's Most Trusted Abacus Academy with 1.5 Lakh+ happy students and 550+ franchises across India.",
//     ctaPrimary: { text: 'Explore Courses', link: '/courses' },
//     ctaSecondary: { text: 'Book Free Trial', link: '/enroll' },
//     image: "/images/2589676_15595.jpg",
//     imageMobile: "/images/2589676_15595.jpg",
//     bgColor: 'from-primary-red/10 to-sky-blue/10',
//     badge: 'ISO 9001:2015 Certified',
//   },
//   {
//     id: 3,
//     type: 'image',
//     title: 'Master Mental Math',
//     highlightedText: 'With Vedic Techniques!',
//     description: 'Ancient Indian mathematics for lightning-fast calculations. Perfect for competitive exam preparation.',
//     ctaPrimary: { text: 'Learn Vedic Math', link: '/courses/vedic-math' },
//     ctaSecondary: { text: 'Book Free Demo', link: '/contact' },
//     image: "/images/cartoon-student-math-class.jpg",
//     imageMobile: "/images/cartoon-student-math-class.jpg",
//     bgColor: 'from-orange-500/10 to-yellow-500/10',
//     badge: 'Govt. Authorised',
//   },
//   {
//     id: 4,
//     type: 'image',
//     title: 'Solve Puzzles,',
//     highlightedText: 'Build Brilliance!',
//     description: "Rubik's Cube course for logical thinking, patience, and problem-solving skills. Fun learning guaranteed!",
//     ctaPrimary: { text: 'Join Cube Class', link: '/courses/rubik-cube' },
//     ctaSecondary: { text: 'About Us', link: '/about-us' },
//     image: "/images/linus-belanger-ImiUPGFczCQ-unsplash.jpg",
//     imageMobile: "/images/linus-belanger-ImiUPGFczCQ-unsplash.jpg",
//     bgColor: 'from-green-500/10 to-pink-500/10',
//     badge: 'World Record Holder',
//   },
  
//   {
//     id: 5,
//     type: 'video',
//     title: 'Student Mental Math',
//     highlightedText: 'Performance',
//     description: 'Watch our students perform lightning-fast mental math calculations.',
//     ctaPrimary: { text: 'View Gallery', link: '/media/videos' },
//     ctaSecondary: { text: 'Enroll Now', link: '/contact' },
//     videoUrl: 'https://www.youtube.com/embed/bnIGi72dg4A',
//     bgColor: 'from-purple-500/10 to-pink-500/10',
//     badge: 'Student Showcase',
//     textPosition: 'left',
//   },
// ];

export const heroSlides = [
  {
    type: "image",
    src: "/images/143040.jpg",
    alt: "Kids learning abacus",
    badge: "Since 2007",
    title: "Unlock Your Child's Genius",
    subtitle: "Whole Brain Development Program",
    description: "Join 150,000+ students who have transformed their mathematical abilities with our proven abacus training methodology.",
    cta: {
      text: "Enroll Now",
      href: "/contact"
    },
    secondaryCta: {
      text: "Watch Demo",
      href: "/media/videos"
    }
  },
  {
    type: "youtube",
    videoId: "bnIGi72dg4A", // Replace with actual video ID
    title: "Watch Our Students Perform",
    subtitle: "Mental Math Calculations",
    description: "See how our students perform complex calculations faster than a calculator.",
    cta: {
      text: "Join Free Demo",
      href: "/contact"
    }
  },
  {
    type: "youtube",
    videoId: "nfdkHolvVRA",
    title: "Abacus Competition",
    subtitle: "National Level Champions",
    description: "Our students consistently win at District, State, and National level competitions.",
    cta: {
      text: "View Achievements",
      href: "/media/performances"
    }
  },
  {
    type: "image",
    src: "/images/linus-belanger-ImiUPGFczCQ-unsplash.jpg",
    alt: "I-Genius Franchise",
    badge: "Business Opportunity",
    title: "Become a Franchise Partner",
    subtitle: "Join India's Most Trusted Abacus Academy",
    description: "Start your own successful abacus center with our proven business model. Earn ₹25,000+ per month.",
    cta: {
      text: "Apply Now",
      href: "/franchise"
    },
    secondaryCta: {
      text: "Learn More",
      href: "/franchise"
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dinesh Shewalekar",
    role: "Parent",
    child: "Son – Level 3 Abacus",
    rating: 5,
    text: "My son's math grades have improved dramatically since joining I-Genius. The teachers are incredibly patient and the structured approach really works. He can now do mental calculations faster than a calculator!",
    city: "Nashik",
    image: "/images/288920.jpg",
  },
  {
    id: 2,
    name: "Pranjal Shevale",
    role: "Parent",
    child: "Daughter – Level 5 Abacus",
    rating: 5,
    text: "I-Genius has transformed my daughter's confidence completely. She used to fear math — now she loves it. The abacus program has improved not just her math but her overall focus and memory.",
    city: "Nashik",
    image: "/images/928195.jpeg",
  },
  {
    id: 3,
    name: "Pankaj Gangurde",
    role: "Parent",
    child: "Son – Vedic Math & Abacus",
    rating: 5,
    text: "Excellent teaching methodology. The trainers are highly qualified and the curriculum is well-structured. My son completed both abacus and Vedic math, and his performance in school is outstanding.",
    city: "Mumbai",
    image: "/images/629662.jpeg",
  },
  {
    id: 4,
    name: "Purwa Shinde",
    role: "Parent",
    child: "Daughter – Rubik Cube",
    rating: 5,
    text: "The Rubik Cube course has done wonders for my daughter's logical thinking. She's more patient, focused, and loves challenges now. I-Genius is truly unlocking her genius!",
    city: "Pune",
    image: "/images/862895.jpeg",
  },
  {
    id: 5,
    name: "Shital Bachhav",
    role: "Parent",
    child: "Son – Level 6 Abacus",
    rating: 5,
    text: "We enrolled our son in I-Genius three years ago and it is the best decision we've made. He participated in national competition and won first place. The academy's support is phenomenal.",
    city: "Nashik",
    image: "/images/554305.jpeg",
  },
];