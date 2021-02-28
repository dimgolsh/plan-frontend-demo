import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { StateInterface } from 'src/store'
import { User } from 'src/models/User'
import UserService from 'src/api/UserService'
import { checkPermissions } from 'src/helpers/roles'

export interface UserState {
  user: User
  loading: boolean
}

const actions: ActionTree<UserState, StateInterface> = {
  async getUser({ commit }): Promise<User> {
    const user = await UserService.getUser()
    commit('SET_USER', await UserService.getUser())
    commit('SET_LOADING', false)
    return user
  },
}

const mutations: MutationTree<UserState> = {
  SET_USER(state, payload: User) {
    state.user = payload
  },
  SET_LOADING(state, payload: boolean) {
    state.loading = payload
  },
}

const state: UserState = {
  user: {
    FIO: '',
    username: '',
    avatar: '',
    id: 0,
    email: '',
    created_at: 0,
    roles: [],
  },
  loading: true,
}

const getters: GetterTree<UserState, StateInterface> = {
  allowedCrud: (state) =>
    checkPermissions(state.user.roles, [
      'administrator',
      'redactor',
      'developer',
      'moderator'
    ]),
}

const userModule: Module<UserState, StateInterface> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
export default userModule
