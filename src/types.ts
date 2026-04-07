export type View = 'config' | 'plenary-live' | 'commission' | 'vote' | 'summary';

export interface AgendaItem {
  id: string;
  type: 'Permanente' | 'Tabla';
  description: string;
  status?: 'Debatiendo' | 'Pendiente' | 'Votado';
}

export interface Counselor {
  id: string;
  name: string;
  province: string;
  vote?: 'SI' | 'NO' | 'ABS' | 'PEND';
  photo?: string;
}

export interface SessionConfig {
  type: 'Normal' | 'Extraordinario';
  number: string;
  startTime: string;
  date: string;
  secretaryPlenary: string;
  secretaryTechnical: string;
  moderator: string;
}
