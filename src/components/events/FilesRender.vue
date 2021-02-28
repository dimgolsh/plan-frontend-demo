<template>
  <div>
    <div v-for="(file, key) in value">
      <div v-if="imageType(file.type)">
        <ImageFileItem :file="file" @remove="(file) => $emit('remove', file)" :view="view" />
      </div>
      <div v-else>
        <FileItem :file="file" @remove="(file) => $emit('remove', file)" :view="view" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { imageType } from 'src/helpers/events'
import ImageFileItem from './ImageFileItem.vue'
import FileItem from './FileItem.vue'
import { FileEvent } from 'src/models/Events'

export default defineComponent({
  name: 'FilesRender',
  components: { FileItem, ImageFileItem },
  props: {
    value: {
      type: (Array as unknown) as PropType<Array<FileEvent>>,
      required: true,
    },
    view: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      imageType,
    }
  },
})
</script>

<style scoped lang="scss"></style>
