"use client";
import { Droplet, AlertTriangle, PowerOff, Hourglass, Network, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: <Hourglass size={40} />,
    title: "Está lento",
    desc: "Los programas tardan en abrir, el sistema se queda congelado o demoras mucho en arrancar.",
    msg: "Hola C&C, mi equipo está muy lento y necesito un diagnóstico.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    icon: <PowerOff size={40} />,
    title: "No enciende",
    desc: "Presionas el botón y no hace absolutamente nada, o la pantalla se queda negra.",
    msg: "Hola C&C, mi equipo de repente dejó de encender por completo.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <AlertTriangle size={40} />,
    title: "Se apaga solo",
    desc: "Estás trabajando y el equipo se reinicia inesperadamente o se apaga por sobrecalentamiento.",
    msg: "Hola C&C, mi computador se apaga solo y necesito revisarlo.",
    color: "from-red-600 to-rose-500"
  },
  {
    icon: <Network size={40} />,
    title: "Tiene virus",
    desc: "Aparecen ventanas emergentes raras, lentitud extrema, archivos bloqueados o carpetas ocultas.",
    msg: "Hola C&C, sospecho que mi computador tiene virus o malware.",
    color: "from-purple-600 to-indigo-500"
  },
  {
    icon: <Droplet size={40} />,
    title: "Imprime con líneas",
    desc: "La impresión sale borrosa, con rayas horizontales blancas o manchas fuertes de tinta.",
    msg: "Hola C&C, mi impresora está imprimiendo mal, con líneas o manchas.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <AlertTriangle size={40} />,
    title: "No reconoce cartuchos",
    desc: "La impresora marca error, parpadean luces y no detecta el tóner, cartucho o sistema continuo.",
    msg: "Hola C&C, la impresora marca error y no reconoce los cartuchos o tintas.",
    color: "from-rose-500 to-pink-600"
  }
];

export default function ProblemsSection() {
  return (
    <section id="soluciones" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-brand-dark to-brand-dark opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            ¿Tu equipo presenta alguno de estos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-300">problemas?</span>
          </motion.h2>
          <p className="text-lg text-slate-300 font-medium">Sabemos exactamente qué tiene. Selecciona el síntoma para recibir asistencia inmediata por parte de nuestros especialistas.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              href={`https://wa.me/573054568996?text=${encodeURIComponent(prob.msg)}`}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-brand-accent hover:bg-slate-800 transition-all group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/10"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${prob.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="text-brand-accent mb-6 transform group-hover:scale-110 transition-transform origin-left">{prob.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{prob.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{prob.desc}</p>
              
              <div className="mt-6 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-brand-accent text-sm font-bold flex items-center gap-1 uppercase tracking-wider">
                  Solucionar esto
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-700 group-hover:bg-brand-accent flex items-center justify-center transition-colors">
                  <ArrowRight size={14} className="text-white group-hover:text-brand-dark" />
                </div>
              </div>
            </motion.a>
          ))}

          {/* Fallback CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl p-8 border border-blue-500 flex flex-col justify-center items-center text-center shadow-2xl shadow-brand-blue/20"
          >
            <div className="bg-white/20 p-3 rounded-full mb-4">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">¿Otro síntoma?</h3>
            <p className="text-blue-100 mb-8 text-sm font-medium">Descríbelo detalladamente y un técnico real te evaluará.</p>
            <a href="https://wa.me/573054568996" className="bg-white text-brand-blue px-6 py-4 rounded-xl font-extrabold shadow-xl hover:scale-105 transition-transform w-full uppercase tracking-wide">
              Hablar con Soporte
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
