import axios, { AxiosError, AxiosInstance } from 'axios'
import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}

const axiosServer = axios.create({
  baseURL: process.env.API_URL,
})

export default boot(({ Vue, router }) => {
  Vue.prototype.$axios = axiosServer
  axiosServer.interceptors.request.use(function (config) {
    return {
      ...config,
      headers: {
        ...config.headers,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${LocalStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  })
  axiosServer.interceptors.response.use(
    function (response) {
      return response
    },
    async (error: AxiosError) => {
      if (error && error.response?.status === 401) {
        await router.push('/login')
      }
      return Promise.reject(error)
    }
  )
})

export { axiosServer }
