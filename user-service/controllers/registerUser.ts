import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../database/models/user";
import Joi from "joi";
import { constants } from "../constants";

const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("Validating user inputs");
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      res.status(400).send({ message: error.details[0].message });
      return;
    }

    const { email, password } = req.body;
    // Check if email already exists in the database
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(409).send({ message: "Email is already in use." });
      return;
    }
    console.log("No duplicate user found");
    const userTopic = getRandomTag(constants.topics);
    const userLevel = getRandomTag(constants.level);
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user and save to the database
    const user = new userModel({
      email,
      password: hashedPassword,
      topics: {
        tag: userTopic,
        level: userLevel,
      },
    });
    await user.save();

    res.status(201).send({ message: "User registered successfully." });
    return;
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error." });
    return;
  }
};

function getRandomTag(tags: string[]): string {
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}
