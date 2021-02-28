<template>
  <q-page>
    <q-header class="bg-white" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="eva-close"
          aria-label="Menu"
          to="/"
          class="text-grey-8"
        />
        <q-space />
        <p class="text-grey-8 q-mb-none">Создание съемки</p>
        <q-space />
      </q-toolbar>
    </q-header>
    <EventForm :form="form" @submit="submit" :loading="loading" />
  </q-page>
</template>

<script lang="ts">
import { initialForm } from '../data/EventsData'
import { ref, defineComponent } from '@vue/composition-api'
import EventService from 'src/api/EventService'
import { EventForm as EventFormModel } from 'src/models/Events'
import EventForm from 'components/events/EventForm.vue'
import { prepareEventForm } from 'src/helpers/events'
import { db } from 'boot/firebase'

export default defineComponent({
  name: 'AddEvent',
  components: { EventForm },
  setup(_, { root }) {
    const form = ref(initialForm)
    const loading = ref(false)
    const newEvent = ref('')
    const afterCreate = (res) => {
      root.$q.notify({
        progress: true,
        message: 'Cъемка создана',
        color: 'white',
        textColor: 'info',
        actions: [
          {
            label: 'Открыть',
            color: 'primary',
            handler: () => {
              root.$router.push({
                name: 'EventView',
                params: {
                  id: res.id.toString(),
                },
              })
            },
          },
        ],
      })
      newEvent.value = res
      root.$router.push({ name: 'EventsList' })
    }
    const notifyError = () => {
      root.$q.notify({
        message: 'Произошла ошибка',
        color: 'white',
        textColor: 'primary',
      })
    }
    const submit = (form: EventFormModel) => {
      loading.value = true
      EventService.createEvent(prepareEventForm(form))
        .then(afterCreate)
        .catch(notifyError)
        .finally(() => {
          loading.value = false
          db.collection('eventsList')
            .doc(newEvent.value.id.toString())
            .set(newEvent.value)
        })
    }
    return {
      submit,
      form,
      loading,
    }
  },
})
</script>

<style lang="scss"></style>
