import { AppState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.id = data.id
    this.complete = data.complete
    this.description = data.description
    this.checked = data.checked


  }


  get todoList() {
    return `<div class="col-4 text-light" id="todo-list">
    <h2>${this.description}</h2>
  </div>`
  }
}