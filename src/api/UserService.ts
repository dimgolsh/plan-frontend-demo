import { axiosServer } from 'boot/axios'
import { User, Users } from 'src/models/User'

class UserService {
  async getUsers() {
    const { data } = await axiosServer.get<Users>('/api/web/v1/users/users')
    return data
  }

  async getRoles() {
    const { data } = await axiosServer.get<Array<string>>(
      '/api/web/v1/users/roles'
    )
    return data
  }

  async getUser() {
    const { data } = await axiosServer.get<User>('/api/web/v1/user?expand=roles')

    return data
  }
}
export default new UserService()
