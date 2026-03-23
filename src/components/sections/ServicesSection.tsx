"use client";
import { motion } from "framer-motion";
import { Printer, Monitor, ShieldCheck, Cpu, ArrowRight, Laptop, Globe, HardDrive } from "lucide-react";

export default function ServicesSection() {
  const categories = [
    {
      title: "Servicios para Impresoras",
      icon: <Printer className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-brand-blue",
      items: [
        "Diagnóstico general",
        "Reparación multimarca",
        "Mantenimiento preventivo",
        "Limpieza de circuitos",
        "Instalación y red",
        "Reparación de carcasas",
        "Venta de tintas y tóner"
      ]
    },
    {
      title: "Servicios para Computadores",
      icon: <Monitor className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-indigo-600",
      items: [
        "Diagnóstico general",
        "Software, Hardware y Board",
        "Reparación de chip de video",
        "Cambio de pantallas",
        "Eliminación de virus y recuperación",
        "Instalación de S.O. (Windows, Mac)",
        "Instalación de discos duros y RAM"
      ]
    },
    {
      title: "Servicios Avanzados",
      icon: <Cpu className="w-8 h-8 text-white" />,
      color: "from-orange-500 to-red-600",
      items: [
        "Lubricación de ventiladores",
        "Mantenimiento de software",
        "Optimización de rendimiento",
        "Diagnóstico eléctrico especializado",
        "Mantenimiento profundo MAC",
        "Limpieza interna exhaustiva",
        "Respaldo de Información Critica"
      ]
    },
    {
      title: "Servicios Digitales",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "from-emerald-500 to-teal-600",
      items: [
        "Diseño de páginas web",
        "Landing pages optimizadas",
        "Posicionamiento SEO",
        "Marketing digital para pymes",
        "Software de gestión de talleres",
        "Soporte digital remoto",
        "Asesoría tecnológica"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-black tracking-widest text-sm uppercase bg-blue-100 px-4 py-1 rounded-full">Nuestro Potencial</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 tracking-tight mb-6"
          >
            Soporte integral para <span className="text-brand-blue">tu ecosistema tecnológico</span>
          </motion.h2>
          <p className="text-lg text-slate-600 font-medium">Abordamos todas las áreas críticas para garantizar que las empresas, negocios y hogares nunca detengan sus operaciones comerciales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group"
            >
              <div className={`p-8 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-4 -translate-y-4 scale-150">
                  {category.icon}
                </div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm shadow-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{category.title}</h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 flex-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/573054568996?text=Hola,%20me%20interesan%20los%20${category.title}`} 
                  className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-brand-blue font-bold uppercase tracking-wider text-sm hover:text-blue-800 transition-colors group"
                >
                  Solicitar Soporte
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
