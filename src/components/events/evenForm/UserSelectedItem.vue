<template>
  <div class="flex bg-grey-3 rounded-borders itemUser items-center">
    <UserAvatar
      :avatar="user.avatar"
      :username="user.username"
      size="18px"
      class="q-mr-sm"
    />
    {{ user.FIO }}
    <q-btn
      icon="eva-close"
      class="iconName q-ml-sm text-grey-6"
      unelevated
      dense
      rounded
      @click="$emit('remove', user.id)"
    />
  </div>
</template>

<script>
import UserAvatar from '../../user/UserAvatar'

export default {
  name: 'UserSelectedItem',
  components: { UserAvatar },
  props: {
    user: Object,
  },
}
</script>

<style scoped>
.itemUser {
  border-radius: 8px;
  width: auto;
  padding: 4px 8px;
  margin-bottom: 8px;
  display: inline-block;
  align-items: center;
  margin-right: 8px;
}
.iconName {
  font-size: 12px;
}
</style>
