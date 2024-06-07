import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
      <body className={`${inter.className} bg-primary flex justify-center md:px-20 sm:px-20 px-20 h-screen min-w-[150px]`}>
        <div className="lg:flex w-full max-w-[1300px] min-h-screen flex flex-col">
          <div className="lg:fixed lg:w-[40%] lg:h-[95%]">
            {children}
          </div>
          <div>
            {details}
          </div>
        </div>
      </body>
    </html>
  );
}
