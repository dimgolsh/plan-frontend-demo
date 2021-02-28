<template>
  <div>
    <q-form class="form-addEvent" @submit.prevent="submit" >
      <section class="bg-white q-py-md q-px-md">
        <q-input
          v-model="title"
          label="Название"
          class="text-bold"
          filled
          :rules="[(val) => !!val || 'Обязательно']"
        />
        <q-toggle
          label="Опубликовать сразу"
          v-model="status"
          class="q-mb-md"
          :false-value="0"
          :true-value="1"
          v-if="checkRoles"
        />
        <div class="flex q-mb-md">
          <q-input
            v-model="dateStart"
            type="date"
            label="Дата начало"
            class="q-mr-md min-width-150"
            filled
            @change="addToEndDate"
          />
          <q-input
            v-model="timeStart"
            type="time"
            filled
            rounded
            label="Время"
          />
        </div>
        <div class="flex">
          <q-input
            v-model="dateEnd"
            type="date"
            label="Примерное возращение"
            class="q-mr-md min-width-150"
            filled
          />
          <q-input
            v-model="timeEnd"
            type="time"
            filled
            rounded
            label="Время"
            class="min-width-100"
          />
        </div>
      </section>

      <div class="q-pa-md">
        <div class="q-gutter-sm">
          <q-radio
            v-model="status_start"
            :val="StatusEnum.VIEZD"
            label="Выезд"
          />
          <q-radio
            v-model="status_start"
            :val="StatusEnum.BIT_TAM"
            label="Быть там"
          />
          <q-input
            v-if="status_start === StatusEnum.BIT_TAM"
            v-model="timeViezd"
            type="time"
            label="Время выезда"
            filled
          />
        </div>
      </div>
      <OrganizationsInputSug
        v-model="organization"
        @adress="(ad) => (adres_text = ad)"
      />
      <AdressInpurSug v-model="adres_text" />
      <div class="q-pa-sm">
        <q-toggle
          label="Это новости"
          v-model="news"
          class="q-mb-md"
          :false-value="2"
          :true-value="1"
        />
      </div>

      <template v-if="!users.loading">
        <UserSelect
          :users="users.users.jours"
          v-model="jours"
          @remove="(users) => (jours = users)"
          @add-user="modalJ = true"
          name="Журналисты"
          class="q-pb-sm"
        />
        <UserSelect
          v-model="operators"
          :users="users.users.operators"
          @remove="(users) => (operators = users)"
          @add-user="modalOp = true"
          name="Операторы"
        />
        <UserSelect
          v-model="drivers"
          :users="users.users.drivers"
          @remove="(users) => (drivers = users)"
          @add-user="modalDr = true"
          name="Водители"
        />
        <UserSelect
          v-model="members"
          :users="users.users.members"
          @remove="(users) => (members = users)"
          @add-user="modalMem = true"
          name="Участники"
        />
        <UserSelect
          v-model="cars"
          :users="users.users.cars"
          @remove="(users) => (cars = users)"
          @add-user="modalCars = true"
          name="Автомобили"
        />
      </template>
      <div class="q-pa-md">
        <q-input
          v-model="body"
          label="Примечание"
          class="text-bold q-mb-md"
          filled
          type="textarea"
        />
        <SelectFiles v-model="attachments" />
      </div>
      <RigsSelection
        v-if="!rigLoading"
        v-model="rigs"
        @add-user="modalRigs = true"
        :users="rigsArr"
        @remove="(users) => (rigs = users)"
      />
      <ModalRigs
        v-model="modalRigs"
        :rigs="rigsArr"
        :users-val="rigs"
        @users="(users) => (rigs = users)"
        name="Оборудование"
      />
      <div class="q-pa-md q-mb-md q-mt-lg">
        <q-btn
          icon="eva-save-outline"
          class="full-width q-px-md"
          type="submit"
          unelevated
          color="info"
          :label="edit ? 'Обновить' : 'Создать'"
          :loading="loading"
          size="md"
        />
      </div>
    </q-form>
    <ModalUserSelect
      v-model="modalJ"
      :users="users.users.jours"
      :users-val="jours"
      @users="(users) => (jours = users)"
      name="Журналисты"
    />
    <ModalUserSelect
      v-model="modalOp"
      :users="users.users.operators"
      :users-val="operators"
      @users="(users) => (operators = users)"
      name="Операторы"
    />
    <ModalUserSelect
      v-model="modalDr"
      :users="users.users.drivers"
      :users-val="drivers"
      @users="(users) => (drivers = users)"
      name="Водители"
    />
    <ModalUserSelect
      v-model="modalMem"
      :users="users.users.members"
      :users-val="members"
      @users="(users) => (members = users)"
      name="Участники"
    />
    <ModalUserSelect
      v-model="modalCars"
      :users="users.users.cars"
      :users-val="cars"
      @users="(users) => (cars = users)"
      name="Автомобили"
    />
  </div>
</template>

<script lang="ts">
import { date } from 'quasar'
import { computed, PropType, reactive, ref, toRefs } from '@vue/composition-api'
import UsersList from './evenForm/UsersList.vue'
import UserSelectedItem from './evenForm/UserSelectedItem.vue'
import AddUser from './evenForm/AddUser.vue'
import UserSelect from './evenForm/UserSelect.vue'
import ModalUserSelect from './evenForm/ModalUserSelect.vue'
import AdressInpurSug from './evenForm/AdressInpurSug'
import OrganizationsInputSug from './evenForm/OrganizationsInputSug'
import SelectFiles from './evenForm/SelectFiles'
import { defineComponent } from '@vue/composition-api'
import { EventForm, StatusEnum } from 'src/models/Events'
import EventService from 'src/api/EventService.ts'
import LabelView from 'components/events/view/LabelView.vue'
import ModalRigs from 'components/events/evenForm/ModalRigs.vue'
import RigsSelection from 'components/events/evenForm/RigsSelection.vue'

export default defineComponent({
  name: 'EventForm',
  components: {
    RigsSelection,
    ModalRigs,
    LabelView,
    SelectFiles,
    OrganizationsInputSug,
    AdressInpurSug,
    ModalUserSelect,
    UserSelect,
    AddUser,
    UserSelectedItem,
    UsersList,
  },
  props: {
    form: {
      type: (Object as unknown) as PropType<EventForm>,
      required: true,
    },
    loading: Boolean,
    edit: Boolean,
  },
  setup(props, { root, emit }) {
    const form = reactive<EventForm>({ ...props.form })
    const modals = reactive({
      modalJ: false,
      modalOp: false,
      modalDr: false,
      modalMem: false,
      modalCars: false,
      modalRigs: false,
    })
    root.$store.dispatch('users/getUsers')
    const users = computed(() => root.$store.state.users)
    const checkRoles = computed(() => root.$store.getters['user/allowedCrud'])
    const rigsArr = ref([])
    const rigLoading = ref(false)
    const dispatchRigs = async () => {
      rigLoading.value = true
      const rigsData = await EventService.getrigs()
      rigsArr.value = rigsData.sort(function (a, b) {
        if (a.categoryName > b.categoryName) {
          return 1
        }
        if (a.categoryName < b.categoryName) {
          return -1
        }
        return 0
      })
      rigLoading.value = false
    }
    dispatchRigs()
    const addToEndDate = (e) => {
      form.dateEnd = date.formatDate(form.dateStart, 'YYYY-MM-DD')
    }
    const submit = () => {
      console.log(form)
      emit('submit', form)
    }
    return {
      users,
      addToEndDate,
      submit,
      StatusEnum,
      rigsArr,
      rigLoading,
      checkRoles,
      ...toRefs(modals),
      ...toRefs(form),
    }
  },
})
</script>

<style lang="scss">
.platform-ios {
  .form-addEvent {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
.form-addEvent {
  margin-top: 20px;
  //.q-field__control {
  //  height: 50px;
  //}
  .q-field__label {
    //text-transform: uppercase;
    color: #40474f;
    font-size: 14px;
    font-weight: 300;
  }

  .q-field--filled .q-field__control {
    border-radius: 8px;
    background: #eff0f6;
  }

  .q-field__control:before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    background: rgb(125 125 125 / 5%);
  }
}

.modal-add {
  .q-field__control {
    height: 35px;
  }
  .q-field--filled .q-field__control {
    border-radius: 8px;
  }
}
.min-width-100 {
  min-width: 100px;
}
.min-width-150 {
  min-width: 150px;
}
</style>
