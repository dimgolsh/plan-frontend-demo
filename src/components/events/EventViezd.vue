<template>
  <q-badge color="info">
    {{ status ? 'ТАМ' : 'ВЫЕЗД' }}
  </q-badge>
</template>

<script>
export default {
  name: 'EventViezd',
  props: {
    status: Number,
  },
}
</script>

<style scoped></style>
