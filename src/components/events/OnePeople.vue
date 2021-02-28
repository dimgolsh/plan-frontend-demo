<template>
  <div class="flex items-center people text-blue-grey-8">
    <div class="ellipsis"></div>
    <p class="q-mb-none">{{ fio }}</p>
  </div>
</template>

<script>
export default {
  name: 'OnePeople',
  props: {
    fio: String
  }
}
</script>

<style scoped>
.ellipsis {
  width: 4px;
  height: 4px;
  border-radius: 8px;
  background: #c4c4c4;
  margin-right: 6px;
}
.people {
  font-size: 10px;
}
</style>
