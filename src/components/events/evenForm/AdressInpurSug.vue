<template>
  <div class="q-pa-md">
    <q-select
      filled
      v-model="mod"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      @new-value="createValue"
      :options="optionsFormat"
      @filter="filterFn"
      label="Адрес"
      @input-value="e => mod = e"
    />
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { getAdress } from 'src/api/suggestions'

export default {
  name: 'AdressInpurSug',
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const options = ref([])
    const mod = computed({
      get: () => props.value,
      set: (e) => emit('input', e),
    })
    const filterFn = async (val, update) => {
      update(async () => {
        options.value = val === '' ? [] : await getAdress(val)
      })
    }

    const createValue = (val, done) => {
      if (val.length > 2) {
        done(val, 'add-unique')
      }
    }
    const optionsFormat = computed(() => {
      return options.value.map((op) => op.value)
    })
    return {
      options,
      mod,
      filterFn,
      createValue,
      optionsFormat
    }
  },
}
</script>

<style scoped></style>
