import { dbContext } from "../db/DbContext"

class MissionsService {
  async updateMission(missionsId, missionData) {
    const missionToUpdate = await dbContext.Missions.findById(missionsId)
    // missionToUpdate.completed = missionData.completed || missionToUpdate.completed
    await missionToUpdate.save()
    return missionToUpdate
  }
  async getMissionAtLocation(locationId) {
    const mission = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture')
    return mission
  }
  async getRatMission(ratId) {
    const missions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
    return missions
  }
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