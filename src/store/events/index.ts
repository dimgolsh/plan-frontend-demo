import { ActionTree, Module, MutationTree } from 'vuex'
import { StateInterface } from 'src/store'
import { EventPlan } from 'src/models/Events'
import { CURRENT_DAY, getCurrentDay } from 'src/helpers/events'
import EventService from 'src/api/EventService.ts'

export interface FilterParams {
  showDrafts: boolean
  filterParams: string
  day?: number
}

export interface EventsState {
  events: Array<EventPlan>
  loading: boolean
  currentDate: string
  params: FilterParams
  editListMode: boolean
  selectedList: Array<number>
}

const actions: ActionTree<EventsState, StateInterface> = {
  updateDateStore({ dispatch, commit }, payload): void {
    commit('UPDATE_DATE', payload)
    void dispatch('getEvents').then().catch()
  },
  updateParams({ dispatch, commit }, payload): void {
    commit('UPDATE_PARAMS', payload)
    void dispatch('getEvents')
  },
  async getEvents({ commit, state }) {
    commit('SET_LOADING', true)
    const data = await EventService.getEvents({
      day: new Date(state.currentDate).getTime() / 1000,
      showDrafts: state.params.showDrafts,
      filterParams: state.params.filterParams,
    })
    commit('SET_EVENTS', data.items)
    commit('SET_LOADING', false)
  },
  clearListMode({ commit }) {
    commit('UPDATE_SELECTED_LIST', [])
    commit('SET_EDIT_LIST_MODE', false)
  },
  selectAll({ commit, state }) {
    const ids = state.events.map((p) => p.id)
    commit('UPDATE_SELECTED_LIST', [...ids])
  },
}

const mutations: MutationTree<EventsState> = {
  SET_EVENTS(state, events: Array<EventPlan>) {
    state.events = events
  },

  SET_LOADING(state, payload: boolean) {
    state.loading = payload
  },
  UPDATE_DATE(state, payload: string) {
    state.currentDate = payload
  },
  UPDATE_PARAMS(state, payload: Partial<FilterParams>) {
    state.params = {
      ...state.params,
      ...payload,
    }
  },
  SET_EDIT_LIST_MODE(state, payload: boolean) {
    state.editListMode = payload
  },
  UPDATE_SELECTED_LIST(state, payload) {
    state.selectedList = payload
  },
}
const state: EventsState = {
  events: [],
  loading: true,
  currentDate: getCurrentDay(CURRENT_DAY.getDate()),
  params: {
    showDrafts: true,
    filterParams: 'all',
  },
  editListMode: false,
  selectedList: [],
}

export default {
  namespaced: true,
  actions,
  state,
  mutations,
} as Module<EventsState, StateInterface>
