import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "De Vuelta a Casa",
  description: "Una aplicación para ayudar a encontrar a lomitos extraviados",
  icons: { icon: "/images/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="min-h-screen bg-stone-50 font-sans text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}
