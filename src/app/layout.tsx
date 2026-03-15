import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gavronowich | Strzelnica Taktyczna",
  description: "Profesjonalna strzelnica taktyczna w Polsce. Szkolenia strzeleckie, eventy firmowe, imprezy okolicznościowe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
