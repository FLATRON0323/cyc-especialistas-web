import { MapPin, Phone, Mail, Youtube, Facebook, Instagram, ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg">C&C</div>
              <span className="font-extrabold text-xl tracking-tight leading-none text-white uppercase break-words w-32">Especialistas<br/>En Impresoras</span>
            </div>
            <p className="text-sm mb-8 leading-loose font-medium opacity-80">
              Garantizamos la continuidad operativa de tu negocio con soluciones tecnológicas integrales. Experiencia real desde 2006 brindando soporte técnico, mantenimiento de impresoras, computadores y redes a nivel nacional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:bg-red-600 hover:-translate-y-1 transition-all shadow-lg"><Youtube size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:bg-brand-blue hover:-translate-y-1 transition-all shadow-lg"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:bg-pink-600 hover:-translate-y-1 transition-all shadow-lg"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest">Nuestra Empresa</h4>
            <ul className="space-y-4 text-sm font-medium mb-8">
              <li>
                <strong className="text-white block mb-1">Misión</strong>
                Brindar soluciones tecnológicas integrales en reparación, mantenimiento y optimización de equipos, garantizando calidad, eficiencia y confianza en todo el país.
              </li>
              <li>
                <strong className="text-white block mb-1">Visión 2028</strong>
                Ser líderes reconocidos por la innovación, servicio especializado y desarrollo de herramientas digitales para negocios.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest">Horarios y Ubicación</h4>
            <ul className="space-y-4 text-sm font-medium mb-6">
              <li className="flex items-center justify-between border-b border-slate-700 pb-2"><span>Lunes - Viernes:</span> <strong className="text-white">8:00 am - 8:00 pm</strong></li>
              <li className="flex items-center justify-between border-b border-slate-700 pb-2"><span>Sábados:</span> <strong className="text-white">9:00 am - 9:00 pm</strong></li>
              <li className="flex items-center justify-between pb-2"><span>Domingos:</span> <strong className="text-white">12:00 pm - 5:00 pm</strong></li>
            </ul>
            <p className="text-xs text-slate-400 mb-2">Cobertura en área metropolitana:</p>
            <p className="text-xs text-brand-accent font-bold uppercase tracking-wider">El Poblado • Laureles • Envigado • Sabaneta • Bello • Itagüí</p>
          </div>

          {/* Legal / Trust */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest">Contacto Directo</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl">
                <MapPin className="text-brand-accent flex-shrink-0" size={24} />
                <span><b className="text-white block mb-1">Medellín, Antioquia</b>Recibimos equipos de toda Colombia.</span>
              </li>
              <li className="flex items-center gap-4 border border-slate-800 p-4 rounded-xl">
                <Phone className="text-brand-whatsapp flex-shrink-0" size={20} />
                <span className="font-black text-white text-lg tracking-wider">+57 305 456 8996</span>
              </li>
              <li className="flex items-center gap-4 px-4">
                <Mail className="text-slate-500 flex-shrink-0" size={18} />
                <a href="mailto:mantenimientoimpresorass@gmail.com" className="hover:text-brand-accent font-medium transition break-all">mantenimientoimpresorass<br/>@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} C&C Especialistas SAS. Medellín.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="flex items-center gap-2">Sitio Seguro SSL <Lock size={12} className="text-green-500" /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
