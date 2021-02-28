<template>
  <q-card-section class="bg-white q-mt-md">
    <div
      class="text-subtitle2 text-my-grey-light text-weight-regular font-size-12"
    >
      Адрес
    </div>
    <q-btn
      type="a"
      :href="`https://yandex.ru/maps/?text=${eventPlan.adres_text}`"
      target="_blank"
      :label="eventPlan.adres_text"
      color="info"
      no-caps
      flat
      dense
      class="font-size-12 text-weight-regular"
    />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { EventPlan } from 'src/models/Events'

export default defineComponent({
  name: 'AdressSection',
  props: {
    eventPlan: {
      type: (Object as unknown) as PropType<EventPlan>,
      required: true,
    },
  },
  setup() {},
})
</script>
