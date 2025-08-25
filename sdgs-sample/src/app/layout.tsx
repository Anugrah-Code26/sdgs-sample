import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SDGS Sample",
  description: "UN SDG Goals UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100 text-gray-900 min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-1 w-full p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
