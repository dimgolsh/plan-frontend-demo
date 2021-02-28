/* eslint-disable camelcase */

import { User } from 'src/models/User'

export interface EventAttachment {
  id: number
  event_id: number
  path: string
  base_url: string
  type: string
  size: number
  name: string
  created_at: number
}

export interface Car {
  id: number
  name: string
  gosnomer: string
}

export interface Link {
  href: string
}

export interface Links {
  self: Link
  next: Link
  last: Link
}

export interface Rig {
  id: number
  name: string
  categoryName: string
}

export interface EventPlan {
  id: number
  title: string
  body: string
  status: number
  created_at: number
  updated_at: number
  eventAttachments: EventAttachment[]
  operators: Array<User>
  jours: Array<User>
  members: Array<User>
  drivers: Array<User>
  createdBy: User
  updatedBy: User
  cars: Car[]
  status_start: number
  rigs: Rig[]
  adres_text: string
  dateStartTime: number
  dateEndTime: number
  dateViezdTime: number
  bramid: string
  organization_text: string
  department_id: 1 | 2
}

export interface Meta {
  totalCount: number
  pageCount: number
  currentPage: number
  perPage: number
}

export interface EventsResponse {
  items: EventPlan[]
  _links: Links
  _meta: Meta
}

export interface FileEvent {
  name: string
  type: string
  size: number
  base_url: string
  path: string
  url: string
  delete_url: string
}

export interface EventForm {
  title: string
  body: string
  dateEnd: string
  dateStart: string
  timeStart: string
  timeEnd: string
  members: Array<number>
  drivers: Array<number>
  jours: Array<number>
  operators: Array<number>
  cars: Array<number>
  adres_text: string
  organization: string
  status_start: null | number
  timeViezd: string
  attachments: Array<FileEvent>
  status: number
  rigs: Array<number>
  news: 1 | 2
}

export interface EventRequest extends EventForm {
  date_start: string
  date_end: string
  event_start_time: string | null
  department_id: 1 | 2
}

export enum StatusEnum {
  VIEZD,
  BIT_TAM,
  EFIR,
}


export enum AllowedActions {
  DELETE = 'delete',
  PUBLISH = 'publish',
  DRAFT = 'draft',
  ARHIV = 'arhiv',
  VIEW = 'view',
  EDIT = 'edit',

}
