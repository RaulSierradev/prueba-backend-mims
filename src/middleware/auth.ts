import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
const { JWT_SECRET } = process.env;

const auth = async (req: Request, res: Response, next: NextFunction) => {
  // Autorizacion por el header
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("You are not authorized to do this action");
    return res.status(401).json({ error: error.message });
  }

  // Obtener el token y verificarlo
  const token = authHeader.split(" ")[1];
  let checkToken;
  try {
    checkToken = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  // Token válido pero hubo un error
  if (!checkToken) {
    const error = new Error("Sin autorizacion");
    return res.status(401).json(error);
  }
  next();
};

export default auth;
