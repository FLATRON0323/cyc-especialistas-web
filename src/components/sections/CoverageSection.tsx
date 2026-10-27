import { MapPin, CheckCircle, ShieldCheck, Phone, Wrench, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import Link from "next/link";

export default function CoverageSection() {
  const municipalities = [
    {
      name: "Medellín (Taller Central & Domicilio)",
      desc: "Taller físico principal en Santa Cruz y atención a domicilio en El Poblado, Laureles, Belén, Centro, Guayabal, Robledo y Castilla.",
      badge: "Sede Central",
      popular: true,
      url: SITE_CONFIG.googleMapsUrl,
      isExternal: true,
      buttonText: "Ver Sede en Google Maps",
      services: [
        "Revisión y diagnóstico en taller ($40.000)",
        "Destape ultrasónico de cabezales Epson y Canon",
        "Mantenimiento de fusores láser HP y Brother",
        "Repotenciación de PC y laptops con SSD y RAM",
      ]
    },
    {
      name: "Bello y Norte del Valle de Aburrá",
      desc: "Atención técnica rápida en Niquía, Parque de Bello, Cabañas, Navarra, Alcalá, Zamora, Copacabana y Girardota.",
      badge: "Zona Norte",
      popular: false,
      url: "/bello",
      isExternal: false,
      buttonText: "Ver Cobertura Bello",
      services: [
        "Reset y cambio físico de almohadillas EEPROM",
        "Destape de inyectores Epson EcoTank",
        "Solución a atascos continuos de papel",
        "Recogida y entrega empresarial programada",
      ]
    },
    {
      name: "Envigado y Sector Empresarial",
      desc: "Servicio corporativo para empresas, notarías y consultorios en Zúñiga, Jardines, Otraparte, Alcalá y El Poblado.",
      badge: "Zona Sur",
      popular: false,
      url: "/envigado",
      isExternal: false,
      buttonText: "Ver Cobertura Envigado",
      services: [
        "Mantenimiento láser HP, Brother y Kyocera",
        "Contratos preventivos para oficinas",
        "Venta de tóner original y genérico premium",
        "Facturación electrónica Dian con garantía",
      ]
    },
    {
      name: "Itagüí, Sabaneta, La Estrella y Caldas",
      desc: "Soporte técnico para parques industriales, bodegas, distribuidoras y comercio en Autopista Sur, Ditaires, San Fernando y Sabaneta.",
      badge: "Zona Industrial",
      popular: false,
      url: "/itagui-sabaneta",
      isExternal: false,
      buttonText: "Ver Cobertura Itagüí & Sabaneta",
      services: [
        "Mantenimiento de impresoras térmicas y POS",
        "Reparación de multifuncionales de alto volumen",
        "Repotenciación de computadores empresariales",
        "Ruta diaria de mensajería técnica en el Sur",
      ]
    }
  ];

  return (
    <section id="cobertura" className="py-24 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-black tracking-widest text-xs uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Cobertura Valle de Aburrá
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-6 tracking-tight">
            Mantenimiento de Impresoras y Computadores en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Medellín, Bello y Envigado</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base md:text-lg">
            Solucionamos fallas críticas de impresión y cómputo con sede física en Medellín y recogida programada en los 10 municipios del área metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {municipalities.map((item, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                item.popular 
                  ? "bg-slate-800/90 border-blue-500/50 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/30" 
                  : "bg-slate-800/40 border-slate-700/60 hover:border-slate-600"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {item.badge}
                  </span>
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                
                <h3 className="text-xl font-extrabold text-white mb-3">
                  {item.name}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="border-t border-slate-700/60 pt-5 mb-6">
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-3">
                    Servicios destacados:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    {item.services.map((srv, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {item.isExternal ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-blue-600/20"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    href={item.url}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs transition-all border border-slate-600"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
                
                <a
                  href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20servicio%20técnico%20para%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-emerald-600/20"
                >
                  <Phone size={14} />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 20 Áreas NAP Footer Tag */}
        <div className="mt-16 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 text-center">
          <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">
            Las 20 Áreas de Atención Prioritaria de C&amp;C Especialistas:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SITE_CONFIG.coverage.map((area, aIdx) => (
              <span key={aIdx} className="text-xs bg-slate-900 border border-slate-700 text-slate-300 px-3 py-1 rounded-lg">
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
