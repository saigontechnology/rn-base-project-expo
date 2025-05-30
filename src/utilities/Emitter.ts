import { EmitterListener } from './types'

class EventRegister {
  static _Listeners: EmitterListener = {
    count: 0,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    refs: { key: { eventName: '', callback: () => {} } },
  }

  static addEventListener(eventName: string, callback: (param?: unknown) => void): string {
    EventRegister._Listeners.count += 1
    const eventId = `l${EventRegister._Listeners.count}`
    EventRegister._Listeners.refs[eventId] = {
      eventName: eventName,
      callback,
    }
    return eventId
  }

  static removeEventListener(id: string): boolean {
    return delete EventRegister._Listeners.refs[id]
  }

  static removeAllListeners(): boolean {
    let removeError = false
    Object.keys(EventRegister._Listeners.refs).forEach(_id => {
      const removed = delete EventRegister._Listeners.refs[_id]
      removeError = !removeError ? !removed : removeError
    })
    return !removeError
  }

  static emitEvent(eventName: string, param?: unknown): void {
    Object.keys(EventRegister._Listeners.refs).forEach(_id => {
      if (EventRegister._Listeners.refs[_id] && eventName === EventRegister._Listeners.refs[_id].eventName) {
        EventRegister._Listeners.refs[_id].callback(param)
      }
    })
  }

  /*
   * Shorten
   */
  static on(eventName: string, callback: (param?: unknown) => void): string {
    return EventRegister.addEventListener(eventName, callback)
  }

  static rm(eventName: string): boolean {
    return EventRegister.removeEventListener(eventName)
  }

  static rmAll(): boolean {
    return EventRegister.removeAllListeners()
  }

  static emit(eventName: string, param?: unknown): void {
    EventRegister.emitEvent(eventName, param)
  }
}

export default EventRegister
