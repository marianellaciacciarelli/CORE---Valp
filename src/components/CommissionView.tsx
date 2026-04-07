import React from 'react';
import { Calendar, Users, FileText, CheckCircle2, Clock, MessageSquare, Plus, Save, Play, ChevronRight, Lock, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function CommissionView() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-600">
            <Users size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Comisión de Salud</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Comisión Ordinaria N° 124</h1>
          <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              24 de Mayo, 2024
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              10:30 AM
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50">
            <Save size={16} />
            Guardar Acta
          </button>
          <button className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-emerald-800 shadow-lg shadow-emerald-700/20">
            <Play size={16} />
            Habilitar Votación en Pleno
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Temas en Tabla</span>
          <span className="text-3xl font-black text-emerald-700">08</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quórum Actual</span>
          <span className="text-3xl font-black text-blue-700">88%</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estado General</span>
          <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">En Proceso</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FileText size={18} className="text-emerald-600" />
              Orden del Día
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-emerald-300 transition-all">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900">Ampliación Hospital Carlos Van Buren</h4>
                  <p className="text-xs text-slate-500 max-w-md">Discusión sobre la asignación presupuestaria adicional para la nueva ala oncológica.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest">Debatiendo</span>
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between opacity-70">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900">Convenio GORE-MINSAL: Telemedicina Rural</h4>
                  <p className="text-xs text-slate-500 max-w-md">Revisión técnica de los alcances del convenio para las provincias de Petorca y Los Andes.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest">Pendiente</span>
                  <ChevronRight size={18} className="text-slate-300" />
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-400">Actualización Posta Rural Laguna de Zapallar</h4>
                  <p className="text-xs text-slate-400 max-w-md">Mejoras en infraestructura básica y sistema de calefacción sustentable.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">Votado</span>
                  <Lock size={16} className="text-slate-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <MessageSquare size={18} className="text-emerald-600" />
              Registro de Acuerdos Preliminares
            </h3>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <textarea 
                placeholder="Escriba el acuerdo o punto relevante discutido..."
                className="w-full h-24 p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
              ></textarea>
              <div className="flex justify-end">
                <button className="p-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">
                  <Plus size={20} />
                </button>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-medium">
                  #01 Se acuerda solicitar informe de factibilidad técnica a la Seremi de Salud antes de la próxima sesión de pleno.
                </div>
                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-medium">
                  #02 Modificación de glosa presupuestaria 02 para permitir contratación de personal de apoyo en centros de diálisis.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-emerald-900 text-white flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest">Asistencia Actual</h3>
              <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">14 / 16 Presentes</span>
            </div>
            <div className="p-4 space-y-4">
              {[
                { name: 'Elena Valenzuela', role: 'Presidenta Comisión', present: true },
                { name: 'Roberto Lagos', role: 'Secretario Técnico', present: true },
                { name: 'Carmen Gloria Soto', role: 'Consejera Regional', present: false },
              ].map((person, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                      <img src={`https://picsum.photos/seed/p${i}/100/100`} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{person.name}</p>
                      <p className="text-[10px] text-slate-400">{person.role}</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${person.present ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                    {person.present ? <CheckCircle2 size={12} /> : <XCircle size={12} className="rotate-45" />}
                  </div>
                </div>
              ))}
              <button className="w-full py-2 text-[10px] font-bold text-emerald-700 uppercase tracking-widest hover:bg-emerald-50 rounded-lg transition-colors">
                Ver Lista Completa
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <FileText size={16} className="text-emerald-600" />
              Ejecución Salud MS
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="text-slate-400">Inversión Sectorial</span>
                  <span className="text-emerald-700">85%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="text-slate-400">Fondos Propios (FNDR)</span>
                  <span className="text-blue-700">42%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Presupuesto 2024</p>
                  <p className="text-lg font-black text-slate-900">4.850,2 MM</p>
                </div>
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                  <Plus size={18} />
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-32 relative group">
              <img 
                src="https://picsum.photos/seed/chart/400/200" 
                alt="Chart" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/40 flex items-center justify-center">
                <button className="px-3 py-1.5 bg-white text-emerald-900 text-[10px] font-bold rounded-lg uppercase tracking-widest shadow-lg">
                  Ver Dashboard Técnico
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
