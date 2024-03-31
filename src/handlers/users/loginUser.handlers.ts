import { Request, Response } from "express";
import setLoginUser from "../../controllers/users/setLoginUser.Controllers";

const loginUser = async (req: Request, res: Response) => {
  try {
    const loginUser = await setLoginUser(req.body);
    res.status(200).json(loginUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default loginUser;
