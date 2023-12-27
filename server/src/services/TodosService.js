import { dbContext } from "../db/DbContext.js"


class TodosService {
  async createTodos(formData) {
    const todo = await dbContext.Todo.create(formData) //waits for the db to collect the form data and sends it back to the server controller
    return todo
  }

  async getTodos(request, response, next) {
    const todo = await dbContext.Todo.find() //waits for the db to find the todos and returns them to the server controller
    return todo
  }

}

export const todosService = new TodosService()