<template>
  <q-card-section class="bg-white q-mt-md body-section">
    <LabelView text="Файлы" class="q-mb-sm" />
    <FilesRender :value="eventPlan.eventAttachments" view />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { EventPlan, FileEvent } from 'src/models/Events'
import LabelView from 'components/events/view/LabelView.vue'
import FilesRender from 'components/events/FilesRender.vue'

export default defineComponent({
  name: 'FilesSection',
  components: { FilesRender, LabelView },
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
