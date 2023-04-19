import User from "../models/user.model";
import { IUser } from "../types";

export default class UserService {
  constructor(private readonly userModel: typeof User) {}

  async findUserByEmail(email: string): Promise<IUser | null> {
    return await this.userModel.findOne({ email });
  }

  async getAllUsers(): Promise<IUser[]> {
    return await this.userModel.find();
  }
}