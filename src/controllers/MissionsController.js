import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getAllMissions)
      .post('', this.createMission)
  }


  async getAllMissions(request, response, next) {
    try {
      const missions = await missionsService.getAllMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const missions = await missionsService.createMission(missionData)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
}