import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjaya Electricals & Civil Contractors | Puri, Odisha",
  description:
    "Electrical services, civil construction, residential, commercial, industrial, maintenance and solar solutions in Puri, Odisha."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
