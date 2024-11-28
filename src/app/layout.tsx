import type { Metadata } from "next";
import "./_styles/globals.css";
import { Overpass } from "next/font/google";
import Header from "./_components/Header";

const roboto = Overpass({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ATB - WEBAPP",
  description: "ATB fun web application, enjoy the real music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased  min-h-dvh flex flex-col bg-black bg-bgmain bg-cover relative`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
