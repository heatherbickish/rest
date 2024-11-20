import mongoose from 'mongoose'
import { AccountSchema } from "../models/Account";
import { RatSchema } from "../models/Rat.js";
import { LocationSchema } from "../models/Location";
import { MissionSchema } from "../models/Mission";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Rats = mongoose.model('Rat', RatSchema)

  Locations = mongoose.model('Location', LocationSchema)

  Missions = mongoose.model('Mission', MissionSchema)
}

export const dbContext = new DbContext()
