import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class TodosController extends BaseController {
  constructor() {
    super('api/birds')
    this.router
    logger.log('are you logging?')
  }

  async createTodos(request, response, next) {
    try {
      const formData = request.body
      const todo = await todosService.createTodos(formData)
      response.send(todo)
    } catch (error) {
      next(error)
    }
  }
}