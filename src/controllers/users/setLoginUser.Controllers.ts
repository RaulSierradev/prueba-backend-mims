import bcrypt from "bcrypt";
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
  return "Bienvenido";
};

export default setLoginUser;
