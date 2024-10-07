import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Scrap Figures",
  description: "Sculptures Built with Passion and Precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
