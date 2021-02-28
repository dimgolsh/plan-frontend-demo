<template>
  <q-btn
    v-if="!checkRoles && idEventCreated === user.id"
    icon="eva-edit-2-outline"
    flat
    rounded
    unelevated
    dense
    class="text-my-grey"
    size="sm"
    :to="{
      name: 'EventEdit',
      params: {
        id: id,
      },
    }"
  />
</template>

<script lang="ts">
import { computed } from '@vue/composition-api'
import { Store } from 'vuex'
import { StateInterface } from 'src/store'

export default {
  name: 'BtnEdit',
  props: {
    id: String,
    idEventCreated: Number,
  },
  setup(props, { root }: { $store: Store<StateInterface>}) {
    const checkRoles = computed(() => root.$store.getters['user/allowedCrud'])
    const user = computed(() => root.$store.state.user.user)
    return {
      checkRoles,
      user,
    }
  },
}
</script>

<style scoped></style>
