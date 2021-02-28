import { axiosServer } from 'boot/axios'
import { AllowedActions, EventPlan, EventRequest, EventsResponse, Rig } from 'src/models/Events'
import { FilterParams } from 'src/store/events'

class EventService {
  public server = axiosServer

  async getEvents(filterParams: FilterParams) {
    const data = await this.server.post<EventsResponse>(
      '/api/web/v1/event/dashboard',
      filterParams
    ).then((res) => res.data)
    return data
  }

  async createEvent(eventForm: EventRequest) {
    const data = await this.server
      .post<EventPlan>('/api/web/v1/event', eventForm)
      .then((res) => res.data)
    return data
  }

  async updateEvent(id: number, eventForm: EventRequest) {
    const data = await this.server
      .put<EventPlan>(`/api/web/v1/event/${id}`, eventForm)
      .then((res) => res.data)
    return data
  }

  async viewEvent(id: number): Promise<EventPlan> {
    const data = await this.server
      .get<EventPlan>(`/api/web/v1/event/${id}`)
      .then((res) => res.data)
    return data
  }

  async bulkEvent(
    ids: Array<number>,
    action: AllowedActions
  ): Promise<EventPlan> {
    const data = await this.server
      .post<EventPlan>('/api/web/v1/event/bulk', {
        ids,
        action,
      })
      .then((res) => res.data)
    return data
  }

  async getrigs() {
    const data = await this.server
      .get<Array<Rig>>('/api/web/v1/event/getrigs')
      .then((res) => res.data)
    return data
  }
}

export default new EventService()
