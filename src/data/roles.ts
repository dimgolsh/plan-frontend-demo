const roles = [
  'administrator',
  'developer',
  'driver',
  'DutyTeam',
  'journalist',
  'manager',
  'moderator',
  'monitor',
  'operator',
  'redactor',
  'user',
  'user-creator',
] as const

export type Roles = Array<typeof roles[number]>
export default roles
