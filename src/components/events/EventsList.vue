<template>
  <q-pull-to-refresh
    @refresh="refresh"
    color="white"
    bg-color="info"
    icon="eva-refresh-outline"
  >
    <q-list bordered separator class="q-mb-lg">
      <EventItem
        v-for="eventPlan in events"
        :key="eventPlan.id"
        :event-plan="eventPlan"
        class="full-width"
      />
    </q-list>
    <HolderEmpyEvents v-if="!events.length" />
  </q-pull-to-refresh>
</template>

<script>
import EventItem from './EventItem'
import HolderEmpyEvents from './HolderEmpyEvents'
import { mapState } from 'vuex'
export default {
  name: 'EventsList',
  components: { EventItem, HolderEmpyEvents },
  computed: {
    ...mapState('events', ['events']),
  },
  methods: {
    refresh() {
      this.$store.dispatch('events/getEvents')
    },
  },
}
</script>
