<template>
  <q-scroll-area style="height: 80%">
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        class="bg-white"
        v-for="user in users"
        :key="user.id"
        @click.stop="!remove ? $emit('add', user) : ''"
      >
        <q-item-section avatar>
          <UserAvatar :avatar="user.avatar" :username="user.FIO" />
        </q-item-section>
        <q-item-section>{{ user.FIO }}</q-item-section>
        <q-item-section v-if="remove">
          <q-btn
            icon="eva-close"
            class="iconName q-ml-sm text-grey-6"
            unelevated
            dense
            rounded
            @click.stop="$emit('remove', user.id)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import UserAvatar from '../../user/UserAvatar'
export default {
  name: 'UsersList',
  components: { UserAvatar },
  props: {
    users: Array,
    remove: Boolean,
  },
}
</script>

<style scoped></style>
