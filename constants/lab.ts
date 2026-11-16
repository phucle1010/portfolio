export const site = {
  url: "https://pucklee.io.vn",
  /** Google site name + visible brand wordmark */
  name: "Pucklee",
  /** Ordered fallbacks for Google when primary name isn't selected */
  alternateNames: ["PUCKLEE", "Le The Phuc", "pucklee.io.vn"] as const,
  title: "Le The Phuc (Pucklee) — Full-Stack Developer",
  description:
    "Le The Phuc (Pucklee) is a Full-Stack Developer in Ho Chi Minh City building SaaS, web, and mobile products with React, Next.js, React Native, NestJS, and AI.",
  statement: "Engineering ideas into intelligent digital products.",
};

export type LabImage = {
  src: string;
  alt: string;
  caption: string;
};

export type LabProject = {
  slug: string;
  index: string;
  name: string;
  category: string;
  role: string;
  company: string;
  featured: boolean;
  summary: string;
  overview: string;
  problem: string;
  contributions: string;
  implementation?: string;
  outcome?: string;
  highlights: string[];
  technologies: string[];
  cover: LabImage;
  images: LabImage[];
};

export const projects: LabProject[] = [
  {
    slug: "hrcv",
    index: "01",
    name: "HRCV",
    category: "Recruitment platform",
    role: "Software Engineer",
    company: "HRCV",
    featured: true,
    summary:
      "A Vietnamese recruitment platform with AI-matched jobs and instant bank-transfer packages.",
    overview:
      "HRCV connects job seekers and employers in Vietnam. Candidates receive AI-matched job recommendations. Employers post jobs, search for people, and buy recruitment packages paid by instant bank transfer.",
    problem:
      "Job seekers and employers needed one product for search, matching, and recruitment purchases.",
    contributions:
      "Software Engineer at HRCV. The product stack includes NestJS, Next.js, MongoDB, Redis, BullMQ, Qdrant, Python, FastAPI, and Docker.",
    highlights: ["NestJS", "Next.js", "Qdrant", "Redis", "Docker"],
    technologies: [
      "NestJS",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Qdrant",
      "Python",
      "FastAPI",
      "Next.js",
      "Docker",
    ],
    cover: {
      src: "/images-v2/projects/hrcv/1.png",
      alt: "HRCV homepage with job search, filters, and a call to action for employers",
      caption: "Public job-search homepage",
    },
    images: [
      {
        src: "/images-v2/projects/hrcv/1.png",
        alt: "HRCV homepage with job search, filters, and a call to action for employers",
        caption: "Public job-search homepage",
      },
      {
        src: "/images-v2/projects/hrcv/2.png",
        alt: "HRCV job detail page for a sales consultant role, with apply and save actions, requirements, benefits, and related jobs from the same company",
        caption: "Job listing with apply actions",
      },
      {
        src: "/images-v2/projects/hrcv/3.png",
        alt: "HRCV CV template gallery with style filters and a grid of resume designs for job seekers",
        caption: "CV template gallery",
      },
    ],
  },
  {
    slug: "magicblocks-ai",
    index: "02",
    name: "Magicblocks AI",
    category: "AI agent platform",
    role: "Full-Stack Developer",
    company: "MagicBlocks, Inc.",
    featured: true,
    summary:
      "An AI agent for a business website, SMS, and Instagram — answering customers around the clock.",
    overview:
      "Magicblocks AI lets a business add an AI agent to its website, SMS, and Instagram. Teams manage knowledge, shape the agent, test chat, and choose a plan from one product.",
    problem:
      "Customers expect answers on the site and on messaging channels even when a team is not online.",
    contributions:
      "Full-Stack Developer at MagicBlocks, Inc., working across the product with Next.js, OAuth2, MySQL, MongoDB, Cloudflare, AWS, and Vercel.",
    highlights: ["Next.js", "MySQL", "MongoDB", "Cloudflare", "Vercel"],
    technologies: [
      "Next.js",
      "OAuth2",
      "MySQL",
      "MongoDB",
      "Cloudflare",
      "AWS",
      "Vercel",
    ],
    cover: {
      src: "/images-v2/projects/magicblocks/2.png",
      alt: "Magicblocks agent editor with a website chat preview beside the agent settings",
      caption: "Agent editor and website chat preview",
    },
    images: [
      {
        src: "/images-v2/projects/magicblocks/2.png",
        alt: "Magicblocks agent editor with a website chat preview beside the agent settings",
        caption: "Agent editor and website chat preview",
      },
      {
        src: "/images-v2/projects/magicblocks/1.png",
        alt: "Magicblocks knowledge workspace listing Q&A entries and a website processing status",
        caption: "Knowledge workspace",
      },
      {
        src: "/images-v2/projects/magicblocks/3.png",
        alt: "Magicblocks billing screen with Standard, Plus, and Pro plans",
        caption: "Billing plans",
      },
    ],
  },
  {
    slug: "corsair-ai-software-stack",
    index: "03",
    name: "CORSAIR AI Software Stack",
    category: "Workstation AI installer",
    role: "Frontend Developer",
    company: "CORSAIR",
    featured: true,
    summary:
      "A one-click installer that turns a CORSAIR workstation into a ready-to-use AI machine.",
    overview:
      "CORSAIR AI Software Stack is a one-click installer for CORSAIR workstations. A person picks a use case, the app checks the hardware, and it installs the matching tools with live progress.",
    problem:
      "Setting up an AI workstation usually means choosing tools by hand and installing them for a specific machine.",
    contributions:
      "Frontend Developer at CORSAIR. I built the interface for choosing a use case, reviewing the toolkit, and following the install flow.",
    highlights: ["React", "TypeScript", "SignalR", "Tailwind CSS"],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "SignalR",
      "Tailwind CSS",
      "i18next",
    ],
    cover: {
      src: "/images-v2/projects/warp/2.png",
      alt: "CORSAIR AI Software Stack toolkit screen with selected AI tools and an install action",
      caption: "Toolkit selection before install",
    },
    images: [
      {
        src: "/images-v2/projects/warp/2.png",
        alt: "CORSAIR AI Software Stack toolkit screen with selected AI tools and an install action",
        caption: "Toolkit selection before install",
      },
      {
        src: "/images-v2/projects/warp/1.png",
        alt: "CORSAIR AI Software Stack marketing page introducing workstation setup",
        caption: "Product introduction",
      },
      {
        src: "/images-v2/projects/warp/3.png",
        alt: "CORSAIR system installer dialog with download, run, and confirm connection steps",
        caption: "System installer connection steps",
      },
    ],
  },
  {
    slug: "job-tinda",
    index: "04",
    name: "Job Tinda",
    category: "Hiring product",
    role: "Software Engineer",
    company: "Azubi-in-Germany",
    featured: false,
    summary:
      "A hiring product connecting German companies with international candidates through video profiles.",
    overview:
      "Job Tinda connects German companies with international candidates for apprenticeships and jobs. Candidates present video profiles. Employers match, chat, and book interviews in the app.",
    problem:
      "Companies hiring across borders needed one product to review candidates, talk to them, and book interviews.",
    contributions:
      "Software Engineer at Azubi-in-Germany, working on the hiring product with React Native, Expo, Node.js, MongoDB, and Supabase.",
    highlights: ["React Native", "Expo", "Node.js", "Supabase"],
    technologies: [
      "React Native",
      "Expo",
      "TanStack Query",
      "Supabase",
      "WebSockets",
      "i18next",
      "Node.js",
      "MongoDB",
    ],
    cover: {
      src: "/images-v2/projects/tinda/4.png",
      alt: "Job Tinda admin dashboard for users, schedules, and activity",
      caption: "Admin dashboard",
    },
    images: [
      {
        src: "/images-v2/projects/tinda/1.png",
        alt: "Job Tinda admin dashboard for users, schedules, and activity",
        caption: "Admin dashboard",
      },
      {
        src: "/images-v2/projects/tinda/2.png",
        alt: "Job Tinda admin screen for reviewing a job seeker profile",
        caption: "Job seeker review",
      },
      {
        src: "/images-v2/projects/tinda/3.png",
        alt: "Job Tinda admin screen with a candidate profile preview open",
        caption: "Candidate profile preview",
      },
      {
        src: "/images-v2/projects/tinda/4.png",
        alt: "Job Tinda campaign image showing candidate cards and the mobile app",
        caption: "Campaign image for the mobile app",
      },
    ],
  },
  {
    slug: "block24",
    index: "05",
    name: "Block24",
    category: "Crypto social product",
    role: "Frontend Developer",
    company: "TradecoinVN",
    featured: false,
    summary:
      "A crypto social network for posts, traders, and market conversation on any device.",
    overview:
      "Block24 is a crypto social network where people share posts, follow traders, and discuss market trends.",
    problem:
      "A crypto community needed one place to post, follow traders, and talk about the market on any device.",
    contributions:
      "Frontend Developer at TradecoinVN. I built the web interface, including the news homepage, invite flow, and referral screens.",
    highlights: ["Next.js", "Redux", "Node.js", "MySQL"],
    technologies: [
      "Next.js",
      "Redux",
      "OAuth2",
      "Node.js",
      "MySQL",
      "Cloudflare",
    ],
    cover: {
      src: "/images-v2/projects/block24/1.png",
      alt: "Block24 news homepage with trending topics, search, and market stories",
      caption: "News and trending homepage",
    },
    images: [
      {
        src: "/images-v2/projects/block24/1.png",
        alt: "Block24 news homepage with trending topics, search, and market stories",
        caption: "News and trending homepage",
      },
      {
        src: "/images-v2/projects/block24/2.png",
        alt: "Block24 Reward Hub with a daily diamond check-in, mission tabs, and a diamond balance of 10",
        caption: "Daily diamond reward hub",
      },
      {
        src: "/images-v2/projects/block24/3.png",
        alt: "Block24 news article on Ethereum smart-contract upgrade risk, with related stories and ads",
        caption: "News article with related stories",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return projects[0];
  return projects[(index + 1) % projects.length];
}

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);

export const capabilities = [
  {
    title: "SaaS & MVP Development",
    value:
      "Turn an idea into a product people can use — with room to grow after the first release.",
  },
  {
    title: "Full-Stack Web Development",
    value:
      "One engineering owner from the interface through the API and data, so the product stays coherent.",
  },
  {
    title: "AI-Powered Applications",
    value:
      "Add agents, search, and recommendations where they help the product — not as decoration.",
  },
  {
    title: "Backend & Infrastructure Engineering",
    value:
      "APIs, data, and the systems that keep a product reliable after launch.",
  },
] as const;

export const approachSteps = [
  {
    title: "Discover",
    body: "Clarify the product, the users, and the first version that is actually worth building.",
  },
  {
    title: "Architect",
    body: "Choose a structure that can ship now without boxing in the next release.",
  },
  {
    title: "Build",
    body: "Implement the interface, APIs, and data as one product, not as disconnected parts.",
  },
  {
    title: "Optimize",
    body: "Tighten performance, reliability, and the paths people actually use.",
  },
  {
    title: "Ship",
    body: "Put a production-ready product in front of users and keep it maintainable.",
  },
] as const;

export const projectTypes = [
  { value: "saas", label: "SaaS or MVP" },
  { value: "fullstack", label: "Full-stack product" },
  { value: "ai", label: "AI-powered application" },
  { value: "improve", label: "Improve an existing product" },
  { value: "other", label: "Something else" },
] as const;

export const budgetRanges = [
  { value: "undefined", label: "Not defined yet" },
  { value: "under-5", label: "Under 5,000 USD" },
  { value: "5-15", label: "5,000–15,000 USD" },
  { value: "15-40", label: "15,000–40,000 USD" },
  { value: "40-plus", label: "40,000 USD and above" },
] as const;
