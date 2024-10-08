import { poppins } from "@/lib/ui/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <main className="mx-3 my-4">
          <div className="page border rounded-3xl p-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
