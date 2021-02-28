<template>
  <q-badge color="grey-6 draft">
   <q-icon name="eva-edit-2"/>
    <span v-if="more">Черновик</span>
  </q-badge>
</template>

<script>
export default {
name: "DraftEvent",
  props: {
    status: Number,
    more: Boolean
  },
}
</script>

<style scoped>
.draft {
  font-size: 10px;
  margin-right: 10px;
}
</style>
