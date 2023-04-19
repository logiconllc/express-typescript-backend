import bcrypt from "bcryptjs";
import User from "../models/user.model";
import { IUser } from "../types";

export default class AuthService {
  constructor(private readonly userModel: typeof User) {}

  async createUser(user: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userPayload = {
        name: user.name,
        email: user.email,
        password: hashedPassword
    }
    const newUser = new this.userModel(userPayload);
    return await newUser.save();
  }

}