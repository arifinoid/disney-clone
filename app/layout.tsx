import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "A Disney+ clone built with Next.js 15 and TheMovieDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
