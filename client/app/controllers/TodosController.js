import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


function _drawTodos() {
  console.log('drawing todos')
  const todos = AppState.todos
  let content = ''
  todos.forEach(todo => content += todo.todoList)
  document.getElementById('todo-list').innerHTML = content
}


export class TodosController {
  constructor() {
    console.log('controller connected')
    AppState.on('todos', _drawTodos)
    AppState.on('user', this.getTodos)
  }

  async createTodo() {
    try {
      event.preventDefault() // preventing the default refresh page load
      const form = event.target //sets the event in question to the form
      const formData = getFormData(form) //sets the ability to get form data from the form and calls it formData
      console.log('todosData', formData) //checks to see what the formData is and puts it in te console.
      await todosService.createTodo(formData) //awaits the service to do its job and sends the formData down to the service
      Pop.success("data entered!")
      // @ts-ignore
      form.reset() // makes it so the form doesn't reset after putting in information

    } catch (error) {
      console.log(error)
      Pop.toast(error.message)

    }
  }

  async getTodos() {
    try {
      await todosService.getTodos() //awaits the service to get info
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
  }

}