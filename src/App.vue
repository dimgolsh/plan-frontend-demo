<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { db } from 'boot/firebase'

export default defineComponent({
  name: 'App',
  setup(props, { root }) {
    const checkVersion = () => {
      db.collection('system')
        .doc('version_app')
        .get()
        .then((res) => {
          console.log('Current version server: ', res?.data()?.version)
          console.log('Current version: ', process.env.VERSION)
          if (res?.data()?.version !== process.env.VERSION) {
            //window.location.reload(true)
            root.$store.commit('SET_NEW_VERSION', true)
          }
        })
    }
    checkVersion()

    db.collection('system')
      .doc('version_app')
      .onSnapshot((doc) => {
        console.log('Current data: ', doc.data())
        if (doc?.data()?.version !== process.env.VERSION) {
          //window.location.reload(true)
          root.$store.commit('SET_NEW_VERSION', true)
        }
      })
  },
})
</script>
