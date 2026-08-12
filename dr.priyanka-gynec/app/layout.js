import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Dr. Priyanka Gynec – Expert Gynecology, IVF & Pregnancy Care",
  description:
    "Trusted women's health center offering advanced gynecology, laparoscopy, fertility & IVF, pregnancy support with expert care and personalized treatment inMoradabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
