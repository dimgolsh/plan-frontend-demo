<template>
  <q-page>
    <q-header class="bg-info" height-hint="58">
      <q-toolbar>
        <q-btn flat dense round icon="eva-funnel-outline" aria-label="Menu" />
        <q-space />
        <q-btn flat dense round icon="eva-close" aria-label="Menu" to="/" />
      </q-toolbar>
    </q-header>
    <q-date
      v-model="date"
      mask="YYYY-MM-DD"
      today-btn
      flat
      no-unset
      square
      color="info"
      text-color="white"
    />
    <q-btn-toggle
      v-model="filterParam"
      spread
      class="my-custom-toggle q-mt-md q-px-md q-mb-sm"
      no-caps
      unelevated
      toggle-color="info"
      color="white"
      text-color="info"
      :options="[
        { label: 'Все', value: 'all' },
        { label: 'Черновик', value: 'drafts' },
        { label: 'Мои', value: 'my' },
      ]"
    />
    <q-list class="q-mt-md">
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Показывать черновик</q-item-label>
          <q-item-label caption
            >Показывать съемки, которые находятся в черновике</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="info" v-model="drafts" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'FilterSettings',
  data() {
    return {
      secondModel: 'one',
    }
  },
  methods: {
    ...mapActions('events', ['updateParams', 'updateDateStore']),
  },
  computed: {
    ...mapState('events', ['params', 'currentDate']),
    drafts: {
      get() {
        return this.params.showDrafts
      },
      set(val) {
        this.updateParams({
          showDrafts: val,
        })
      },
    },
    date: {
      get() {
        return this.currentDate
      },
      set(val) {
        this.updateDateStore(val)
      },
    },
    filterParam: {
      get() {
        return this.params.filterParams
      },
      set(val) {
        this.updateParams({
          showDrafts: true,
          filterParams: val,
        })
      },
    },
  },
}
</script>

<style scoped>
.q-date {
  width: auto;
}
</style>
