import React from 'react';
import { Plus, Trash2, Save, X, Info, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function SessionConfigView() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col gap-1">
        <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Administración Legislativa</p>
        <h1 className="text-3xl font-bold text-slate-900">Configurar Sesión de Pleno</h1>
        <div className="h-1 w-20 bg-emerald-600 rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Tipo de Pleno</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 px-4 rounded-xl border-2 border-emerald-600 bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    Normal
                  </button>
                  <button className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-500 font-medium flex items-center justify-center gap-2 hover:bg-slate-50">
                    Extraordinario
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Número de Sesión</label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="#PL-2024-042"
                    className="w-full py-3 px-4 rounded-xl border border-slate-200 font-bold text-emerald-700 bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                    <Info size={16} />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 italic">Generado automáticamente según correlativo anual</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Hora de Inicio</label>
                <input 
                  type="time" 
                  defaultValue="09:30"
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Fecha Programada</label>
                <input 
                  type="date" 
                  defaultValue="2024-05-15"
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-3 hover:border-emerald-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Plus size={20} />
              </div>
              <span className="text-xs font-bold text-slate-700">Agregar Comisión</span>
            </button>
            <button className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-3 hover:border-amber-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Info size={20} />
              </div>
              <span className="text-xs font-bold text-slate-700">Comisión Imprevista</span>
            </button>
            <button className="bg-emerald-700 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 hover:bg-emerald-800 transition-colors text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Plus size={20} />
              </div>
              <span className="text-xs font-bold">Puntos de Tabla</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-sm font-bold text-slate-800">Resumen de Puntos Agendados</h3>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">4 Items</span>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
                <tr>
                  <th className="px-6 py-3">Tipo</th>
                  <th className="px-6 py-3">Descripción</th>
                  <th className="px-6 py-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">Permanente</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">Comisión de Finanzas y Presupuesto Regional</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">Tabla</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">Aprobación Proyecto Pavimentación Rodelillo Etapa 3</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-emerald-700">
              <Users size={18} />
              <h3 className="font-bold text-sm">Asignación de Perfiles</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Secretario de Pleno</label>
                <select className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none">
                  <option>Mario Alberto Silva</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Secretario Técnico</label>
                <select className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none">
                  <option>Javier Espinoza Ruiz</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Moderador Regional</label>
                <select className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none">
                  <option>Gobernador Regional</option>
                </select>
              </div>
            </div>

            <button className="w-full py-4 bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 transition-all">
              <Save size={18} />
              Guardar Sesión
            </button>
            <button className="w-full py-2 text-slate-400 text-xs font-medium hover:text-slate-600">
              Cancelar Configuración
            </button>
          </div>

          <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Vista Previa</h4>
              <div className="text-emerald-400"><Info size={16} /></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <p className="text-sm font-bold text-slate-800">Sesión #PL-2024-042</p>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Sesión ordinaria programada para el 15 de Mayo a las 09:30 AM. Incluye 1 comisión permanente y 1 punto de tabla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
