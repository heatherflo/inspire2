import { dbContext } from "../db/DbContext.js"


class TodosService {
  async createTodos(formData) {
    const todo = await dbContext.Todo.create(formData)
    return todo
  }

  async getTodos(request, response, next) {
    const todo = await dbContext.Todo.find()
    return todo
  }

}

export const todosService = new TodosService()