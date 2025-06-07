
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Full-stack developer passionate about creating amazing web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
