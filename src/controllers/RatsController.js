import { missionsService } from "../services/MissionsService";
import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
      .get('/:ratId/missions', this.getRatMission)
  }



  async getRats(request, response, next) {
    try {
      const rats = await ratsService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }

  async getRatMission(request, response, next) {
    try {
      const ratId = request.params.ratId
      const missions = await missionsService.getRatMission(ratId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
}