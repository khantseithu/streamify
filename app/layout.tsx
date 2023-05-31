import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import Player from "@/components/Player";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Streamify",
  description: "Listen to your favorite songs for free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar>{children}</Sidebar>
        <Player />
      </body>
    </html>
  );
}
