<template>
  <div class="flex bg-my-grey-lighter rounded-borders itemUser items-center">
    <UserAvatar :avatar="user.avatar" :username="user.username" size="18px" class="q-mr-sm"/>
    {{ user.FIO }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { User } from 'src/models/User'
import UserAvatar from 'components/user/UserAvatar.vue'

export default defineComponent({
  name: 'UserItem',
  components: { UserAvatar },
  props: {
    user: (Object as unknown) as PropType<User>,
  },
  setup() {},
})
</script>

<style scoped lang="scss">
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
