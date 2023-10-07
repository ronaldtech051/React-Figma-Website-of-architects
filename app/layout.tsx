import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Website of Architects - Figma to React",
  description: "A Figma to React demonstration website by endan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex justify-center bg-gradient-to-b from-woa-black-700/90 to-woa-black-800`}>
        <div className="w-[1440px] overflow-hidden">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
