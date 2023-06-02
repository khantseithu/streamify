import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { Figtree } from "next/font/google";
import "./globals.css";
import ModalProvider from "./providers/ModalProvider";

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
        <ModalProvider />
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
