import { Module } from 'vuex'
import { Users } from 'src/models/User'
import { StateInterface } from 'src/store/index'
import roles from 'src/data/roles'
import UserService from 'src/api/UserService.ts'

interface UsersStore {
  users: Users
  loading: boolean
  roles: Array<string>
}
export default {
  namespaced: true,
  state: {
    users: { drivers: [], jours: [], members: [], operators: [], cars: [] },
    loading: true,
    roles: [...roles]
  },
  actions: {
    async getUsers({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_USERS', await UserService.getUsers())
      commit('SET_LOADING', false)
    },
    async getRoles({ commit }) {
      commit('SET_ROLES', await UserService.getRoles())
    },
  },
  mutations: {
    SET_USERS(state: UsersStore, users: Users) {
      state.users = users
    },
    SET_ROLES(state: UsersStore, roles: Array<string>) {
      state.roles = roles
    },
    SET_LOADING(state: UsersStore, payload: boolean) {
      state.loading = payload
    },
  },
} as Module<UsersStore, StateInterface>
