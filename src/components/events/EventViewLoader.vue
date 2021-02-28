<template>
  <div>
    <q-card-section class="bg-white">
      <div class="text-h6 q-mt-sm q-mb-xs">
        <q-skeleton width="10rem" class="bg-grey-3" height="27px" />
      </div>
      <div class="text-subtitle2 text-my-grey text-weight-regular">
        <q-skeleton width="8rem" class="bg-grey-3" height="25px" />
      </div>
    </q-card-section>
    <q-card-section class="bg-white q-mt-md">
      <div
        class="text-subtitle2 text-my-grey-light text-weight-regular font-size-12"
      >
        Начало
      </div>
      <div class="flex">
        <div class="text-h7 text-weight-medium">
          <q-skeleton width="66px" class="bg-grey-3" height="25px" />
        </div>
        <span class="text-weight-medium q-mx-sm">
          <q-skeleton width="50px" class="bg-grey-3" height="25px" />
        </span>
        <q-skeleton width="42px" class="bg-grey-3" height="25px" />
      </div>
    </q-card-section>
    <q-card-section class="bg-white q-mt-md">
      <LabelView text="Адрес"/>
      <q-skeleton width="196px" class="bg-grey-3" height="25px" />
    </q-card-section>
    <q-card-section class="bg-white q-mt-md">
      <LabelView text="Журналисты"/>
      <div class="flex q-mb-md">
        <q-skeleton width="150px" class="bg-grey-3 q-mr-sm" height="29px" />
        <q-skeleton width="150px" class="bg-grey-3" height="29px" />
      </div>
      <LabelView text="Операторы"/>
      <div class="flex q-mb-md">
        <q-skeleton width="150px" class="bg-grey-3 q-mr-sm" height="29px" />
        <q-skeleton width="150px" class="bg-grey-3" height="29px" />
      </div>
      <LabelView text="Водители"/>
      <div class="flex q-mb-md">
        <q-skeleton width="150px" class="bg-grey-3 q-mr-sm" height="29px" />
        <q-skeleton width="150px" class="bg-grey-3" height="29px" />
      </div>
      <LabelView text="Автомобили"/>
      <div class="flex q-mb-md">
        <q-skeleton width="150px" class="bg-grey-3 q-mr-sm" height="29px" />
        <q-skeleton width="150px" class="bg-grey-3" height="29px" />
      </div>
    </q-card-section>
  </div>
</template>

<script>
import LabelView from 'components/events/view/LabelView'
export default {
  name: 'EventViewLoader',
  components: { LabelView },
}
</script>

<style scoped></style>
