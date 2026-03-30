import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { error } from "node:console";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const tokenSecret = process.env.CHINGUUNII_NUUTS;
  try {
    const mailValidation = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!mailValidation)
      return res.status(404).json({ message: "Burtgelgui baina" });

    const result = await bcrypt.compare(password, mailValidation.password);

    if (result) {
      const accessToken = jwt.sign(
        {
          data: {
            userId: mailValidation.id,
            email: mailValidation.email,
            role: mailValidation.role,
          },
        },
        tokenSecret!,
        { expiresIn: "24h" },
      );

      console.log("burtgeltei email", email);
      res.status(200).json({ accessToken });
    } else {
      return res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};
