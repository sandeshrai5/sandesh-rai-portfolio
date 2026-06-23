import type { PersonalInfo, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sandesh Rai",
  title:
    "Agricultural Engineer | Climate Change Researcher | Water Resources & Irrigation Specialist",
  bio: "Passionate about understanding how climate change influences water resources and agricultural systems. My research combines hydrological modeling, GIS, remote sensing, and climate science to develop sustainable solutions for irrigation management, water security, and climate-resilient agriculture. I am committed to supporting evidence-based policies and engineering innovations that strengthen agricultural resilience and sustainable development in Nepal.",
  location: "Nepal",
  email: "sandeshchamlingrai5@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandesh-rai-044217277",
  researchGate:
    "https://www.researchgate.net/profile/Sandesh-Rai-5?ev=hdr_xprf",
  googleScholar:
    "https://scholar.google.com/citations?user=ZHuqVhsAAAAJ&hl=en&oi=ao",
  profileImage: "/images/profile.png",
};

export const secondaryEmails = [
  "079msccd014.sandesh@pcampus.edu.np",
  "074bag040@ioepc.edu.np",
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Research Interests", href: "#research-interests" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];