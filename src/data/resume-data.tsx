import {
  Openpesa,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alpha Olomi",
  initials: "AO",
  location: "Dar es Salaam, Tanzania",
  locationLink: "https://www.google.com/maps/place/Dar+es+Salaam,+Tanzania/",
  about:
    "Software Engineer with 5+ years of experience in building web and mobile applications. Open source contributor. I love to build products that solve real problems. I am a self-taught developer who is passionate about learning new technologies and frameworks. I am a team player who loves to work in a team environment. I am a fast learner and I am always eager to learn new things.",
  summary:
    "As a Full Stack Engineer, I have experience in building web and mobile applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/10551599?v=4",
  personalWebsiteUrl: "https://alphaolomi.dev/",
  contact: {
    email: "hello@alphaolomi.com",
    tel: "+255747991498",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alphaolomi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alphaolomi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/alphaolomi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Youtube",
      degree: "Bachelor's Degree in Online Stuff",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Github",
      link: "https://github.com",
      badges: ["Remote"],
      title: "Open Source Contributor",
      logo: Openpesa,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },

  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "PHP",
    "Laravel",
    "Python",
    "Django",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",    
  ],
  projects: [
    {
      title: "Openpesa",
      techStack: [
        "FinTech",
        "Multi Language",
        "Mobile Money",
      ],
      description: "A payments integration toolkit for Africa",
      logo: Openpesa,
      link: {
        label: "openpesa.org",
        href: "https://openpesa.github.io/",
      },
    },
  ],
} as const;
