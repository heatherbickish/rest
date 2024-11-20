import mongoose from 'mongoose'
import { AccountSchema } from "../models/Account";
import { RatSchema } from "../models/Rat.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatSchema)
}

export const dbContext = new DbContext()
