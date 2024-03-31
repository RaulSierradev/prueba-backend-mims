import bcrypt from "bcrypt";
import { User } from "../../models";

const setNewUser = async (data) => {
  const { name, email, password } = data;

  // Verificacion usuario nuevo
  const userExist = await User.findOne({
    where: { email },
  });
  if (userExist) {
    throw new Error("The user is already registered");
  }

  let hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  return user;
};

export default setNewUser;
