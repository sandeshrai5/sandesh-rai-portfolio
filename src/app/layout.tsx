import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { FloatingContactButton } from "@/components/contact/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandesh Rai | Climate Change Researcher",
  description:
    "Agricultural Engineer | Climate Change Researcher | Water Resources & Irrigation Specialist. Based in Kathmandu, Nepal.",
  keywords: [
    "Sandesh Rai",
    "Climate Change",
    "Agricultural Engineering",
    "Water Resources",
    "Irrigation",
    "Nepal",
    "GIS",
    "Remote Sensing",
  ],
  authors: [{ name: "Sandesh Rai" }],
  openGraph: {
    title: "Sandesh Rai | Climate Change Researcher",
    description:
      "Agricultural Engineer | Climate Change Researcher | Water Resources & Irrigation Specialist",
    type: "website",
    locale: "en_US",
    url: "https://sandeshrai.info.np",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex">
            <main className="flex-1">{children}</main>
            <ContactSidebar />
          </div>
          <FloatingContactButton />
        </ThemeProvider>
      </body>
    </html>
  );
}