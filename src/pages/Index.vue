<template>
  <q-page>
    <EventsHeader/>
    <ListEventsLoader v-if="loading" />
    <EventsList v-if="!loading" style="margin-bottom: 60px"/>
  </q-page>
</template>

<script>
import ExampleComponent from 'components/CompositionComponent.vue'
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import EventsList from 'components/events/EventsList.vue'
import EventsHeader from 'components/events/EventsHeader.vue'
import ListEventsLoader from 'components/events/loaders/ListEventsLoader.vue'
import BulkListFooter from 'components/BulkListFooter.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    BulkListFooter,
    ListEventsLoader,
    EventsHeader,
    EventsList,
    ExampleComponent,
  },
  created() {
    this.$store.dispatch('events/getEvents')
  },
  computed: {
    ...mapState('events', ['events', 'loading', 'editListMode']),
  },
})
</script>
