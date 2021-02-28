<template>
  <q-list bordered separator>
    <q-item clickable v-ripple class="bg-white"  v-for="index in 10" :key="index + 52">
      <q-item-section>
        <q-item-label header class="eventPlan--label">
          <q-skeleton width="10rem" class="bg-grey-3"/>
        </q-item-label>
        <div class="flex justify-between items-center">
          <div class="flex items-center q-mb-sm">
            <q-skeleton width="2rem" height="1rem" class="q-mr-sm bg-grey-3"/>
            <q-skeleton width="4rem" height="0.5rem" class="q-mr-sm bg-grey-3"/>
            <q-skeleton width="4rem" height="0.5rem" class="q-mr-sm bg-grey-3"/>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex items-center">
            <q-skeleton width="2rem" height="1rem" class="q-mr-sm bg-grey-3"/>
            <q-skeleton width="2rem" height="0.5rem" class="q-mr-sm bg-grey-3"/>
            <q-skeleton width="3rem" height="0.3rem" class="q-mr-sm bg-grey-3"/>
          </div>
          <div class="icons flex text-grey-6">
            <q-skeleton width="0.5rem" height=".5rem"/>
          </div>
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'ListEventsLoader',
}
</script>

<style scoped>
.eventPlan--label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #000000;
  padding: 0;
  padding-bottom: 7px;
  margin-bottom: 7px;
}
.eventPlan--time {
  color: #848484;
  font-size: 12px;
}
</style>
