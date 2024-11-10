import mongoose, { Schema, type Document } from "mongoose";

export interface Auth_ extends Document {
  username: string;
  email: string;
  password: string;
}

const AuthSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<Auth_>("Auth", AuthSchema);