<template>
  <div class="relative-position text-grey-8">
    <q-btn
      icon="eva-close-outline"
      class="absolute-top-right btn-image"
      @click="$emit('remove', file)"
      unelevated
      color="text-grey-8"
      flat
      rounded
      dense
      v-if="!view"
    />
    <q-img :src="getUrlsFile(file)" style="width: 100%">
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-negative text-white">
          Cannot load image
        </div>
      </template>
      <div class="absolute-top text-subtitle2"></div>
      <q-icon
        class="absolute all-pointer-events"
        size="18px"
        name="eva-info-outline"
        style="top: 8px; left: 8px"
      >
        <q-tooltip>
          {{ file.name }}
        </q-tooltip>
      </q-icon>
    </q-img>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { FileEvent } from 'src/models/Events'
import { getUrlsFile } from 'src/helpers/events'

export default defineComponent({
  name: 'ImageFileItem',
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
.btn-image {
  z-index: 4;
}
.q-img__content > div {
  position: absolute;
  padding: 16px;
  color: #fff;
  background: rgb(255 255 255 / 1%);
  filter: blur(1px);
}
</style>
