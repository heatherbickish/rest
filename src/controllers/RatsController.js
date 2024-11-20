import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
  }



  async getRats(request, response, next) {
    try {
      const rats = await ratsService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }

}