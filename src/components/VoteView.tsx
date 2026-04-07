import React, { useState } from 'react';
import { CheckCircle2, XCircle, MinusCircle, Info, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function VoteView() {
  const [selectedVote, setSelectedVote] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-red-600">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Sesión en Vivo</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Plenario Ordinario N° 24</h1>
          <p className="text-sm text-slate-500 font-medium">Edificio Institucional CORE, Valparaíso</p>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
            <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Rodrigo Valenzuela</p>
            <p className="text-[10px] text-slate-400 font-medium">Provincia de Valparaíso</p>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">Presidente Comisión</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <FileText size={120} />
            </div>
            
            <div className="space-y-4 relative">
              <div className="flex items-center gap-2 text-blue-600">
                <FileText size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Punto de Tabla 04.A</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  Proyecto de Restauración del Muelle Prat: Fondos Concursables FNDR 2024
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Se solicita la aprobación de un incremento presupuestario de $1.200.000.000 para las obras de refuerzo estructural y restauración arquitectónica del entorno del Muelle Prat, Patrimonio de la Humanidad.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Monto Solicitado</p>
                  <p className="text-lg font-black text-emerald-700">M$ 1.200.000</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Etapa Actual</p>
                  <p className="text-lg font-black text-blue-700">Ejecución</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Estado Global de Votación</h3>
              <span className="text-[10px] font-bold text-slate-500">24 de 28 Consejeros presentes</span>
            </div>
            
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-emerald-500" style={{ width: '65%' }}></div>
              <div className="h-full bg-red-500" style={{ width: '15%' }}></div>
              <div className="h-full bg-blue-500" style={{ width: '10%' }}></div>
            </div>

            <div className="flex gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] font-bold text-slate-600">18 A Favor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-[10px] font-bold text-slate-600">4 En Contra</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-[10px] font-bold text-slate-600">2 Abstención</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Emitir su Voto</h3>
              <p className="text-xs text-slate-400 font-medium italic">Su voto es público y quedará registrado en el acta oficial</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => setSelectedVote('favor')}
                className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                  selectedVote === 'favor' 
                    ? 'bg-emerald-700 border-emerald-700 text-white shadow-xl shadow-emerald-700/20' 
                    : 'bg-white border-slate-100 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${selectedVote === 'favor' ? 'bg-white/20' : 'bg-emerald-100 text-emerald-600'}`}>
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-black uppercase tracking-widest">A Favor</span>
                </div>
                {selectedVote === 'favor' && <motion.div layoutId="check" className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-700"><CheckCircle2 size={16} /></motion.div>}
              </button>

              <button 
                onClick={() => setSelectedVote('contra')}
                className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                  selectedVote === 'contra' 
                    ? 'bg-red-700 border-red-700 text-white shadow-xl shadow-red-700/20' 
                    : 'bg-white border-slate-100 text-slate-700 hover:border-red-200 hover:bg-red-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${selectedVote === 'contra' ? 'bg-white/20' : 'bg-red-100 text-red-600'}`}>
                    <XCircle size={24} />
                  </div>
                  <span className="font-black uppercase tracking-widest">En Contra</span>
                </div>
                {selectedVote === 'contra' && <motion.div layoutId="check" className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-700"><CheckCircle2 size={16} /></motion.div>}
              </button>

              <button 
                onClick={() => setSelectedVote('abs')}
                className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                  selectedVote === 'abs' 
                    ? 'bg-slate-700 border-slate-700 text-white shadow-xl shadow-slate-700/20' 
                    : 'bg-white border-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${selectedVote === 'abs' ? 'bg-white/20' : 'bg-slate-200 text-slate-600'}`}>
                    <MinusCircle size={24} />
                  </div>
                  <span className="font-black uppercase tracking-widest">Abstención</span>
                </div>
                {selectedVote === 'abs' && <motion.div layoutId="check" className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-700"><CheckCircle2 size={16} /></motion.div>}
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
              <p className="text-[10px] text-slate-500 leading-tight">
                Su voto será registrado públicamente bajo su identidad oficial. Esta acción está protegida mediante firma electrónica institucional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
