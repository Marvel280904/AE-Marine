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
  title: "AE Marine",
  description: "Professional tanker chartering, brokerage, and commercial management services across Asia Pacific and international markets.",
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
