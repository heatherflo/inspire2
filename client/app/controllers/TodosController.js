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
      const todosData = getFormData(form)
      console.log('todosData', todosData)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
  }


}