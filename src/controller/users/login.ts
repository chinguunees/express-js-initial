import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { error } from "node:console";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const mailValidation = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!mailValidation)
      return res.status(404).json({ message: "Burtgelgui baina" });
    else {
      const result = await bcrypt.compare(password, mailValidation.password);
      console.log("burtgeltei email", email);
      res.status(200).json({ result });
    }
  } catch (error) {
    console.log(error);
  }
};
