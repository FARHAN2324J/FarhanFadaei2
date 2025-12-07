import MNTN from "../assets/images/MNTN.webp";
import Finance from "../assets/images/Finance.webp";
import RunningForChange from "../assets/images/RunningForChange.webp";
import Planto from "../assets/images/Planto.webp";
import type { Types } from "../types/types";

export interface Card extends Omit<Types, "alt" | "caption" | "description"> {
  tags: string[];
  category: "featured" | "learning";
  features?: string[];
  description?: string;
  links: {
    source?: string;
    info: string;
    live: string;
  };
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Planto",
    src: Planto,
    tags: ["React", "TypeScript", "Zustand", "TailwindCSS"],
    category: "featured",
    features: [
      "Shopping Cart System with Zustand State Management",
      "Modern and clean user interface",
      "Fully responsive design",
      "Type-safe code with TypeScript",
      "Clean and structured code using Component-Based Architecture",
    ],
    description:
      "Planto is a platform for presenting natural and indoor plants. The goal of this project is to improve the air quality of your home, create a sense of calm in your living space, and add the beauty of nature to your everyday environment. With a focus on trendy and popular plants, Planto offers a simple and enjoyable experience for choosing and caring for your green space.",
    links: {
      source: "https://github.com/FARHAN2324J/Planto-web",
      info: "#",
      live: "https://farhan2324j.github.io/Planto/",
    },
  },
  {
    id: 2,
    title: "RunningForChange",
    src: RunningForChange,
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
      "SplitText",
      "ScrollTrigger",
    ],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/RunningForChange/",
    },
  },
  {
    id: 3,
    title: "Noble Finances",
    src: Finance,
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
    ],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/NobleFinances/",
    },
  },
  {
    id: 4,
    title: "MNTN",
    src: MNTN,
    tags: [
      "React",
      "TailwindCSS",
      "ScrollTrigger",
    ],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/MNTN/",
    },
  },
];
