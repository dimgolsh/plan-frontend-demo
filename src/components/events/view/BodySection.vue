<template>
  <q-card-section class="bg-white q-mt-md body-section">
    <LabelView text="Примечание" class="q-mb-sm" />
    <div v-html="eventPlan.body" class="from-db"></div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { EventPlan } from 'src/models/Events'
import LabelView from './LabelView.vue'

export default defineComponent({
  name: 'BodySection',
  components: { LabelView },
  props: {
    eventPlan: {
      type: (Object as unknown) as PropType<EventPlan>,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss">
.body-section {
  .from-db {
    p {
      margin-bottom: 5px;
    }
  }
}
</style>
