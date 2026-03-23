"use client";
import { Cpu, HardDrive, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    { title: "Tintas y Tóner", img: "https://images.unsplash.com/photo-1623812555513-aa2d4d9b62f7?auto=format&fit=crop&w=400&q=80", msg: "Cotizar tintas o toner", type: "img" },
    { title: "Discos Duros y SSD", icon: <HardDrive size={80} className="text-brand-blue opacity-50" />, msg: "Cotizar disco SSD o HDD", type: "icon" },
    { title: "Memorias RAM", icon: <Cpu size={80} className="text-brand-blue opacity-50" />, msg: "Cotizar memoria RAM", type: "icon" },
    { title: "Pantallas y Teclados", icon: <ShoppingCart size={80} className="text-brand-blue opacity-50" />, msg: "Cotizar pantallas y teclados", type: "icon" },
    { title: "Equipos Nuevos y Usados", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80", msg: "Cotizar computador nuevo o usado", type: "img" },
    { title: "Baterías para Portátil", icon: <Cpu size={80} className="text-brand-blue opacity-50" />, msg: "Cotizar batería", type: "icon" },
    { title: "Cámaras de Seguridad", icon: <ShoppingCart size={80} className="text-brand-blue opacity-50" />, msg: "Cotizar cámaras de seguridad", type: "icon" },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div className="max-w-xl">
            <span className="text-brand-blue font-black tracking-widest text-sm uppercase">Catálogo Técnico</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Suministros Originales</h2>
            <p className="text-gray-600 mt-4 text-lg">No arriesgues tus equipos con piezas genéricas de mala calidad o tintas aguadas.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center">
             <span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
               Ventas Mayoristas <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              <div className="bg-gray-50 rounded-2xl aspect-square mb-6 flex items-center justify-center p-6 overflow-hidden">
                {prod.type === "img" ? (
                  <img src={prod.img} alt={prod.title} className="object-contain h-full mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="transform group-hover:scale-110 transition-transform duration-500 group-hover:text-brand-blue">
                    {prod.icon}
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="font-extrabold text-slate-800 text-lg leading-snug">{prod.title}</h3>
              </div>
              <a href={`https://wa.me/573054568996?text=${encodeURIComponent(prod.msg)}`} className="w-full mt-6 bg-slate-50 border-2 border-brand-blue/20 text-brand-blue font-bold py-3.5 rounded-xl text-center flex justify-center items-center gap-2 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all uppercase tracking-wider text-xs">
                <ShoppingCart size={16} /> Cotizar Stock
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
