<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <q-page-container>
      <q-page class="row column items-center justify-evenly relative-position">
        <q-form
          @submit="onSubmit"
          class="content-center items-center text-center bg-white shadow-1 q-pa-lg rounded-borders login-form full-width"
        >
          <img src="logo.svg" alt="" class="loginLogo" />
          <q-banner class="bg-red-5 text-white q-mb-md" rounded v-if="invalid">
            Неправильный логин или пароль
          </q-banner>
          <q-input
            v-model="login"
            label="Логин"
            outlined
            :rules="[(val) => !!val || '* Обязательно']"
            lazy-rules
          />

          <q-input
            v-model="password"
            label="Пароль"
            :type="isPwd ? 'password' : 'text'"
            outlined
            :rules="[(val) => !!val || '* Обязательно']"
            lazy-rules
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            label="Войти"
            type="submit"
            color="info"
            unelevated
            class="full-width q-mt-md text-weight-regular"
            :loading="loading"
            size="lg"
            no-caps
            style="font-size: 16px"
          />
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/composition-api'
import { axiosServer } from '../boot/axios'
import { LocalStorage } from 'quasar'

export default {
  name: 'login',
  setup(_, { root }) {
    const form = reactive({
      login: '',
      password: '',
    })
    const isPwd = ref(true)
    const invalid = ref(false)
    const loading = ref(false)
    const onSubmit = () => {
      invalid.value = false
      loading.value = true
      axiosServer
        .post('/api/web/v1/auth/login', {
          identity: form.login,
          password: form.password,
        })
        .then((data) => {
          LocalStorage.set('access_token', data.data.access_token)
          root.$router.push('/')
        })
        .catch((e) => {
          if (e.response?.status === 422) {
            invalid.value = true
          }
        })
        .finally(() => {
          loading.value = false
        })
    }
    return {
      ...toRefs(form),
      isPwd,
      onSubmit,
      invalid,
      loading,
    }
  },
}
</script>

<style scoped lang="scss">
.q-field--outlined .q-field__control {
  border-radius: 12px;
  padding: 0 12px;
}
.login-form {
  box-shadow: 0 8px 15px rgba(21, 27, 38, 0.05);
  max-width: 450px;
  padding: 70px 30px 50px 30px;

  .q-field--outlined .q-field__control:before {
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
}
.loginLogo {
  height: 130px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -70px;
}
</style>
