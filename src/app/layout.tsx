import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio: Mustafa",
};

export default function RootLayout({
  children,
  details
}: {
  children: React.ReactNode;
  details: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary md:mx-10 md:my-10 md: lg:mx-[300px] lg:my-10`}>
        <div className="lg:flex border-4 border-sky-500 h-full lg:max-h-[500px]">
          {children}
          {details}
        </div>
      </body>
    </html>
  );
}
