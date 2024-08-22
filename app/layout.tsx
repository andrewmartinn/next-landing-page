import "@/styles/globals.css";
import type { Metadata } from "next";
import { radioCanada } from "@/styles/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Nextjs Landing Page",
  description: "Saas Marketing Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(radioCanada.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
