import type { Metadata } from "next";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
