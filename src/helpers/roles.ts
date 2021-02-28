import { Roles } from 'src/data/roles'

const checkPermissions = (userRoles: Roles, allowed: Roles) => {
  return userRoles.filter(role => allowed.includes(role)).length > 0
}

export {
  checkPermissions
}
