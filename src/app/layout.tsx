import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import AIAssistantWidget from "@/components/integrations/AIAssistantWidget";
import { SITE_CONFIG } from "@/config/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domainUrl),
  title: "Mantenimiento de Impresoras y Computadores en Medellín, Bello y Envigado | C&C Especialistas",
  description: "Servicio técnico especializado en mantenimiento y reparación de impresoras Epson, Canon, HP, Brother y Kyocera, y computadores en Medellín, Bello, Envigado y todo el Valle de Aburrá. Atención en taller y a domicilio para empresas. WhatsApp +57 305 456 8996.",
  keywords: "reparación de impresoras Medellín, mantenimiento de computadores Bello, servicio técnico impresoras Envigado, destape cabezales Epson, reset almohadillas, repotenciación SSD RAM",
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.domainUrl }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.legalName,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.domainUrl,
  },
  other: {
    "geo.region": "CO-ANT",
    "geo.placename": "Medellín, Antioquia, Colombia",
    "geo.position": `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
    "ICBM": `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
  },
  openGraph: {
    title: "C&C Especialistas en Impresión y Computadores | Medellín, Bello y Valle de Aburrá",
    description: "Más de 18 años de experiencia en reparación de impresoras Epson, Canon, HP, Brother, Kyocera y computadores. Taller en Medellín y domicilio empresarial en todo el Valle de Aburrá.",
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
    title: "C&C Especialistas en Impresión y Computadores",
    description: "Servicio técnico especializado en mantenimiento de impresoras y computadores en Medellín, Bello y Envigado.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.domainUrl}/#website`,
      "name": SITE_CONFIG.name,
      "alternateName": "C&C Especialistas",
      "url": SITE_CONFIG.domainUrl,
      "inLanguage": "es-CO",
    },
    {
      "@context": "https://schema.org",
      "@type": "ComputerStore",
      "@id": `${SITE_CONFIG.domainUrl}/#localbusiness`,
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domainUrl,
      "image": `${SITE_CONFIG.domainUrl}/logo.png`,
      "telephone": `+${SITE_CONFIG.phoneRaw}`,
      "currenciesAccepted": "COP",
      "paymentAccepted": "Efectivo, Transferencia Bancaria, Nequi, Bancolombia",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cl. 102 #49C-53 Int. 301, Santa Cruz",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "postalCode": "050003",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_CONFIG.geo.latitude,
        "longitude": SITE_CONFIG.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "hasMap": SITE_CONFIG.googleMapsUrl,
      "areaServed": SITE_CONFIG.coverage,
      "sameAs": [
        SITE_CONFIG.youtube,
        SITE_CONFIG.facebook,
        SITE_CONFIG.instagram,
        SITE_CONFIG.tiktok,
        SITE_CONFIG.cylexUrl
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1"
      },
      "knowsAbout": [
        "Reparación de impresoras Epson EcoTank",
        "Mantenimiento de impresoras láser HP, Brother y Kyocera",
        "Destape ultrasónico de cabezales e inyectores",
        "Reseteo de almohadillas y firmware EEPROM",
        "Reparación y repotenciación de computadores y laptops",
        "Instalación de unidades de estado sólido SSD y memoria RAM",
        "Mantenimiento preventivo empresarial para oficinas"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Técnicos Especializados",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Revisión y Diagnóstico Técnico en Taller",
              "description": "Desarme técnico y diagnóstico detallado de impresoras y computadores en sede física Santa Cruz."
            },
            "price": "40000",
            "priceCurrency": "COP"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Destape y Lavado de Cabezales de Impresoras",
              "description": "Lavado ultrasónico de inyectores para Epson EcoTank y Canon MegaTank."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Repotenciación de Computadores con SSD y RAM",
              "description": "Instalación de unidades de estado sólido y ampliación de memoria RAM para laptops y PC."
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.domainUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Realizan mantenimiento de impresoras a domicilio en Medellín, Bello y Envigado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, en C&C Especialistas en Impresión y Computadores atendemos en nuestro taller en Santa Cruz (Medellín) y ofrecemos servicio a domicilio y recogida programada para empresas, oficinas y consultorios en Medellín, Bello, Envigado, Itagüí, Sabaneta y todo el Valle de Aburrá."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué marcas de impresoras reparan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Somos especialistas multimarca en impresoras de inyección de tinta continua y láser: Epson, Canon, HP, Brother, Kyocera, Ricoh y Samsung. Realizamos destape de cabezales, cambio y reset de almohadillas, reparación de unidades fusoras y venta de tóner y tintas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta el diagnóstico técnico de mi impresora o computador?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La revisión y diagnóstico detallado en nuestro local físico en Santa Cruz tiene un costo base de $40.000 COP. Si apruebas la reparación, el costo del diagnóstico se abona al valor final del servicio técnico."
          }
        }
      ]
    }
  ];

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
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
