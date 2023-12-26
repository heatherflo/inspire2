import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { Todo } from './models/Todos.js'

class ObservableAppState extends EventEmitter {
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null

  /**@type {Todo[]} */
  todos = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})