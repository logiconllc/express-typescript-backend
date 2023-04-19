import { Request, Response } from "express";
import UserService from "../services/user.service";
import User from "../models/user.model";

const userService = new UserService(User);

export default class UserController {

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        data: users
      });
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error"
      });
    }
  }
}