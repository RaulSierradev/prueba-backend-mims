import { Request, Response } from "express";
import setNewUser from "../../controllers/users/setRegisterUser.controllers";

const newUser = async (req: Request, res: Response) => {
  try {
    try {
      const createUser = await setNewUser(req.body);
      res.status(200).json(createUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newUser;
