import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const almarai = Almarai({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "AE Marine | Leading Shipbroker & Marine Consultant in Singapore",
  description: "Incorporated in 2012, AE Marine is a premier independent shipbroker and commercial manager in Singapore with 50+ years of combined experience in tanker chartering and global maritime solutions.",
  keywords: [
    "AE Marine",
    "Shipbroker Singapore",
    "Marine Consultant Singapore",
    "Tanker Chartering",
    "Vessel Brokerage",
    "Maritime Logistics",
    "Energy Market Analysis",
    "Shipbroking Services",
    "Commercial Management",
    "Vessel Chartering Asia"
  ],
  authors: [{ name: "AE Marine" }],
  creator: "AE Marine",
  publisher: "AE Marine",
  robots: "index, follow",
  openGraph: {
    title: "AE Marine | Premier Shipbroker & Marine Consultant",
    description: "Leading independent shipbroker in Singapore providing expert tanker chartering and innovative maritime solutions. Committed to integrity and performance since decades.",
    url: "https://aemarine.sg",
    siteName: "AE Marine",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "AE Marine Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AE Marine | Premier Shipbroker & Marine Consultant",
    description: "Expert tanker chartering and maritime consultancy services in Singapore.",
    images: ["/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${almarai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
