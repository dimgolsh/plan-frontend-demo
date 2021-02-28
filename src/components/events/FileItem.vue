<template>
  <q-item>
    <q-item-section avatar top>
      <q-icon name="eva-file-text-outline" color="info" size="25px" tag="a" :href="getUrlsFile(file)" target="_blank"/>
    </q-item-section>
    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium">
          {{ file.name }}
        </span>
      </q-item-label>
      <q-item-label caption lines="1">
        {{ Math.round(file.size / 1024) }} кб
      </q-item-label>
    </q-item-section>

    <q-item-section top side v-if="!view">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="delete"
          @click="$emit('remove', file)"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { FileEvent } from 'src/models/Events'
import { getUrlsFile } from 'src/helpers/events'

export default defineComponent({
  name: 'FileItem',
  props: {
    file: {
      type: (Object as unknown) as PropType<FileEvent>,
      required: true,
    },
    view: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      getUrlsFile
    }
  },
})
</script>

<style scoped lang="scss">
.q-item {
  padding: 12px 0px;
}
.q-item__section--avatar {
  min-width: 20px;
}
.q-icon {
  text-decoration: none;
}
</style>
