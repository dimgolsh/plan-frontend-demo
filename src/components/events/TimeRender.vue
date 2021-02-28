<template>
  <div>
    <p class="eventPlan--time">{{ time }}</p>
  </div>
</template>

<script>
import { date } from 'quasar'
const format = (val) => date.formatDate(val, 'HH:mm')

export default {
  name: 'TimeRender',
  props: {
    date_start: Number,
    date_end: Number,
  },
  computed: {
    time() {
      const start = format(this.date_start * 1000)
      const end = format(this.date_end * 1000)
      return this.date_end ? [start, end].join(' - ') : start
    },
  },
}
</script>

<style scoped>
.eventPlan--time {
  color: #848484;
  font-size: 12px;
  margin-bottom: 0;
}
</style>
