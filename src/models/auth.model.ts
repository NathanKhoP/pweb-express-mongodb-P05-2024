import mongoose, { Schema, type Document } from "mongoose";

export interface IAuth extends Document {
  username: string;
  email: string;
  password: string;
}

const AuthSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IAuth>("Auth", AuthSchema);