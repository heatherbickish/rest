import { locationService } from "../services/LocationsService";
import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:locationId/missions', this.getMissionAtLocation)
  }


  async getLocations(request, response, next) {
    try {
      const locations = await locationService.getLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }

  async getMissionAtLocation(request, response, next) {
    try {
      const locationId = request.params.locationId
      const missions = await missionsService.getMissionAtLocation(locationId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
}