<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <InstallApp />
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterMobile />
    <BulkListFooter v-if="editListMode" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Logo from 'components/navbar/Logo.vue'
import TopTabs from 'components/navbar/TopTabs.vue'
import FooterMobile from 'components/FooterMobile.vue'
import { db } from 'boot/firebase'
import InstallApp from 'components/InstallApp.vue'
import { mapState } from 'vuex'
import BulkListFooter from 'components/BulkListFooter.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    BulkListFooter,
    InstallApp,
    FooterMobile,
    TopTabs,
    Logo,
  },
  computed: {
    ...mapState('events', ['editListMode']),
  },
  setup(props, { root: { $store, $router } }) {
    $store.dispatch('user/getUser').then((user) => {
      const userRef = db
        .collection('users')
        .doc(user.id.toString() + '_' + user.username)
      userRef.get().then((doc) => {
        if (!doc.data()) {
          userRef.set({ ...user, tutorial: true })
          $router.push({ name: 'Tutorial' })
        }
        if (doc.data() && doc.data()?.tutorial) {
          $router.push({ name: 'Tutorial' })
        }
      })
    })
  },
})
</script>

<style lang="sass">
.platform-ios
  .q-footer
    padding-bottom: constant(safe-area-inset-bottom)
    padding-bottom: env(safe-area-inset-bottom)
</style>
