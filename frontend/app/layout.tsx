import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoMaintainer AI",
  description: "Autonomous code improvement agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
