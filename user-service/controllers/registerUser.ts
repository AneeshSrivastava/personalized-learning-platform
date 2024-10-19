import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../models/user";
import Joi from "joi";

const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("Validating user input");
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

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user and save to the database
    const user = new userModel({ email, password: hashedPassword });
    await user.save();

    res.status(201).send({ message: "User registered successfully." });
    return;
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error." });
    return;
  }
};
