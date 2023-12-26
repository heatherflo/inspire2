import { AppState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.id = data.id
    this.complete = data.complete
    this.description = data.description
    this.checked = data.checked


  }

}