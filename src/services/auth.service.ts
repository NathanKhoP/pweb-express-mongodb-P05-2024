import type { Auth_ } from "@/models/auth.model";
import Auth from "@/models/auth.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  async register(authData: Auth_): Promise<Auth_> {
    if (await Auth.findOne({ email: authData.email })) {
      throw new Error("Email already exists...");
    }

    const hashedPassword = await bcrypt.hash(authData.password, 10);
    const auth = new Auth({ ...authData, password: hashedPassword });
    return await auth.save();
  }

  async login(authData: {
    email: string;
    password: string;
  }): Promise<{ auth: Auth_; token: string }> {
    const auth = await Auth.findOne ({ email: authData.email });

    if (!auth) {
      throw new Error("User not found...");
    }

    if (!(await bcrypt.compare(authData.password, auth.password))) {
      throw new Error("Wrong password!");
    }

    const token = jwt.sign(
      { email: auth.email, id: auth._id },
      process.env.JWT_SECRET,
    );

    return { auth, token };
  }
}

export default new AuthService();