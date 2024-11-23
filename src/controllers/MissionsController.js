import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getAllMissions)
      .post('', this.createMission)
      .put('/:missionsId', this.updateMission)
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

  async updateMission(request, response, next) {
    try {
      const missionsId = request.params.missionsId
      const missionData = request.body.updatedMission
      const mission = await missionsService.updateMission(missionsId, missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }
}