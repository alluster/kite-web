import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { Maven_Pro } from "next/font/google";

import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const prompt = Prompt({
	subsets: ["latin"],
	weight: "400"
});
const mavenPro = Maven_Pro({
	subsets: ["latin"],
	weight: "400"
});

export const metadata: Metadata = {
  title: "Kite",
  description: "Kite for RFP Processes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${prompt.className} ${mavenPro.className}`}>
	  <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
