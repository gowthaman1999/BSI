export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  tags: string[];
  metrics?: string;
  icon?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  domain: string;
  description: string;
  tags: string[];
  image?: string;
  badge?: string;
  variant?: "side-image" | "bottom-image" | "top-image" | "dark";
  colSpan?: string;
  isDark?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CareerRole {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  experience: string;
  description: string;
  tags: string[];
}

export const SITE_CONFIG = {
  name: "Blackstone Infomatics",
  tagline: "Clean design. Serious engineering.",
  description:
    "We partner with ambitious U.S. teams to design and engineer scalable web applications, modern brand identities, and high-performance digital products.",
  contactEmail: "inquiries@blackstoneinfomatics.com",
  scheduleTimezone: "EST & PST Business Hours",
  deliveryScope: "United States & International Delivery",
  stats: {
    projects: "200+",
    experience: "8+ years",
    satisfaction: "100%",
  },
  clients: [
    "Legend Xpress",
    "Hydropress",
    "Royal Destiny",
    "OneWorld",
    "Dhanaz",
    "Thogai Murugan",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web design & development",
    domain: "Full-Stack",
    description:
      "High-performance, accessible web platforms built with modern TypeScript, React, Next.js, and headless CMS integrations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
    image: "/images/services/web-design-development.webp",
    badge: "Frontend & Code",
    variant: "side-image",
    colSpan: "lg:col-span-6 md:col-span-1",
  },
  {
    id: "ui-ux",
    title: "UI/UX design",
    domain: "Product Design",
    description:
      "Rigorous user research, multi-platform design systems, interactive Figma prototypes, and intuitive digital interfaces engineered for conversion.",
    tags: ["Figma Systems", "User Testing", "Interactive Prototypes"],
    image: "/images/services/ui-ux-design.webp",
    badge: "Design Systems",
    variant: "side-image",
    colSpan: "lg:col-span-6 md:col-span-1",
  },
  {
    id: "mobile-apps",
    title: "Mobile apps",
    domain: "Mobile",
    description:
      "Native and cross-platform iOS and Android apps engineered with React Native and Flutter for seamless offline and sync operations.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    image: "/images/services/mobile-apps.webp",
    badge: "Mobile Architecture",
    variant: "bottom-image",
    colSpan: "lg:col-span-4 md:col-span-1",
  },
  {
    id: "custom-software",
    title: "Custom software",
    domain: "Enterprise",
    description:
      "Bespoke internal platforms, API gateways, database architecture, and workflow automations to streamline complex operations.",
    tags: ["APIs", "Cloud Ops", "PostgreSQL", "Microservices"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqZeJFmNUG8KQY1uQe1aKWqejRQ_KHAlTE-1zcDd_O7DbEsWsPhSmwPvKxHnYcTiXRbKw0saSyPmHlvs_l2jJ6jaAAl36_QXovcbSCuQvCHKcX0MRH7rft06iKq8hUJ1SAAfjq-Ieereq7Jmbb16QuqCplBPAdjUIjRmvsAmgtKP3FG6xj2yeJv1LQSLWFIVk8Ju2CJQau9tC4-pavpDBMZrHmSZEIisNUenRIbT_I",
    badge: "Systems Architecture",
    variant: "top-image",
    colSpan: "lg:col-span-4 md:col-span-1",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    domain: "Commerce",
    description:
      "Tailored storefronts, Shopify Plus headless setups, integrated checkout pipelines, and ERP inventory synchronization.",
    tags: ["Shopify Plus", "Stripe", "Subscriptions", "ERP Sync"],
    image: "/images/services/ecommerce.webp",
    badge: "Digital Storefront",
    variant: "bottom-image",
    colSpan: "lg:col-span-4 md:col-span-1",
  },
  {
    id: "marketing",
    title: "SEO & digital marketing",
    domain: "Growth & Acquisition",
    description:
      "Technical search engine optimization, paid customer acquisition, structured metadata indexing, and conversion rate optimization campaigns.",
    tags: ["Technical SEO", "Google Ads", "Paid Social", "Brand Positioning"],
    colSpan: "lg:col-span-12 md:col-span-2",
    variant: "dark",
    isDark: true,
  },
];

export const ALL_SERVICES_CATALOG = [
  {
    title: "Web design & development",
    category: "Engineering",
    deliverables: "Design tokens, Next.js SSR platform, Headless CMS, WCAG 2.1 AA audit, CI/CD pipeline",
    timeline: "4–8 weeks",
    description: "Enterprise web architectures with sub-second page loads, modular components, and zero tech debt."
  },
  {
    title: "UI/UX design",
    category: "Design",
    deliverables: "Figma design system, token variables, UX research synthesis, interactive component library",
    timeline: "3–5 weeks",
    description: "High-fidelity digital user interfaces built on atomic design principles and verified through testing."
  },
  {
    title: "Mobile apps",
    category: "Engineering",
    deliverables: "iOS App Store build, Android Play Store build, offline sync engine, push notification hub",
    timeline: "6–12 weeks",
    description: "Cross-platform mobile applications engineered for native performance and reliable telemetry."
  },
  {
    title: "Custom software",
    category: "Architecture",
    deliverables: "REST/GraphQL API gateway, database schema & migrations, role-based access control, monitoring",
    timeline: "6–14 weeks",
    description: "Internal business systems, inventory engines, and automated workflow orchestrations."
  },
  {
    title: "E-commerce platforms",
    category: "Commerce",
    deliverables: "Headless Shopify frontend, dynamic cart & checkout, multi-currency support, catalog sync",
    timeline: "5–9 weeks",
    description: "Ultra-fast headless commerce experiences built to maximize customer retention and cart velocity."
  },
  {
    title: "Technical SEO",
    category: "Growth",
    deliverables: "Core Web Vitals audit, JSON-LD schema generation, sitemap architecture, crawl budget optimization",
    timeline: "2–4 weeks",
    description: "Engineered search visibility ensuring every dynamic route indices accurately across search engines."
  },
  {
    title: "Search engine marketing (SEM)",
    category: "Acquisition",
    deliverables: "Keyword architecture, ad copy variations, conversion tracking scripts, negative keyword pruning",
    timeline: "Continuous",
    description: "High-intent paid search campaigns focused strictly on pipeline generation and CPA targets."
  },
  {
    title: "Social media marketing",
    category: "Acquisition",
    deliverables: "Editorial content calendar, design creative assets, paid social targeting, engagement telemetry",
    timeline: "Continuous",
    description: "Targeted B2B and B2C brand narrative campaigns built to compound audience trust."
  },
  {
    title: "Digital marketing & analytics",
    category: "Growth",
    deliverables: "GA4 server-side tracking, Mixpanel event telemetry, executive dashboard, conversion attribution",
    timeline: "Ongoing",
    description: "Multi-touch attribution models and analytics instrumentation to track true customer lifetime value."
  },
  {
    title: "Graphic design & 3D assets",
    category: "Brand",
    deliverables: "High-res marketing collateral, vector iconography, 3D product renders, spatial telemetry art",
    timeline: "2–3 weeks",
    description: "Editorial visual assets designed to elevate product launch narratives and investor materials."
  },
  {
    title: "Brand identity systems",
    category: "Brand",
    deliverables: "Logo suite, typography guidelines, color palette specifications, brand book, stationery kit",
    timeline: "3–6 weeks",
    description: "Comprehensive brand identities that convey engineering authority, clarity, and enduring prestige."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "puretone",
    title: "Puretone Hearing Aid Center",
    category: "Healthcare",
    description:
      "Digital appointment scheduling platform and localized accessibility portal for pediatric and adult hearing clinics across multiple centers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAk8H5D_lGy_eNTZOf-OmrfUXS7-CwwCvkecmtHk17g3y8JVX9dSxAaJyOku8uOfmC8y3phEv3eDILiTqx3JUv9xS4iJDxFr7TgL0Tp4d1-_mBh0B2McUgEozYJnJEIPfhRRxmlcIf1a1UM9v_UZG8v5UvHXx8oObZ8KZXnQFVkiR3gCC3MAlAf5SZmkGfU9J7mpkThcV4Rm_8BETFIQgGLOvKPql_KWaAbTCehoPnk",
    badge: "Online Diagnostic Booking Engine",
    tags: ["Next.js", "WCAG 2.1 AA", "HIPAA Ready", "Tailwind CSS"],
    metrics: "+148% appointment conversions",
    icon: "Activity",
  },
  {
    id: "sharp-sofas",
    title: "Sharp Sofas & Furniture",
    category: "Retail",
    description:
      "Interactive 3D configurator and headless e-commerce store with high-converting custom checkout pipelines and real-time inventory tracking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqZeJFmNUG8KQY1uQe1aKWqejRQ_KHAlTE-1zcDd_O7DbEsWsPhSmwPvKxHnYcTiXRbKw0saSyPmHlvs_l2jJ6jaAAl36_QXovcbSCuQvCHKcX0MRH7rft06iKq8hUJ1SAAfjq-Ieereq7Jmbb16QuqCplBPAdjUIjRmvsAmgtKP3FG6xj2yeJv1LQSLWFIVk8Ju2CJQau9tC4-pavpDBMZrHmSZEIisNUenRIbT_I",
    badge: "Headless Direct-To-Consumer Storefront",
    tags: ["Three.js", "Shopify Plus", "Tailwind CSS", "Stripe API"],
    metrics: "3.4x average order value",
    icon: "ShoppingBag",
  },
  {
    id: "ravi-home-stay",
    title: "Ravi Home Stay",
    category: "Hospitality",
    description:
      "Direct-booking boutique travel engine with dynamic seasonal rate calculation, localized guest itineraries, and multi-currency billing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLmhnz0yE0TpNdnZBuYXO0PDIYlvA2WOdiq6HjfProbFQVQu3BkYl1v529xf1uHvmRfLjSkZS4RV2ixS9TUgDFMaH-npvYLsWZzP-mXzRLY8WwzNxd40sNOPexOijnL52IF47QhhjDyB4IxbIJTS27AquWkE6yEXOWJVTIBF4_lCoTKyyDEgnsaoaFR8lEg8-TA9yIpSVHxZQST3tsnv6Ffkga5hlF4Vn4AKEoRL8j",
    badge: "Direct Reservation Infrastructure",
    tags: ["React", "PostgreSQL", "Calendar Engine", "Multi-Currency"],
    metrics: "0% OTA commission leakage",
    icon: "Compass",
  },
  {
    id: "western-ghats",
    title: "Western Ghats Forest Foundation",
    category: "Non-Profit",
    description:
      "Interactive biodiversity atlas, transparent donor financial tracker, and educational outreach hub for ecological conservation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAk8H5D_lGy_eNTZOf-OmrfUXS7-CwwCvkecmtHk17g3y8JVX9dSxAaJyOku8uOfmC8y3phEv3eDILiTqx3JUv9xS4iJDxFr7TgL0Tp4d1-_mBh0B2McUgEozYJnJEIPfhRRxmlcIf1a1UM9v_UZG8v5UvHXx8oObZ8KZXnQFVkiR3gCC3MAlAf5SZmkGfU9J7mpkThcV4Rm_8BETFIQgGLOvKPql_KWaAbTCehoPnk",
    badge: "Conservation Data & Giving Engine",
    tags: ["Spatial Mapbox", "Donor Ledger", "Next.js", "Accessibility"],
    metrics: "$1.2M raised for conservation",
    icon: "Trees",
  },
  {
    id: "meridian-health",
    title: "Meridian Health Tech",
    category: "Enterprise",
    description:
      "Telemetry telemetry curves, micro-frontend design architecture, and HIPAA-compliant patient communication systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqZeJFmNUG8KQY1uQe1aKWqejRQ_KHAlTE-1zcDd_O7DbEsWsPhSmwPvKxHnYcTiXRbKw0saSyPmHlvs_l2jJ6jaAAl36_QXovcbSCuQvCHKcX0MRH7rft06iKq8hUJ1SAAfjq-Ieereq7Jmbb16QuqCplBPAdjUIjRmvsAmgtKP3FG6xj2yeJv1LQSLWFIVk8Ju2CJQau9tC4-pavpDBMZrHmSZEIisNUenRIbT_I",
    badge: "Clinical Platform System",
    tags: ["TypeScript", "GraphQL", "Enterprise Auth", "AWS ECS"],
    metrics: "99.99% operational uptime",
    icon: "Cpu",
  },
  {
    id: "apex-logistics",
    title: "Apex Freight & Telematics",
    category: "Logistics",
    description:
      "Real-time dispatch optimization, fleet route recalculation, and driver telemetry dashboard with low-latency event streaming.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLmhnz0yE0TpNdnZBuYXO0PDIYlvA2WOdiq6HjfProbFQVQu3BkYl1v529xf1uHvmRfLjSkZS4RV2ixS9TUgDFMaH-npvYLsWZzP-mXzRLY8WwzNxd40sNOPexOijnL52IF47QhhjDyB4IxbIJTS27AquWkE6yEXOWJVTIBF4_lCoTKyyDEgnsaoaFR8lEg8-TA9yIpSVHxZQST3tsnv6Ffkga5hlF4Vn4AKEoRL8j",
    badge: "Real-Time Fleet Infrastructure",
    tags: ["WebSockets", "Kafka", "Mapbox GL", "PostGIS"],
    metrics: "-28% average fuel variance",
    icon: "Truck",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Discover",
    duration: "1–2 Weeks",
    description:
      "Deep-dive into business objectives, technical scope, API requirements, and target user personas.",
  },
  {
    step: "Step 02",
    title: "Design",
    duration: "2–4 Weeks",
    description:
      "Interactive wireframes, complete component libraries, responsive viewports, and functional click-through prototypes.",
  },
  {
    step: "Step 03",
    title: "Build",
    duration: "4–8 Weeks",
    description:
      "Clean modular architecture, performant codebases, strict type-checking, and continuous automated testing suites.",
  },
  {
    step: "Step 04",
    title: "Grow",
    duration: "Continuous",
    description:
      "Zero-downtime deployment, Core Web Vitals optimization, telemetry analytics, and ongoing sprint evolution.",
  },
];

export const BENEFITS_US_TEAMS = [
  {
    tag: "Sync",
    title: "Overlap hours",
    description:
      "Full working day synchronization with Eastern & Pacific time zones. Standups, pull request reviews, and Slack messaging align with your rhythm.",
  },
  {
    tag: "Standard",
    title: "Accessible by default",
    description:
      "WCAG 2.1 AA compliance across every responsive interface, ensuring broad legal safety and frictionless keyboard-first navigation.",
  },
  {
    tag: "Clarity",
    title: "Transparent pricing",
    description:
      "Predictable fixed sprint rates with no hidden hourly variances, unanticipated setup fees, or surprise end-of-month statements.",
  },
];

export const TESTIMONIAL = {
  quote:
    "Blackstone operates as a seamless extension of our core engineering team. Their attention to craft and technical rigor is exceptional.",
  author: "Marcus Vance",
  role: "VP of Engineering, Meridian Health Tech (Austin, TX)",
  tag: "Sprint Sync • Austin & Remote",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDLmhnz0yE0TpNdnZBuYXO0PDIYlvA2WOdiq6HjfProbFQVQu3BkYl1v529xf1uHvmRfLjSkZS4RV2ixS9TUgDFMaH-npvYLsWZzP-mXzRLY8WwzNxd40sNOPexOijnL52IF47QhhjDyB4IxbIJTS27AquWkE6yEXOWJVTIBF4_lCoTKyyDEgnsaoaFR8lEg8-TA9yIpSVHxZQST3tsnv6Ffkga5hlF4Vn4AKEoRL8j",
};

export const FAQS: FAQItem[] = [
  {
    question: "How does your team handle communication and time zones?",
    answer:
      "We operate on dedicated overlapping shifts with standard U.S. working schedules (EST/PST). We use Slack for day-to-day coordination, Linear for sprint backlogs, and bi-weekly Zoom demos for milestone validations.",
  },
  {
    question: "What is your typical project kickoff timeline?",
    answer:
      "Following an initial discovery call and signed agreement, we can assemble dedicated resources and begin the architecture & discovery sprint within 5 to 7 business days.",
  },
  {
    question: "Do you work on fixed-price projects or monthly retainers?",
    answer:
      "Both models are available. Defined scope projects run on milestone-based fixed fees, while evolving technical builds operate on transparent 2-week dedicated sprint retainers.",
  },
  {
    question: "Who owns the code and design intellectual property?",
    answer:
      "You do, entirely. All Figma design files, repositories, documentation, and cloud environment credentials transfer 100% to your team upon sprint completion and invoice clearance.",
  },
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "principal-fullstack",
    title: "Principal Full-Stack Engineer",
    type: "Full-Time",
    location: "Remote (U.S. / Global Overlap)",
    department: "Engineering",
    experience: "7+ years",
    description:
      "Lead architectural strategy, write pristine TypeScript code, and craft complex frontend and distributed backend applications for U.S. clients.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloud"],
  },
  {
    id: "senior-product-designer",
    title: "Senior Product & Design Systems Lead",
    type: "Full-Time",
    location: "Remote (U.S. / Global Overlap)",
    department: "Product Design",
    experience: "5+ years",
    description:
      "Own cross-client design systems in Figma, conduct user research, and produce high-fidelity desktop and mobile viewports with uncompromising precision.",
    tags: ["Figma Variables", "Atomic Design", "Design Tokens", "Prototyping"],
  },
  {
    id: "lead-devops-cloud",
    title: "Lead Cloud Infrastructure Architect",
    type: "Full-Time",
    location: "Remote (U.S. / Global Overlap)",
    department: "Infrastructure",
    experience: "6+ years",
    description:
      "Design zero-downtime CI/CD workflows, manage AWS/GCP Kubernetes clusters, and guarantee high availability, strict security, and performance metrics.",
    tags: ["Terraform", "Kubernetes", "AWS", "GCP", "Docker", "Security"],
  },
];

