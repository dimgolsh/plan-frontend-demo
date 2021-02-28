import { AllowedActions, EventForm } from 'src/models/Events'
import { date } from 'quasar'

// date_start: "2021-01-25 09:50:00"
const now = date.formatDate(Date.now(), 'YYYY-MM-DD hh:mm')

const initialForm: EventForm = {
  adres_text: '',
  attachments: [],
  body: '',
  drivers: [],
  jours: [],
  members: [],
  operators: [],
  organization: '',
  status_start: null,
  timeViezd: '',
  title: '',
  cars: [],
  status: 0,
  dateEnd: date.formatDate(Date.now(), 'YYYY-MM-DD'),
  dateStart: date.formatDate(Date.now(), 'YYYY-MM-DD'),
  timeStart: date.formatDate(Date.now(), 'HH:mm'),
  timeEnd: date.formatDate(
    date.addToDate(Date.now(), { hours: 3 }),
    'HH:mm'
  ),
  rigs: [],
  news: 2
}

const actions = [
  {
    label: 'В черновик',
    icon: 'eva-file-text-outline',
    id: AllowedActions.DRAFT,
  },
  {
    label: 'Опубликовать',
    icon: 'eva-cloud-upload-outline',
    color: 'primary',
    id: AllowedActions.PUBLISH,
  },
  {},
  {
    label: 'Просмотр',
    icon: 'eva-eye-outline',
    color: 'primary',
    id: AllowedActions.VIEW,
  },
  {
    label: 'Редактировать',
    icon: 'eva-edit-2-outline',
    color: 'primary',
    id: AllowedActions.EDIT,
  },
  {
    label: 'Удалить',
    icon: 'eva-trash-2-outline\n',
    color: 'red',
    id: AllowedActions.DELETE,
  },
  {}
]

const viewActions = actions.filter(f => f.id !== AllowedActions.VIEW)

export {
  initialForm,
  actions,
  viewActions
}
