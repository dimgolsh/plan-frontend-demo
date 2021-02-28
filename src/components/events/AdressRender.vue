<template>
  <p class="blue-grey-6 adres">
    <q-icon name="eva-navigation-2-outline" />
   {{ adress }}
  </p>
</template>

<script>
export default {
  name: 'AdressRender',
  props: {
    adress: String,
  },
}
</script>

<style scoped>
.adres {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 9px;
  max-width: 98px;
  margin-bottom: 0;
}
</style>
