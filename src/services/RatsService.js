import { dbContext } from "../db/DbContext"

class RatsService {
  async getRats() {
    const rat = await dbContext.Rats.find()
    return rat
  }

}
export const ratsService = new RatsService()