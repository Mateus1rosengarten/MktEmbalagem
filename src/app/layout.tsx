import type { Metadata } from "next";
import localFont from "next/font/local";
import SideBarProvider from "./components/context/sidebarContext";
import Navigation from "./components/navigation";
import Footer  from "./components/Footer.jsx"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WebSite Fernanda Mauricio",
  description: "Website empresa Fernanda Mauricio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  <SideBarProvider>
    <Navigation />
   
  
    <div className="flex flex-col min-h-screen">
        {children}
    </div>
    <Footer />
    </SideBarProvider>
      </body>
    </html>
  );
}
