<template>
  <q-tabs align="left" inline-label indicator-color="primary">
    <q-route-tab to="/" label="Cъемки" icon="eva-video-outline"  class="q-tab__label"/>
    <q-route-tab to="/" label="Дежурные" icon="eva-people-outline" />
  </q-tabs>
</template>

<script>
export default {
  name: 'TopTabs',
};
</script>

<style lang="scss" scoped>

  .q-tab__label {
    font-weight: 400 !important;
  }
  .q-tab__icon {
    font-size: 20px;
    font-weight: 100;
    opacity: 0.3;
  }

</style>
