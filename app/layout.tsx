import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import CardDataProvider from "@/context/CardDataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freye",
  description: "Freye Official App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <CardDataProvider>{children}</CardDataProvider>
      </body>
    </html>
  );
}
