import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import AIAssistantWidget from "@/components/integrations/AIAssistantWidget";
import { SITE_CONFIG } from "@/config/site";

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
  metadataBase: new URL(SITE_CONFIG.domainUrl),
  title: "C&C Especialistas en Impresoras | Reparación en Medellín y Colombia",
  description: "Soluciones tecnológicas integrales para empresas y hogares. Expertos en reparación de impresoras Epson, HP, Canon, mantenimiento de computadores y servidores. +17 años de experiencia desde 2006. Medellín y Colombia.",
  keywords: "reparación de impresoras Medellín, servicio técnico Epson Medellín, mantenimiento impresoras Colombia, reparación computadores, venta suministros toner",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "C&C Especialistas en Impresoras | Soporte en Medellín y Colombia",
    description: "Servicio técnico de impresoras y computadores desde Medellín para toda Colombia. +17 años de experiencia.",
    url: SITE_CONFIG.domainUrl,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo C&C Especialistas",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C&C Especialistas en Impresoras",
    description: "Servicio técnico especializado en Medellín y envíos nacionales.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_CONFIG.domainUrl}/#localbusiness`,
        "name": SITE_CONFIG.name,
        "image": `${SITE_CONFIG.domainUrl}/logo.png`,
        "url": SITE_CONFIG.domainUrl,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Medellín, Antioquia, Colombia",
          "addressLocality": "Medellín",
          "addressRegion": "Antioquia",
          "postalCode": "050001",
          "addressCountry": "CO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.2442,
          "longitude": -75.5812
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "12:00",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          SITE_CONFIG.facebook,
          SITE_CONFIG.instagram,
          SITE_CONFIG.youtube
        ]
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domainUrl}/#service-impresoras`,
        "serviceType": "Reparación y Mantenimiento de Impresoras",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${SITE_CONFIG.domainUrl}/#localbusiness`
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Medellín"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Antioquia"
          },
          {
            "@type": "Country",
            "name": "Colombia"
          }
        ],
        "description": "Servicio técnico especializado para impresoras Epson, Canon, HP, Brother, Ricoh y Kyocera. Limpieza de cabezales, reseteo de almohadillas, solución a problemas de arrastre de papel y mantenimiento preventivo."
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.domainUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Dónde está ubicado el local de C&C Especialistas en Impresoras?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestro centro de servicio especializado principal está ubicado en Medellín, Antioquia. Prestamos servicio a domicilio y cobertura presencial directa en zonas como El Poblado, Laureles, Envigado, Sabaneta, Bello e Itagüí."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo funciona el servicio técnico de reparación si estoy fuera de Medellín o de Antioquia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Somos un referente nacional en reparación. Si te encuentras en Bogotá, Cali, Barranquilla, Bucaramanga o cualquier otro municipio de Colombia, puedes enviarnos tu impresora o computador de forma segura a través de empresas transportadoras aliadas. Diagnosticamos tu equipo en nuestro taller de Medellín y lo devolvemos reparado."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta el diagnóstico técnico de mi impresora o computador?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La revisión y diagnóstico detallado en nuestro local físico tiene un costo base de $40.000 COP. Si apruebas la reparación, el costo del diagnóstico se abona al valor final del servicio técnico."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
        <AIAssistantWidget />
      </body>
    </html>
  );
}
