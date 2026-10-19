"use client";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Carlos Ruiz",
      role: "Gerente Logística (Medellín - El Poblado)",
      img: "11",
      text: "Recuperaron nuestras impresoras Epson EcoTank y computadores de facturación en tiempo récord. Sufríamos constantes atascos de papel y bloqueo de almohadillas. Diagnóstico rápido, honesto y con repuestos originales."
    },
    {
      name: "Andrés Restrepo",
      role: "Consultorio Médico (Bello - Niquía)",
      img: "5",
      text: "Excelente servicio a domicilio. Recogieron las impresoras y dos computadores de nuestro consultorio en Bello y los devolvieron el mismo día 100% calibrados y repotenciados con unidades SSD. 10/10 en cumplimiento y factura electrónica."
    },
    {
      name: "Fernando Torres",
      role: "Servicios Contables SA (Envigado)",
      img: "60",
      text: "No solo arreglan impresoras láser y portátiles, nos asesoraron en el mantenimiento preventivo periódico de toda la red de oficina en Envigado. Mucho profesionalismo, precios justos y garantía escrita."
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-brand-dark border-b border-slate-800 relative z-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Confianza nacional comprobada</h2>
          <div className="flex items-center justify-center gap-3 mb-6 bg-slate-800/50 w-fit mx-auto px-6 py-2 rounded-full border border-slate-700">
            <span className="text-2xl text-brand-accent font-black">4.9/5</span>
            <div className="flex text-brand-accent">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Basado en cientos de reseñas de empresas en nuestra trayectoria técnica a nivel nacional.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`bg-slate-800 p-10 rounded-3xl relative shadow-2xl border ${idx === 1 ? 'border-brand-blue/50 md:-translate-y-8 bg-gradient-to-b from-slate-800 to-slate-800/80' : 'border-slate-700'} group`}
            >
              <Quote className="text-slate-700/50 absolute top-8 right-8 rotate-180 transition-transform group-hover:-rotate-12" size={60} />
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 shrink-0">
                  <div className={`w-16 h-16 rounded-full border-4 border-brand-blue/30 flex items-center justify-center font-black text-xl text-white shadow-inner ${
                    idx === 0 ? "bg-gradient-to-tr from-blue-600 to-indigo-700" :
                    idx === 1 ? "bg-gradient-to-tr from-purple-600 to-pink-600" :
                    "bg-gradient-to-tr from-emerald-600 to-teal-700"
                  }`}>
                    {test.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-brand-accent text-slate-900 rounded-full w-6 h-6 flex items-center justify-center shadow">
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-lg">{test.name}</h4>
                  <p className="text-xs text-brand-accent uppercase tracking-wider font-bold">{test.role}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-loose italic relative z-10">
                "{test.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
