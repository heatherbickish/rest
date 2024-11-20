import { dbContext } from "../db/DbContext"

class MissionsService {
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat', '-name -picture')
    await mission.populate('location')
    return mission
  }
  async getAllMissions() {
    const mission = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return mission
  }

}
export const missionsService = new MissionsService()