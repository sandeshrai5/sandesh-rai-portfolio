import type { Publication } from "@/types";

export const publications: Publication[] = [
  // Add your journal articles here, example:
  // {
  //   id: "pub-1",
  //   title: "Your Paper Title",
  //   authors: "Rai, S., et al.",
  //   journal: "Journal Name",
  //   year: "2025",
  //   doi: "10.xxxx/xxxxx",
  //   url: "https://doi.org/...",
  //   status: "published",
  // },
  // {
  //   id: "pub-2",
  //   title: "Conference Paper Title",
  //   authors: "Rai, S., et al.",
  //   conference: "Conference Name",
  //   year: "2024",
  //   status: "published",
  // },

  // Placeholder — remove and replace with your real publications
  {
    id: "pub-placeholder",
    title: "Publication details coming soon",
    authors: "Sandesh Rai",
    year: "2025",
    status: "in_progress",
  },
];

// Group publications by status for display
export function getPublicationsByStatus() {
  return {
    published: publications.filter((p) => p.status === "published"),
    accepted: publications.filter((p) => p.status === "accepted"),
    inProgress: publications.filter((p) => p.status === "in_progress"),
    submitted: publications.filter((p) => p.status === "submitted"),
  };
}