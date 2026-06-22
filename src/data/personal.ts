import type { PersonalInfo, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sandesh Rai",
  title:
    "Climate Change Researcher | GIS & Remote Sensing Analyst | Water Resources and Irrigation Specialist",
  bio: "I am a passionate researcher specializing in climate change impacts on water resources, irrigation systems, hydrological modeling, GIS, and remote sensing. My work focuses on sustainable water management, climate adaptation, and agricultural resilience in Nepal.",
  location: "Nepal",
  email: "sandeshchamlingrai5@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandesh-rai-044217277",
  researchGate:
    "https://www.researchgate.net/profile/Sandesh-Rai-5?ev=hdr_xprf",
  googleScholar:
    "https://scholar.google.com/citations?user=ZHuqVhsAAAAJ&hl=en&oi=ao",
  profileImage: "/images/profile.jpg", // Replace with your photo filename
};

// Secondary emails (displayed in full contact section)
export const secondaryEmails = [
  "079msccd014.sandesh@pcampus.edu.np",
  "074bag040@ioepc.edu.np",
];

// Section navigation items
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