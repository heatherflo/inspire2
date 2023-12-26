import { AppState } from "../AppState.js"
import { Todo } from "../models/Todos.js"
import { api } from "./AxiosService.js"

class TodosService {
  async createTodos(formData) {
    const response = await api.post('api/todos', formData)
    console.log('posting todos', response)
    const newTodo = new Todo(response.data)
    AppState.todos.push(newTodo)
    AppState.emit('todos')
  }

  async getTodos() {
    const response = await api.get('api/todos')
    const newTodos = response.data.map(todo => new Todo(todo))

  }
}

export const todosService = new TodosService()