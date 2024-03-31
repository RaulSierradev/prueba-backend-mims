import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
const { JWT_SECRET } = process.env;
import { User } from "../../models";

const setLoginUser = async (user) => {
  const foundUser = await User.findOne({ where: { email: user.email } });

  if (!foundUser) {
    throw new Error("User doesn't exist");
  } else {
    if (!bcrypt.compareSync(user.password, foundUser.dataValues.password)) {
      throw new Error("Incorrect password");
    }
  }

  // Firmar el token
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      id: user.id,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};

export default setLoginUser;
