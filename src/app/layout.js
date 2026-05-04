import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://mango-books.vercel.app'),
  title: "MangoBooks | Your Premium Digital Library",
  description: "Explore, discover, and borrow the best collection of tech, science, and literature books on MangoBooks.",
  keywords: ["Library", "Books", "Tech Books", "MERN Stack", "MangoBooks"],
  authors: [{ name: "Amirul Islam" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-950 text-white">
        <Navbar/>
        <main className="container mx-auto px-4">
        {children}
        </main>
        <Footer/>
        <ToastContainer/>
      </body>
    </html>
  );
}
