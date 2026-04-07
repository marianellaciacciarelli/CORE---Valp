import React from 'react';
import { Users, CheckCircle2, XCircle, MinusCircle, Clock, Filter, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

const counselors = [
  { id: '1', name: 'Aguirre, Mauricio', province: 'Valparaíso', vote: 'SI', photo: 'https://picsum.photos/seed/c1/100/100' },
  { id: '2', name: 'Baeza, Carolina', province: 'Marga Marga', vote: 'NO', photo: 'https://picsum.photos/seed/c2/100/100' },
  { id: '3', name: 'Díaz, Vicente', province: 'San Antonio', vote: 'ABS', photo: 'https://picsum.photos/seed/c3/100/100' },
  { id: '4', name: 'Fernández, Lorena', province: 'Quillota', vote: 'PEND', photo: 'https://picsum.photos/seed/c4/100/100' },
  { id: '5', name: 'Gómez, Patricio', province: 'Petorca', vote: 'PEND', photo: 'https://picsum.photos/seed/c5/100/100' },
];

export default function PlenaryLiveView() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Estado de Votación en Pleno</p>
          <h1 className="text-3xl font-bold text-slate-900">Sesión Plenaria Ordinaria #24</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold animate-pulse">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
          EN VIVO
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-emerald-100/50 p-6 rounded-2xl border border-emerald-200 flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-black text-emerald-700">10</span>
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">SI</span>
        </div>
        <div className="bg-red-100/50 p-6 rounded-2xl border border-red-200 flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-black text-red-700">02</span>
          <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">NO</span>
        </div>
        <div className="bg-blue-100/50 p-6 rounded-2xl border border-blue-200 flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-black text-blue-700">01</span>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">ABS</span>
        </div>
        <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-black text-slate-700">15</span>
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">PEND</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-4">
          <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest">Tema en Discusión</p>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">Fondo Concursable de Seguridad Ciudadana 8% FNDR 2024</h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
              Aprobación de bases administrativas y técnicas para el proceso de postulación de organizaciones privadas sin fines de lucro.
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold">
            <CheckCircle2 size={14} />
            Comisión de Seguridad Pública
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            PANEL DE CONSEJEROS (28)
          </h3>
          <button className="flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800">
            <Filter size={14} />
            Ver Filtros
          </button>
        </div>

        <div className="space-y-2">
          {counselors.map((counselor) => (
            <motion.div 
              key={counselor.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-emerald-200 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                  <img src={counselor.photo} alt={counselor.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{counselor.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Provincia de {counselor.province}</p>
                </div>
              </div>

              <div>
                {counselor.vote === 'SI' && (
                  <span className="px-4 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-200">SI</span>
                )}
                {counselor.vote === 'NO' && (
                  <span className="px-4 py-1.5 rounded-lg bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest border border-red-200">NO</span>
                )}
                {counselor.vote === 'ABS' && (
                  <span className="px-4 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest border border-blue-200">ABSTENCIÓN</span>
                )}
                {counselor.vote === 'PEND' && (
                  <span className="px-4 py-1.5 rounded-lg bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-100">PENDIENTE</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button className="px-8 py-4 bg-emerald-700 text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition-all">
          <Clock size={20} />
          Cerrar Votación
        </button>
      </div>
    </div>
  );
}
