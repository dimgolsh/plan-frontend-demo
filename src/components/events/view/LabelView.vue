<template>
  <div
    class="text-subtitle2 text-my-grey-light text-weight-regular font-size-12"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'LabelView',
  props: {
    text: String,
  },
}
</script>

<style scoped></style>
