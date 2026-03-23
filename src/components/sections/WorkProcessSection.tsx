"use client";
import { motion } from "framer-motion";
import { MessageSquare, PackageOpen, Wrench, FileSearch, Banknote, ShieldCheck } from "lucide-react";

export default function WorkProcessSection() {
  const steps = [
    { num: "01", title: "Escríbenos", desc: "Contáctanos por WhatsApp para iniciar", icon: <MessageSquare size={20} /> },
    { num: "02", title: "Diagnóstico técnico", desc: "Revisión especializada de la falla", icon: <FileSearch size={20} /> },
    { num: "03", title: "Cotización clara", desc: "Presupuesto transparente y honesto", icon: <Banknote size={20} /> },
    { num: "04", title: "Tu aprobación", desc: "Autorizas antes de proceder", icon: <ShieldCheck size={20} /> },
    { num: "05", title: "Reparación pro", desc: "Ejecutamos el arreglo garantizado", icon: <Wrench size={20} /> },
    { num: "06", title: "Entrega (Garantía)", desc: "Te devolvemos tu equipo perfecto", icon: <PackageOpen size={20} /> },
  ];

  return (
    <section id="proceso" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-blue font-black tracking-widest text-sm uppercase bg-blue-100 px-4 py-1 rounded-full">Cero Sorpresas</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 tracking-tight">Nuestra metodología</h2>
          <p className="mt-4 text-gray-600 text-lg">Un proceso claro y transparente para eliminar objeciones y garantizar tu tranquilidad.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 relative">
          <div className="hidden lg:block absolute top-[44px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-brand-blue/20 via-brand-blue/50 to-brand-whatsapp/50 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-bold text-xl shadow-xl transition-all duration-300 mb-6
                ${idx === 5 ? 'bg-brand-whatsapp text-white shadow-green-500/30' : 'bg-white border text-brand-blue border-gray-100 shadow-brand-blue/10'} 
                group-hover:scale-110 group-hover:-translate-y-2`}
              >
                {step.icon}
                <span className="text-xs mt-1 opacity-50">{step.num}</span>
              </div>
              <h4 className="font-extrabold text-base mb-2 text-slate-800 uppercase tracking-wide">{step.title}</h4>
              <p className="text-sm text-gray-500 hidden md:block leading-relaxed max-w-[150px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
