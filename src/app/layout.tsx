import "./globals.css";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import Providers from "@/Providers";
import { Layout } from "../components/Layout";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evacelse",
  description: "E-Learning pour les futurs médecins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
