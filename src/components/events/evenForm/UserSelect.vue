<template>
  <section class="bg-white q-py-sm q-px-md">
    <p class="q-mb-sm  text-grey-8">{{ name }}</p>
    <UserSelectedItem
      v-for="user in userSelected"
      :user="user"
      :key="user.id"
      @remove="removeUser"
    />
    <AddUser @click.native="$emit('add-user')" />
  </section>
</template>

<script>
import UserSelectedItem from './UserSelectedItem'
import AddUser from './AddUser'
import useForm from './useForm'
export default {
  name: 'UserSelect',
  components: { AddUser, UserSelectedItem },
  props: {
    users: Array,
    name: String,
    value: Array,
  },
  setup(props, { emit }){
    return {
      ...useForm(props, emit)
    }
  }
}
</script>

<style scoped></style>
