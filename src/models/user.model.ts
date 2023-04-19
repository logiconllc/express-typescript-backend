import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apiKey: {
    type: [{
      value: { type: String },
      active: { type: Boolean, default: false },
    }],
  },
});

export default mongoose.model<IUser>("User", UserSchema);