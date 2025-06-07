import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Photo Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-950">{children}</body>
    </html>
  );
}
