"use client";
import { Youtube, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function YoutubeSection() {
  const videos = [
    { title: "¿Por qué tu impresora imprime rayas?", desc: "Guía rápida de diagnóstico de inyectores.", img: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=600&q=80" },
    { title: "Cómo evitar daños en Laptops", desc: "Tips de mantenimiento térmico preventivo.", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80" },
    { title: "Mantenimiento Servidores NAS", desc: "Aseo del centro de datos.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80", hideMobile: true },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <span className="bg-red-50 text-red-600 px-4 py-1.5 text-xs font-black rounded-full uppercase tracking-widest mb-4 inline-block border border-red-200">Educación Técnica Nivel 3</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">Aprende antes de reparar</h2>
            <p className="text-gray-600 mt-4 font-medium text-lg leading-relaxed">Compartimos nuestro conocimiento técnico abiertamente para que evites fallas costosas en tus equipos.</p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#" className="flex items-center gap-3 bg-red-600 hover:bg-red-700 hover:-translate-y-1 text-white px-8 py-4 rounded-xl font-extrabold transition-all shadow-xl shadow-red-200 uppercase tracking-widest text-sm text-center">
              <Youtube size={24} /> Visitar Canal
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`group cursor-pointer flex flex-col ${vid.hideMobile ? 'hidden lg:flex' : ''}`}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-200 mb-6 shadow-lg outline outline-0 outline-offset-4 outline-red-500 group-hover:outline-[3px] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center group-hover:bg-black/40 transition-colors z-10">
                  <div className="w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-2xl">
                    <Play className="ml-1" size={32} />
                  </div>
                </div>
                <img src={vid.img} alt={vid.title} className="max-w-full absolute inset-0 object-cover h-full transform group-hover:scale-110 transition-transform duration-700 mix-blend-overlay z-0" />
              </div>
              <h4 className="font-extrabold text-slate-800 text-xl group-hover:text-red-600 transition-colors leading-tight">{vid.title}</h4>
              <p className="text-sm font-medium text-gray-500 mt-2">{vid.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
