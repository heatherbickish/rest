import mongoose from 'mongoose'
import { AccountSchema } from "../models/Account";
import { RatSchema } from "../models/Rat.js";
import { LocationSchema } from "../models/Location";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatSchema)

  Locations = mongoose.model('Location', LocationSchema)
}

export const dbContext = new DbContext()
