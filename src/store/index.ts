import { store } from 'quasar/wrappers'
import Vuex from 'vuex'
import userModule from 'src/store/user'
import events from 'src/store/events'
import users from 'src/store/usersStore'

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  newVersion: unknown;
  errorGlobal: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    mutations: {
      SET_NEW_VERSION(state, payload) {
        state.newVersion = payload
      },
      SET_ERROR(state, payload) {
        state.errorGlobal = payload
      }
    },
    state: {
      newVersion: false,
      errorGlobal: false
    },
    modules: {
      user: userModule,
      events,
      users
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
})
