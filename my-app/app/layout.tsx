import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Summary App",
  description: "AI-powered document summary application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
