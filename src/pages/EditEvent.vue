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
          @click="$router.go(-1)"
          class="text-grey-8"
        />
        <q-space />
        <p class="text-grey-8 q-mb-none">Редактирование съемки</p>
        <q-space />
      </q-toolbar>
    </q-header>
    <EventForm
      v-if="!fetchFormSt"
      :form="form"
      @submit="submit"
      :loading="loading"
      edit
    />
  </q-page>
</template>

<script lang="ts">
import EventForm from '../components/events/EventForm'
import { ref, defineComponent } from '@vue/composition-api'
import { initialForm } from '../data/EventsData'
import EventService from 'src/api/EventService.ts'
import { EventForm as EventFormModel } from '../models/Events'
import { prepareEventForm, prepareForm } from '../helpers/events'
import VueRouter, { Route } from 'vue-router'

export default defineComponent({
  name: 'EditEvent',
  components: { EventForm },
  setup(_, { root }: { $route: Route; $router: VueRouter }) {
    const form = ref(initialForm)
    const loading = ref(false)
    const fetchFormSt = ref(true)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const id: number = +root.$route.params?.id ?? 0

    const fetchForm = () => {
      EventService.viewEvent(id).then((res) => {
        form.value = prepareForm(res)
        fetchFormSt.value = false
      })
    }
    fetchForm()
    const afterUpdate = () => {
      root.$q.notify({
        progress: true,
        message: 'Cъемка обновлена',
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
                  id: id.toString(),
                },
              })
            },
          },
        ],
      })
      root.$router.push({ name: 'EventsList' })
    }
    const submit = (form: EventFormModel) => {
      loading.value = true

      EventService.updateEvent(id, prepareEventForm(form))
        .then(afterUpdate)
        .finally(() => {
          loading.value = false
        })
    }
    return {
      form,
      loading,
      submit,
      fetchFormSt,
    }
  },
})
</script>
