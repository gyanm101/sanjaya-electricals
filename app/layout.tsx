import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanjayaelectricals.com"),

  title: "Electrical & Civil Contractor in Puri | Sanjaya Electricals",

  description:
    "Sanjaya Electricals provides electrical, civil construction, maintenance and solar services for homes, businesses and industries in Puri, Odisha.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Electrical & Civil Contractor in Puri | Sanjaya Electricals",
    description:
      "Electrical, civil construction, maintenance and solar services for residential, commercial and industrial projects in Puri, Odisha.",
    url: "https://www.sanjayaelectricals.com",
    siteName: "Sanjaya Electricals & Civil Contractors",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}