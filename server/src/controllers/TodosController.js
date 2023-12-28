import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class TodosController extends BaseController {
  constructor() {
    super('api/todos')
    this.router
      .get('', this.getTodos)
      .post('', this.createTodos)
  }

  async createTodos(request, response, next) {
    try {
      const formData = request.body //requests the body of formData from the client side
      const todo = await todosService.createTodos(formData) //awaits the service to send the formData and calls it a todo
      response.send(todo) //sends back the todo to the client
    } catch (error) {
      next(error)
    }
  }

  async getTodos(request, response, next) {
    try {
      const todos = await todosService.getTodos() //awaits the service to get todos and sends them back to the client side 
      response.send(todos)
    } catch (error) {
      next(error)
    }

  }
}