<template>
  <section class="bg-white q-py-sm q-px-md">
    <p class="q-mb-sm text-grey-8">Оборудование</p>
    <RigItem
      v-for="rig in userSelected"
      :key="rig.id"
      :rig="rig"
      @remove="removeUser"
    />
    <AddUser @click.native="$emit('add-user')" class="full-width text-center"/>
  </section>
</template>

<script>
import RigItem from '../RigItem'
import AddUser from './AddUser'
import useForm from 'components/events/evenForm/useForm'
export default {
  name: 'RigsSelection',
  components: { AddUser, RigItem },
  props: {
    users: Array,
    name: String,
    value: Array,
  },
  setup(props, { emit }) {
    return {
      ...useForm(props, emit),
    }
  },
}
</script>

<style scoped></style>
