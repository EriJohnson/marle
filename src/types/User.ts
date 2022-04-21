type Club = {
  URSINHOS: 'URSINHOS';
  FAISCA: 'FAISCA';
  FLAMA: 'FLAMA';
  TOCHA: 'TOCHA';
  JV: 'JV';
  GQ7: 'GQ7';
};

type Role = {
  ADMIN: 'ADMIN';
  DEACON: 'DEACON';
  DIRECTOR: 'DIRECTOR';
  LEADER: 'LEADER';
};

export type User = {
  id?: string;
  email: string;
  full_name: string;
  birth_date: string;
  username: string;
  password: string;
  phone?: string;
  club?: Club;
  role?: Role;
  is_active?: boolean;
  created_at?: string | Date;
  updated_at?: string | Date;
};
