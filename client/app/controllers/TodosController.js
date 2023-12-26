import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"



export class TodosController {
  constructor() {
    console.log('controller connected')
  }

  async createTodo() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      console.log('todosData', formData)
      await todosService.createTodos(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
  }

}