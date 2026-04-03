export const siteSEO = {
  siteName: "I-Genius Abacus Academy India Pvt Ltd",
  shortName: "I-Genius",
  defaultTitle: "I-Genius Abacus Academy | Best Abacus Classes India | Nashik",
  defaultDescription:
    "I-Genius Abacus Academy — Unlock the Genius Within. ISO 9001:2015 certified, EBVTR authorized. 550+ franchisees, 1.5 lakh students trained. Abacus, Vedic Math & Rubik Cube courses for kids age 6–14. Nashik, Maharashtra.",
  tagline: "Unlock the Genius Within",
  baseUrl: "https://igeniusindia.in",
  defaultImage: "/og-igenius.jpg",
  locale: "en_IN",
  email: "info.igeniusnsk@gmail.com",
  phone: "+917770045402",
  address:
    "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road, Nashik - 422002, Maharashtra",
  foundingYear: "2007",
  gaMeasurementId: "G-XXXXXXXXXX",
};

export const pageSEO = {
  home: {
    title:
      "I-Genius Abacus Academy | Best Abacus Classes India | Unlock the Genius Within",
    description:
      "Join I-Genius Abacus Academy — India's leading abacus & brain development institute. ISO 9001:2015 certified. 550+ franchisees, 1.5 lakh+ students. Abacus, Vedic Math & Rubik Cube for kids. Nashik, Maharashtra.",
    keywords:
      "abacus classes, abacus academy india, best abacus classes nashik, brain development for kids, vedic math classes, rubik cube classes, igenius abacus",
    canonical: "/",
  },
  about: {
    title: "About I-Genius | ISO Certified Abacus Academy Since 2007 | Nashik",
    description:
      "Learn about I-Genius Abacus Academy — founded in 2007, ISO 9001:2015 certified, EBVTR authorized. Listed in Wonder Book of International London. 550+ franchisees across 5 countries.",
    keywords:
      "about igenius abacus, igenius academy history, abacus academy nashik, iso certified abacus, ebvtr authorized academy",
    canonical: "/about-us",
  },
  courses: {
    title: "Courses | Abacus, Vedic Math & Rubik Cube | I-Genius Academy",
    description:
      "Explore I-Genius courses: Abacus for mental math, Vedic Mathematics, and Rubik Cube. Age-appropriate programs for kids 5–14 years. Enroll today.",
    keywords:
      "abacus courses, vedic math course, rubik cube course, brain development courses for kids, mental math training",
    canonical: "/courses",
  },
  abacus: {
    title: "Abacus Course | Mental Math for Kids | I-Genius Academy India",
    description:
      "Abacus training at I-Genius develops mental arithmetic, concentration & memory in children aged 5–14. 8 structured levels. Online & offline classes available.",
    keywords:
      "abacus course india, abacus training kids, mental math abacus, abacus levels, abacus online classes",
    canonical: "/courses/abacus",
  },
  vedicMath: {
    title: "Vedic Math Course | Speed Mathematics for Kids | I-Genius Academy",
    description:
      "I-Genius Vedic Mathematics course teaches ancient Indian math techniques for lightning-fast calculations. Ideal for students aged 8–16. Build math confidence.",
    keywords:
      "vedic math course, vedic mathematics india, speed maths kids, vedic maths nashik, ancient math techniques",
    canonical: "/courses/vedic-math",
  },
  rubikCube: {
    title:
      "Rubik Cube Course | Logical Thinking for Kids | I-Genius Academy India",
    description:
      "I-Genius Rubik Cube course develops logical thinking, problem-solving & concentration in children. Learn 3x3, 4x4 and advanced cubing. Enroll now.",
    keywords:
      "rubik cube course, rubik cube classes india, cubing for kids, logical thinking kids, rubik cube nashik",
    canonical: "/courses/rubik-cube",
  },
  schoolProject: {
    title:
      "School Project | Abacus in Schools | I-Genius Academy | 165+ Schools",
    description:
      "I-Genius School Project brings abacus & brain development programs to school campuses. 165+ school associations across India. Partner with us today.",
    keywords:
      "abacus school project, abacus in schools india, brain development schools, school franchise abacus, igenius school partnership",
    canonical: "/school-project",
  },
  franchise: {
    title:
      "Franchise | Start Your Abacus Academy | I-Genius | 550+ Centres India",
    description:
      "Join India's fastest-growing abacus franchise network. I-Genius offers Master Franchise & Unit Franchise models. 550+ centres, low investment, high returns.",
    keywords:
      "abacus franchise india, igenius franchise, abacus academy franchise, education franchise india, franchise opportunity nashik",
    canonical: "/franchise",
  },
  blog: {
    title: "Blog | Brain Development Tips & Abacus Insights | I-Genius Academy",
    description:
      "Read the I-Genius blog for expert insights on brain development, abacus benefits, vedic math tips, and child education. Stay updated with latest news.",
    keywords:
      "abacus blog, brain development tips, abacus benefits children, vedic math blog, igenius news",
    canonical: "/blog",
  },
  career: {
    title: "Careers | Join I-Genius Abacus Academy Team | Nashik",
    description:
      "Explore career opportunities at I-Genius Abacus Academy. We're hiring trainers, franchise managers, and educators. Join our mission to unlock every child's genius.",
    keywords:
      "igenius careers, abacus trainer jobs, education jobs nashik, igenius academy jobs",
    canonical: "/career",
  },
  contact: {
    title: "Contact Us | I-Genius Abacus Academy | Nashik | +91 7770045402",
    description:
      "Contact I-Genius Abacus Academy in Nashik. Office at Silver Plaza, Canada Corner. Call +91 7770045402 or email info.igeniusnsk@gmail.com. Book a free demo today.",
    keywords:
      "contact igenius abacus, igenius nashik address, abacus academy contact, book free demo class",
    canonical: "/contact",
  },
};

export function buildMetadata(pageKey) {
  const page = pageSEO[pageKey] || {};
  const title = page.title || siteSEO.defaultTitle;
  const description = page.description || siteSEO.defaultDescription;
  const canonical = `${siteSEO.baseUrl}${page.canonical || "/"}`;

  return {
    title,
    description,
    keywords: page.keywords || "",
    metadataBase: new URL(siteSEO.baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteSEO.siteName,
      images: [
        {
          url: siteSEO.defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: siteSEO.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteSEO.defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteSEO.siteName,
    alternateName: "I-Genius Abacus Academy",
    url: siteSEO.baseUrl,
    logo: `${siteSEO.baseUrl}/logo.png`,
    image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
    description: siteSEO.defaultDescription,
    telephone: siteSEO.phone,
    email: siteSEO.email,
    foundingDate: siteSEO.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.0059",
      longitude: "73.7897",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteSEO.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: [
      "https://www.instagram.com/igenius_abacus_/",
      "https://www.youtube.com/@igeniusabacusacademy",
      "https://www.facebook.com/igeniusabacus",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "ISO 9001:2015 Certified",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteSEO.baseUrl}/#localbusiness`,
    name: siteSEO.siteName,
    image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
    url: siteSEO.baseUrl,
    telephone: siteSEO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.0059",
      longitude: "73.7897",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "₹₹",
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.url}`,
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getCourseSchema(course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: siteSEO.siteName,
      url: siteSEO.baseUrl,
    },
    url: `${siteSEO.baseUrl}${course.url}`,
    educationalLevel: course.ageGroup,
    courseMode: ["online", "offline"],
  };
}
