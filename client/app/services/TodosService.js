import { AppState } from "../AppState.js"
import { Todo } from "../models/Todos.js"
import { api } from "./AxiosService.js"

class TodosService {
  async createTodo(formData) {
    const response = await api.post('api/todos', formData) //posts/creates new formData to the db on the server side
    console.log('posting todos', response)
    const newTodo = new Todo(response.data) //makes a new Todo out of the response data from the service 
    AppState.todos.push(newTodo) // pushes/adds the new Todo to the Appstate. 
    AppState.emit('todos') //forces the todo to draw
  }

  async getTodos() {
    const response = await api.get('api/todos') //awaits the response from the db 
    const newTodos = response.data.map(todo => new Todo(todo)) //maps the todos so they look like Todos and not a bunch of data
    AppState.todos = newTodos //send that newTodo to the appstate
  }
}

export const todosService = new TodosService()