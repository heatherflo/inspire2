import { api } from "./AxiosService.js"

class TodosService {
  async createTodos(formData) {
    const response = await api.post('api/todos', formData)
    console.log('posting todos', response)
  }

}

export const todosService = new TodosService()