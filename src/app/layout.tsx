import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import AIAssistantWidget from "@/components/integrations/AIAssistantWidget";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "C&C Especialistas en Impresoras | Reparación en Medellín y Colombia",
  description: "Soluciones tecnológicas integrales para empresas y hogares. Expertos en reparación de impresoras Epson, HP, Canon, mantenimiento de computadores y servidores. +17 años de experiencia desde 2006. Medellín y Colombia.",
  keywords: "reparación de impresoras Medellín, servicio técnico Epson Medellín, mantenimiento impresoras Colombia, reparación computadores, venta suministros toner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
        <AIAssistantWidget />
      </body>
    </html>
  );
}
