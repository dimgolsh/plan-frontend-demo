<template>
  <q-header class="bg-info" height-hint="58">
    <template v-if="editListMode">
      <q-toolbar>
        <q-btn
          flat
          dense
          label="Выбрать все"
          v-if="editListMode"
          @click="selectAll"
        />
        <q-space />
        <p class="q-mb-none" v-if="selectedList.length > 0">
          Выбрано {{ selectedList.length }}
        </p>
        <p class="q-mb-none" v-else>{{ formated }}</p>
        <q-space />
        <q-btn
          flat
          dense
          label="Готово"
          aria-label="Menu"
          @click="clearListMode"
        />
      </q-toolbar>
    </template>
    <template v-else>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="eva-funnel-outline"
          aria-label="Menu"
          to="filter-settings"
        />
        <q-space />
        <p class="q-mb-none">{{ formated }}</p>
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="eva-edit-2"
          aria-label="Menu"
          @click="setEditMode"
          v-if="allowedCrud"
        />
      </q-toolbar>
      <DaysSlider />
    </template>
  </q-header>
</template>

<script>
import DaysSlider from 'components/events/HeaderDate/DaysSlider'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { date } from 'quasar'
import { monthsShort } from 'src/data/locales'

export default {
  name: 'EventsHeader',
  components: { DaysSlider },
  setup() {},
  computed: {
    ...mapState('events', ['currentDate', 'editListMode', 'selectedList']),
    ...mapGetters('user', ['allowedCrud']),
    formated() {
      return date.formatDate(this.currentDate, 'D MMM', {
        monthsShort: monthsShort,
      })
    },
  },
  methods: {
    ...mapMutations('events', ['SET_EDIT_LIST_MODE']),
    ...mapActions('events', ['clearListMode', 'selectAll']),
    setEditMode() {
      this.SET_EDIT_LIST_MODE(true)
    },
  },
}
</script>

<style scoped>
.days {
  min-height: 30px;
}
.days-week {
  min-height: 10px;
  padding: 0 24px;
  opacity: 0.7;
}
</style>
