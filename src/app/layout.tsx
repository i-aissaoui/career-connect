import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Connect",
  description: "Discover Your Perfect Career Path",
  icons: {
    icon: "/bag.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
