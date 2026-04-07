import React from 'react';
import { FileText, CheckCircle2, XCircle, Mail, Download, ShieldCheck, UserCheck, ChevronDown, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function SummaryView() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Fin de Sesión Ordinaria N° 24</p>
          <h1 className="text-3xl font-bold text-slate-900">Resumen y Certificación Final</h1>
          <p className="text-sm text-slate-500 font-medium">Sesión Plenaria de Valparaíso — 24 de Mayo, 2024</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50">
            <Mail size={16} />
            Enviar por Correo
          </button>
          <button className="px-4 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-emerald-800 shadow-lg shadow-emerald-700/20">
            <CheckCircle2 size={16} />
            Publicar Acta Final
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Votos</span>
          <span className="text-3xl font-black text-slate-900">29</span>
          <span className="text-[10px] text-slate-400">28 Consejeros + 1 Gobernador</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aprobaciones</span>
          <span className="text-3xl font-black text-emerald-700">24</span>
          <span className="text-[10px] text-emerald-600 font-bold">82.7% del Quórum</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1 border-b-4 border-b-red-500">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rechazos / Abs.</span>
          <span className="text-3xl font-black text-red-700">05</span>
          <span className="text-[10px] text-red-600 font-bold">3 Rechazos | 2 Abstenciones</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-widest">
                <FileText size={18} className="text-emerald-600" />
                Resultados por Punto de Tabla
              </h3>
              <span className="text-[10px] font-bold text-slate-400">3 Puntos Tratados</span>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">Punto 1: Presupuesto Regional 2025</h4>
                    <p className="text-xs text-slate-500">Asignación fondos infraestructura Provincia de Marga Marga</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest">Aprobado</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                    <span>Consejeros</span>
                    <span>Voto</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-slate-700">C. Mondaca, Ricardo (Gobernador)</p>
                    <span className="text-xs font-black text-emerald-600 uppercase">A Favor</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">28 Consejeros Regionales</p>
                    <div className="flex gap-3 text-[10px] font-black uppercase">
                      <span className="text-emerald-600">23 SI</span>
                      <span className="text-red-600">3 NO</span>
                      <span className="text-blue-600">2 ABS</span>
                    </div>
                  </div>
                </div>
                <button className="w-full text-center text-[10px] font-bold text-emerald-700 uppercase tracking-widest flex items-center justify-center gap-1">
                  Ver Detalle Nominal <ChevronDown size={14} />
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">Punto 2: Política de Género 2024-2027</h4>
                    <p className="text-xs text-slate-500">Actualización de marco normativo regional</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest">Aprobado</span>
                </div>
                <button className="w-full text-center text-[10px] font-bold text-emerald-700 uppercase tracking-widest flex items-center justify-center gap-1">
                  Ver Detalle Nominal <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-red-500" />
                <span className="text-xs font-bold text-slate-800">Acta_Pleno_24.pdf</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[9px] font-bold uppercase">Borrador Final</span>
            </div>
            
            <div className="aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 group">
              <img 
                src="https://picsum.photos/seed/doc/400/600" 
                alt="Document Preview" 
                className="w-full h-full object-cover opacity-50 sepia-[.3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                  <Download size={16} />
                  Descargar PDF
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Firma Electrónica Avanzada</h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Gobernador Regional</p>
                    <p className="text-[10px] text-slate-400">Ricardo Mondaca V.</p>
                    <p className="text-[9px] font-bold text-amber-600 flex items-center gap-1 mt-1">
                      <Clock size={10} /> PENDIENTE DE FIRMA
                    </p>
                  </div>
                </div>
                <button className="w-full py-3 bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 shadow-lg shadow-emerald-700/20">
                  <ShieldCheck size={16} />
                  FIRMAR COMO GOBERNADOR
                </button>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Ministro de Fe</p>
                    <p className="text-[10px] text-slate-400">Claudia Espinoza G.</p>
                    <p className="text-[9px] font-bold text-amber-600 flex items-center gap-1 mt-1">
                      <Clock size={10} /> PENDIENTE DE FIRMA
                    </p>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-800 shadow-lg shadow-blue-700/20">
                  <ShieldCheck size={16} />
                  FIRMAR COMO MINISTRO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
