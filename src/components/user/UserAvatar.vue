<template>
  <q-avatar color="primary" text-color="white" :size="size">
    <img :src="avatar" v-if="avatar" />
    <p v-else class="q-mb-none">
      {{ username[0].toUpperCase() }}
    </p>
  </q-avatar>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    avatar: String,
    username: String,
    size: {
      type: String,
    }
  },
}
</script>
