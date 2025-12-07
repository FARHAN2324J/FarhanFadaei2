import Responsive from "../assets/images/Responsive.png";
import UserFriendly from "../assets/images/user-friendly.png";
import Performance from "../assets/images/Performance.png";
import type { Types } from "../types/types";

interface ServiceImage extends Omit<Types, 'title' | 'description'> {
  color: string;
}

export const servicesImages: ServiceImage[] = [
  {
    id: 1,
    src: Responsive,
    alt: "Responsive Design icon",
    caption: "Responsive for any screen size",
    color: "#3e44ef",
  },
  {
    id: 2,
    src: UserFriendly,
    alt: "User Friendly icon",
    caption: "Modern, beautiful, and understandable",
    color: "#f2503b",
  },

  {
    id: 3,
    src: Performance,
    alt: "Performance icon",
    caption: "Focus on optimization and loading speed",
    color: "#f2a93b",
  },
];
