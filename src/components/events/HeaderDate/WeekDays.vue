<template>
  <q-toolbar class="justify-between days-week">
    <small v-for="d in weekDay">
      {{ d }}
    </small>
  </q-toolbar>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'WeekDays',
  setup() {
    const weekDay = ref(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'])
    return {
      weekDay,
    }
  },
}
</script>

<style scoped>
.days-week {
  min-height: 10px;
  padding: 0 8px;
  opacity: 0.7;
}
</style>
