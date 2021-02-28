import roles, { Roles } from 'src/data/roles'

export interface User {
  id: number;
  username: string;
  created_at: number;
  FIO: string;
  email: string;
  avatar: string;
  roles: Roles;
}

export interface Users {
  operators: Array<User>
  jours: Array<User>
  members: Array<User>
  drivers: Array<User>
  cars: Array<User>
}
