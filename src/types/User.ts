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
  fullName: string;
  birthdate: string;
  username: string;
  password: string;
  phone?: string;
  club?: Club;
  role?: Role;
  isActive?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};
