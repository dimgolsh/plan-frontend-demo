<template>
  <div class="flex items-center">
    <OnePeople
      v-for="jour in slicedPeoples"
      :key="jour.id"
      :fio="jour.FIO"
      class="q-ml-sm"
    />
    <p class="count-people text-grey-5" v-if="peoples.length > 2">
      +
      {{ peoples.length - 2 }}
<!--      <q-icon name="eva-person-add-outline" />-->
    </p>
  </div>
</template>

<script>
import OnePeople from './OnePeople'
export default {
  name: 'PeopleRender',
  components: { OnePeople },
  props: {
    jours: Array,
    operators: Array,
  },
  computed: {
    peoples() {
      return [...this.jours, ...this.operators]
    },
    slicedPeoples() {
      return this.peoples.slice(0, 2)
    },
  },
}
</script>

<style scoped>
.count-people {
  font-size: 10px;
  margin-bottom: 0;
  margin-left: 4px;
}
</style>
