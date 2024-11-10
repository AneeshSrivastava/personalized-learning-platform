import { Request, Response, NextFunction } from "express";
import { userModel } from "../database/models/user";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Authentication logic here...
};

export const getUserTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    res.send(user.topics);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error fetching user progress" });
    next(err);
  }
};
