<template>
  <div class="timeViezd text-weight-medium">
    <q-icon name="eva-flag-outline" class="text-my-grey"/>
    {{ format }}
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'TimeViezd',
  props: {
    time: Number,
  },
  computed: {
    format() {
      return date.formatDate(this.time * 1000, 'HH:mm')
    },
  },
}
</script>

<style scoped>
.timeViezd {
  font-size: 12px;
}
</style>
