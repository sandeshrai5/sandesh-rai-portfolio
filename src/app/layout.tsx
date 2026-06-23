import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { FloatingContactButton } from "@/components/contact/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandesh Rai | Climate Change Researcher & GIS Analyst",
  description:
    "Portfolio of Sandesh Rai — MSc in Climate Change and Development, specializing in water resources, irrigation systems, hydrological modeling, GIS, and remote sensing in Nepal.",
  keywords: [
    "Sandesh Rai",
    "Climate Change",
    "Water Resources",
    "GIS",
    "Remote Sensing",
    "Hydrological Modeling",
    "Nepal",
    "Irrigation",
    "Researcher",
  ],
  authors: [{ name: "Sandesh Rai" }],
  openGraph: {
    title: "Sandesh Rai | Climate Change Researcher & GIS Analyst",
    description:
      "Portfolio of Sandesh Rai — specializing in climate change impacts on water resources and irrigation systems in Nepal.",
    url: "https://sandeshrai.info.np",
    siteName: "Sandesh Rai Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <ContactSidebar />
          <FloatingContactButton />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}