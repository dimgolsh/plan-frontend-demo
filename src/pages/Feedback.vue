<template>
  <q-page>
    <q-header class="bg-white" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="eva-arrow-ios-back"
          aria-label="Menu"
          class="text-grey-7"
          @click="$router.go(-1)"
        />
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="eva-close"
          aria-label="Menu"
          to="/"
          class="text-grey-7"
        />
      </q-toolbar>
    </q-header>
    <div class="flex column wrapper full-height">
      <div class="bg-white q-pa-md">
        <h5 class="text-weight-medium text-my-grey-dark">
          Оставьте отзыв или предложения
        </h5>
        <p class="text-grey-6">
          Мы заинтересованы в разработке и будем рады, если вы оставите
          замечания или предложения по улучшению качества или добавление новых
          функций.
        </p>
      </div>
    </div>
    <div class="q-pa-md">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="info"
        icon="star_border"
        icon-selected="star"
        class="q-mb-md"
      />
      <q-input v-model="text" filled type="textarea" label="Напишите здесь" />
      <q-btn
        label="Отправить"
        unelevated
        class="q-mt-sm full-width"
        color="primary"
        @click="add"
      />
    </div>
  </q-page>
</template>

<script>
import LabelView from '../components/events/view/LabelView'
import { db } from '../boot/firebase'
import { mapState } from 'vuex'
export default {
  name: 'Feedback',
  components: { LabelView },
  data() {
    return {
      ratingModel: 0,
      text: '',
    }
  },
  computed: {
    ...mapState('user', ['user']),
  },
  methods: {
    add() {
      db.collection('feedback')
        .add({
          rating: this.ratingModel,
          text: this.text,
          user: this.user.username,
        })
        .then((docRef) => {
          this.$router.push({ name: 'Other' })
          this.$q.notify({
            message: 'Спасибо за ваш отзыв или обращение',
          })
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },
  },
}
</script>

<style scoped></style>
