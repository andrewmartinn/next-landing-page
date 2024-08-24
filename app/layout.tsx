import "@/styles/globals.css";
import { radioCanada } from "@/styles/fonts";
import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Analytics - AI-Powered Data Insights",
  description:
    "Nova Analytics: Revolutionizing data-driven decisions with AI-powered insights, predictive analytics, and customizable dashboards.",
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
