<template>
  <q-card-section class="bg-white q-mt-md">
    <div
      class="text-subtitle2 text-my-grey-light text-weight-regular font-size-12"
    >
      Начало
    </div>
    <div class="flex">
      <div class="text-h7 text-weight-medium">
        {{ formatDateEvent(eventPlan.dateStartTime) }}
      </div>
      <span class="text-weight-medium q-mx-sm">
        <q-icon name="eva-clock-outline" class="text-my-grey-light" />
        {{ formatTimeEvent(eventPlan.dateStartTime) }}
      </span>
      <EventViezd
        :status="eventPlan.status_start"
        v-if="eventPlan.status_start"
        class="q-ml-sm"
      />
      <TimeViezd
        :time="eventPlan.dateViezdTime"
        v-if="eventPlan.dateViezdTime"
        class="font-size-14 q-ml-md"
      />
    </div>
    <template v-if="eventPlan.dateEndTime">
      <div
        class="text-subtitle2 text-my-grey-light text-weight-regular font-size-12 q-mt-md"
      >
        Окончание
      </div>
      <div class="flex">
        <div class="text-h7 text-weight-medium">
          {{ formatDateEvent(eventPlan.dateEndTime) }}
        </div>
        <span class="text-weight-medium q-mx-sm">
          <q-icon name="eva-clock-outline" class="text-my-grey-light" />
          {{ formatTimeEvent(eventPlan.dateEndTime) }}
        </span>
      </div>
    </template>
  </q-card-section>
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'
import { EventPlan } from 'src/models/Events'
import { date } from 'quasar'
import EventViezd from 'components/events/EventViezd.vue'
import TimeViezd from 'components/events/TimeViezd.vue'

export default defineComponent({
  name: 'TimeSection',
  components: { TimeViezd, EventViezd },
  props: {
    eventPlan: {
      type: (Object as unknown) as PropType<EventPlan>,
      required: true,
    },
  },
  setup() {
    const formatDateEvent = (dateEvent:number) => {
      return date.formatDate(dateEvent * 1000, 'D MMM, ddd')
    }
    const formatTimeEvent = (dateEvent:number) => {
      return date.formatDate(dateEvent * 1000, 'HH:mm')
    }
    return {
      formatDateEvent,
      formatTimeEvent,
    }
  },
})
</script>

<style scoped></style>
