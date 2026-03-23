"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">No hablamos de teorías. <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">Damos Resultados.</span></h2>
          <p className="text-gray-600 text-lg">Casos reales de equipos recuperados que devolvieron la tranquilidad a nuestros clientes.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Caso 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="md:w-1/2 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80" alt="Reparación Impresora Epson" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1.5 rounded uppercase shadow-lg tracking-wider border border-red-400">Antes: Inservible</div>
              <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1.5 rounded uppercase shadow-lg tracking-wider border border-green-400">Despues: 100% Viva</div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white relative">
              <span className="text-[10px] text-brand-blue font-black mb-2 uppercase tracking-[0.2em] bg-blue-50 w-fit px-2 py-1 rounded">Mantenimiento Correctivo</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 leading-tight">Epson EcoTank L3150</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                <strong className="text-slate-900">Problema:</strong> Cabezales completamente tapados y rodillos atascados.<br/><br/>
                <strong className="text-slate-900">Solución:</strong> Lavado ultrasónico de cabezal, purga profunda del sistema y reseteo de firmware eeprom.<br/>
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">T: 24 Horas</span>
                <div className="flex text-brand-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Caso 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="md:w-1/2 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80" alt="Mantenimiento Computador Lento" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1.5 rounded uppercase shadow-lg tracking-wider border border-red-400">Antes: Lentitud Extrema</div>
              <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1.5 rounded uppercase shadow-lg tracking-wider border border-green-400">Despues: Veloz (x10)</div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white relative">
              <span className="text-[10px] text-purple-600 font-black mb-2 uppercase tracking-[0.2em] bg-purple-50 w-fit px-2 py-1 rounded">Actualización Hardware</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 leading-tight">Portátil HP Pavilion</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                <strong className="text-slate-900">Problema:</strong> El computador estaba sumamente lento para iniciar o abrir cualquier programa.<br/><br/>
                <strong className="text-slate-900">Causa:</strong> Disco duro mecánico antiguo de 5400rpm dañado y saturado.<br/><br/>
                <strong className="text-slate-900">Solución:</strong> Upgrade a Disco de Estado Sólido (SSD), instalación limpia de Windows y formateo profesional.
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Resultado: Aumento Vel. x10</span>
                <div className="flex text-brand-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
