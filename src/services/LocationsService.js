import { dbContext } from "../db/DbContext"

class LocationsService {
  async getLocations() {
    const location = await dbContext.Locations.find()
    return location
  }

} export const locationService = new LocationsService()