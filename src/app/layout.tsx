"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNavbar } from "./Components/SideBar/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="mytheme text-foreground overflow-hidden p-4">
            <div className="flex">
              <SideNavbar />
              <div className="mm:w-full ml:w-full sm:w-fullv md:w-full lg:w-full xl:w-full 2xl:w-full 3xl:w-full 4xl:w-full px-3 custom-scrollbar bg-white rounded-medium">
                <div className="mt-2 pb-3">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
