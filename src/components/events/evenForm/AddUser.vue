<template>
  <div class="flex bg-grey-3 rounded-borders itemUser items-center">
    <q-btn icon="eva-plus-circle" class="iconName q-mr-sm text-grey-6" unelevated dense rounded/>
    Добавить
  </div>
</template>

<script>
export default {
  name: 'AddUser'
}
</script>

<style scoped>
.itemUser {
  border-radius: 8px;
  width: auto;
  padding: 4px 8px;
  margin-bottom: 8px;
  display: inline-block;
  margin-right: 8px;
  align-items: center;
}
.iconName {
  font-size: 12px;
}
</style>
