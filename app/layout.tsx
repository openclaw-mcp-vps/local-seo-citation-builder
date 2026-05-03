import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO Citation Builder – Auto-submit to 50+ Directories",
  description: "Automatically submit your business to 50+ local citation sites and directories. Monitor listings for accuracy. Built for local business owners and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c9bb1cca-52eb-4d1d-bfb3-0182c3d4085f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
