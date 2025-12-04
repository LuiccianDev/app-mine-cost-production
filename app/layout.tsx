import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mining Costs and Production",
  description: "Cost and production calculator for mining operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll scrollbar-hide">
      <body
        className="antialiased flex flex-col min-h-screen overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
