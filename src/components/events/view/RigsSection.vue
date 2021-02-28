<template>
  <q-card-section class="bg-white q-mt-md body-section">
    <LabelView text="Оборудование" />
    <RigItem v-for="rig in eventPlan.rigs" :key="rig.id" :rig="rig" view />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import LabelView from './LabelView.vue'
import RigItem from '../RigItem.vue'
import { EventPlan } from 'src/models/Events'

export default defineComponent({
  name: 'RigsSection',
  components: { RigItem, LabelView },
  props: {
    eventPlan: {
      type: (Object as unknown) as PropType<EventPlan>,
      required: true,
    },
  },
  setup() {},
})
</script>

<style scoped lang="scss"></style>
