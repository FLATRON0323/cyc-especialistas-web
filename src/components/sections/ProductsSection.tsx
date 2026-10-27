import { ShoppingCart, HardDrive, Cpu, Printer, Wrench, ShieldCheck, Truck, Sparkles } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";

export default function ProductsSection() {
  const products = [
    {
      title: "Tintas Originales y Premium",
      subtitle: "Epson 544, 504, 664 | Canon GI-190 | HP GT53 | Brother",
      badge: "Más Vendido",
      img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80",
      msg: "Hola, quiero cotizar tintas para mi impresora (indicar modelo)",
      type: "img",
    },
    {
      title: "Cartuchos de Tóner Láser",
      subtitle: "HP 85A, 83A, 58A, 105A | Brother TN1060, TN2370 | Kyocera",
      badge: "Empresarial",
      icon: <Printer size={70} className="text-brand-blue opacity-70" />,
      msg: "Hola, quiero cotizar tóner láser para mi impresora",
      type: "icon",
    },
    {
      title: "Cabezales de Impresión Nuevos",
      subtitle: "Cabezales originales Epson L3110, L3250, L4150, L805 y Canon",
      badge: "Garantía Oficial",
      icon: <Wrench size={70} className="text-emerald-500 opacity-80" />,
      msg: "Hola, necesito cotizar un cabezal nuevo para mi impresora",
      type: "icon",
    },
    {
      title: "Cajas de Almohadillas y Chips",
      subtitle: "Tanques de mantenimiento y chips de reseteo para Epson y Canon",
      badge: "Stock Inmediato",
      icon: <ShieldCheck size={70} className="text-purple-500 opacity-80" />,
      msg: "Hola, necesito almohadillas o chip de reseteo para Epson",
      type: "icon",
    },
    {
      title: "Discos Sólidos SSD (NVMe y SATA)",
      subtitle: "Kingston, Crucial, Lexar 240GB, 480GB, 1TB con instalación",
      badge: "Velocidad 10x",
      icon: <HardDrive size={70} className="text-brand-blue opacity-70" />,
      msg: "Hola, quiero repotenciar mi computador con disco sólido SSD",
      type: "icon",
    },
    {
      title: "Memorias RAM DDR4 y DDR5",
      subtitle: "Módulos de 8GB y 16GB para portátiles y computadores de escritorio",
      badge: "Rendimiento",
      icon: <Cpu size={70} className="text-brand-blue opacity-70" />,
      msg: "Hola, quiero cotizar memoria RAM para mi portátil o PC",
      type: "icon",
    },
    {
      title: "Unidades Fusoras y Filminas",
      subtitle: "Rodillos fusores, filminas térmicas y pickup roller para HP y Brother",
      badge: "Repuesto Crítico",
      icon: <Wrench size={70} className="text-amber-500 opacity-80" />,
      msg: "Hola, necesito repuestos de fusor o rodillos de papel",
      type: "icon",
    },
    {
      title: "Computadores Nuevos y Usados",
      subtitle: "Laptops y computadores All-in-One repotenciados con garantía",
      badge: "Garantizados",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80",
      msg: "Hola, quiero información sobre computadores disponibles",
      type: "img",
    },
  ];

  return (
    <section id="productos" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-200 pb-8 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-blue font-black tracking-widest text-xs uppercase flex items-center gap-1.5 mb-2">
              <Sparkles size={14} /> Suministros y Repuestos con Entrega en el Valle de Aburrá
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Suministros Originales y Repuestos Técnicos en Stock
            </h2>
            <p className="text-gray-600 mt-3 text-base md:text-lg leading-relaxed">
              No arriesgues tus impresoras con tintas aguadas que tapen los cabezales ni con piezas genéricas defectuosas. Disponemos de repuestos probados en nuestro propio taller con garantía directa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Truck size={14} /> Domicilio y Despacho el Mismo Día
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
              <ShieldCheck size={14} className="text-brand-blue" /> Factura Electrónica
            </span>
          </div>
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-1 relative"
            >
              {/* Badge de Categoría */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white px-2.5 py-1 rounded-full shadow-sm">
                  {prod.badge}
                </span>
              </div>

              {/* Contenedor Visual */}
              <div className="bg-slate-50 rounded-2xl aspect-square mb-5 flex items-center justify-center p-6 overflow-hidden border border-gray-100">
                {prod.type === "img" ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={prod.img || ""} 
                      alt={prod.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="transform group-hover:scale-110 transition-transform duration-500 group-hover:text-brand-blue">
                    {prod.icon}
                  </div>
                )}
              </div>

              {/* Textos */}
              <div className="flex-grow space-y-1.5">
                <h3 className="font-extrabold text-slate-900 text-base leading-snug">{prod.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{prod.subtitle}</p>
              </div>

              {/* Botón de Cotización */}
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(prod.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-5 bg-slate-900 hover:bg-brand-blue text-white font-bold py-3 rounded-xl text-center flex justify-center items-center gap-2 transition-all uppercase tracking-wider text-xs shadow-md shadow-slate-900/10 hover:shadow-brand-blue/30"
              >
                <ShoppingCart size={15} /> Cotizar por WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Banner Inferior de Garantía */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="text-emerald-400" size={22} /> ¿Buscas un repuesto o suministro específico que no ves en la lista?
            </h4>
            <p className="text-slate-300 text-sm">
              Pregúntanos por WhatsApp con la foto de la parte o el modelo de tu impresora. Conseguimos repuestos de difícil acceso con entrega inmediata en Medellín.
            </p>
          </div>
          <a
            href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20busco%20un%20repuesto%20o%20suministro%20específico`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition shrink-0 shadow-lg shadow-emerald-600/30 flex items-center gap-2"
          >
            Consultar Repuesto con un Técnico
          </a>
        </div>

      </div>
    </section>
  );
}
