import {
  EventAttachment,
  EventForm,
  EventPlan,
  EventRequest,
  FileEvent,
} from 'src/models/Events'
import { date } from 'quasar'


export const imageType = (type: string) => {
  return ['image/jpeg', 'image/png'].includes(type)
}
/**
 * Transform with compability IOS / MAC
 * @param dateEv
 * @param time
 */
const formatToDateTime = (dateEv: string, time: string) => {
  return date.formatDate(new Date(`${dateEv}T${time}`), 'YYYY-MM-DD HH:mm:ss')
}

const getTimeFromTimestamp = (timestamp: number) => {
  return timestamp ? date.formatDate(timestamp * 1000, 'HH:mm') : ''
}

const getDateFromTimestamp = (timestamp: number) => {
  return timestamp ? date.formatDate(timestamp * 1000, 'YYYY-MM-DD') : ''
}

const prepareAttachment = ({
  base_url,
  path,
  ...args
}: EventAttachment) => ({
  base_url,
  path,
  url: `${base_url}${path}`,
  delete_url: `/api/web/v1/storage/deletefile?path=${path}`,
  ...args
})

// date_start: "2021-01-25 09:50:00"
const prepareEventForm: (eventForm: EventForm) => EventRequest = (
  eventForm
) => {
  return {
    ...eventForm,
    date_start: formatToDateTime(eventForm.dateStart, eventForm.timeStart),
    date_end: formatToDateTime(eventForm.dateEnd, eventForm.timeEnd),
    event_start_time: eventForm.timeViezd
      ? formatToDateTime(eventForm.dateStart, eventForm.timeViezd)
      : null,
    department_id: eventForm.news,
  }
}
const getUrlsFile = (file: FileEvent) => {
  const path = file.path.startsWith('\\') ? file.path : `\\${file.path}`
  return `${file.base_url}${path}`
}

const getIds: <T extends Array<{ id: number }>>(arg: T) => Array<number> = (
  arg
) => arg.map(({ id }) => id)

const prepareForm: (eventPlan: EventPlan) => EventForm = (
  eventPlan: EventPlan
) => {
  return {
    timeViezd: getTimeFromTimestamp(eventPlan.dateViezdTime),
    dateStart: getDateFromTimestamp(eventPlan.dateStartTime),
    timeEnd: getTimeFromTimestamp(eventPlan.dateEndTime),
    dateEnd: getDateFromTimestamp(eventPlan.dateEndTime),
    timeStart: getTimeFromTimestamp(eventPlan.dateStartTime),
    status: eventPlan.status,
    cars: eventPlan.cars.map((car) => car.id),
    adres_text: eventPlan.adres_text,
    attachments: eventPlan.eventAttachments.map(prepareAttachment),
    body: eventPlan.body,
    drivers: getIds(eventPlan.drivers),
    jours: getIds(eventPlan.jours),
    members: getIds(eventPlan.members),
    operators: getIds(eventPlan.operators),
    rigs: getIds(eventPlan.rigs),
    organization: eventPlan.organization_text,
    status_start: eventPlan.status_start,
    title: eventPlan.title,
    news: eventPlan.department_id,
  }
}

export { prepareEventForm, getUrlsFile, prepareForm }
