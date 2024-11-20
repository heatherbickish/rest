import { dbContext } from "../db/DbContext"

class MissionsService {
  async getAllMissions() {
    const mission = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return mission
  }

}
export const missionsService = new MissionsService()