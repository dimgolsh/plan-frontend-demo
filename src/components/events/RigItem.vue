<template>
  <q-item>
    <q-item-section avatar top>
      <q-icon name="eva-video-outline" color="info" size="25px" />
    </q-item-section>
    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium">
          {{ rig.name }}
        </span>
      </q-item-label>
      <q-item-label caption lines="1">
        {{ rig.categoryName }}
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
          @click="$emit('remove', rig.id)"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Rig } from 'src/models/Events'

export default defineComponent({
  name: 'RigItem',
  props: {
    rig: {
      type: (Object as unknown) as PropType<Rig>,
      required: true,
    },
    view: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
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
.ellipsis {
  white-space: normal;
}
</style>
