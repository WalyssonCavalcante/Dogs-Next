import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dogs",
  description: "Rede social para cachorros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
