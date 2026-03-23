"use client";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SoftwareSection() {
  return (
    <section id="software" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 mix-blend-screen"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-brand-blue/20 via-transparent to-transparent opacity-80 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-accent/10 via-transparent to-transparent opacity-60 z-0 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-black text-xs tracking-[0.2em] backdrop-blur-md mb-8 uppercase border border-white/20 shadow-lg"
            >
              Exclusivo para Talleres Tech
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              Control total en tu taller al <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">siguiente nivel</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-white/80 text-lg sm:text-xl leading-relaxed"
            >
              Software SaaS inteligente. Inventarios, facturación, y <b>gestión automática de tickets técnicos</b> para escalar tu negocio sin caos.
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-5 font-bold text-lg"
            >
              <li className="flex items-center gap-4"><div className="bg-brand-accent/20 p-2 rounded-xl border border-brand-accent/30 shadow-[0_0_15px_rgba(255,214,0,0.3)]"><CheckCircle2 className="text-brand-accent h-6 w-6" /></div> Control absoluto de garantías</li>
              <li className="flex items-center gap-4"><div className="bg-brand-accent/20 p-2 rounded-xl border border-brand-accent/30 shadow-[0_0_15px_rgba(255,214,0,0.3)]"><CheckCircle2 className="text-brand-accent h-6 w-6" /></div> Seguimiento web 24/7 para el cliente</li>
              <li className="flex items-center gap-4"><div className="bg-brand-accent/20 p-2 rounded-xl border border-brand-accent/30 shadow-[0_0_15px_rgba(255,214,0,0.3)]"><CheckCircle2 className="text-brand-accent h-6 w-6" /></div> Integración financiera y cierres de caja</li>
            </motion.ul>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex"
            >
              <button className="bg-gradient-to-r from-brand-accent to-yellow-400 text-slate-900 px-8 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(255,214,0,0.6)] hover:-translate-y-1 transition-all flex items-center gap-3 w-full sm:w-auto justify-center group uppercase tracking-wider">
                Solicitar Demo <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:w-1/2 w-full perspective-1000"
          >
            <div className="bg-slate-900 p-2 rounded-3xl shadow-2xl border min-h-[400px] border-slate-700/50 transform lg:rotate-2 lg:hover:rotate-0 transition-transform duration-700 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-50 pointer-events-none z-10"></div>
              
              <div className="flex gap-2.5 mb-4 mt-3 mx-4 items-center border-b border-slate-800 pb-4">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-lg shadow-rose-500/50"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
                <div className="ml-4 flex-grow bg-slate-800 h-6 rounded-md opacity-50"></div>
              </div>
              <div className="px-2">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard Software" className="rounded-xl border border-slate-700 w-full object-cover h-[350px] opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
