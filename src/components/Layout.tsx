import React from 'react';
import { LayoutDashboard, Calendar, FileText, Users, Vote, Settings, LogOut, HelpCircle, Bell } from 'lucide-react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
}

export default function Layout({ children, currentView, setView }: LayoutProps) {
  const menuItems = [
    { id: 'config', icon: Settings, label: 'Configuración' },
    { id: 'commission', icon: FileText, label: 'Comisiones' },
    { id: 'plenary-live', icon: LayoutDashboard, label: 'Pleno en Vivo' },
    { id: 'vote', icon: Vote, label: 'Votación' },
    { id: 'summary', icon: FileText, label: 'Resumen' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold">
            CV
          </div>
          <div>
            <h1 className="font-bold text-sm leading-tight text-emerald-900">CORE Valparaíso</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Consejo Regional</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id as View)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                currentView === item.id
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50">
            <HelpCircle size={18} />
            Ayuda
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50">
            <LogOut size={18} />
            Salir
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-slate-800 capitalize">
              {currentView.replace('-', ' ')}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900">Rodrigo Valenzuela</p>
                <p className="text-[10px] text-slate-500">Presidente Comisión</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/user1/100/100" 
                  alt="User" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
