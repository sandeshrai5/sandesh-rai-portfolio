export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: "training" | "workshop" | "research" | "certification";
  image?: string;
}