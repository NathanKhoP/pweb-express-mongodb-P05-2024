import mongoose, { Schema, type Document } from "mongoose";

export interface Book_ extends Document {
    rating: {
        average: number;
        count: number;
    };
    title: string;
    author: string;
    publishedDate: Date;
    publisher: string;
    description: string;
    coverImage: string;
    tags: string[];
    initialQty: number;
    qty: number;
}

const BookSchema: Schema = new Schema(
    {
      title: { type: String, required: true },
      author: { type: String, required: true },
      publishedDate: { type: String, required: true },
      publisher: { type: String, required: true },
      description: { type: String, required: true },
      coverImage: { type: String, required: true },
      rating: {
        average: { type: Number, required: true },
        count: { type: Number, required: true },
      },
      tags: { type: [String], required: true },
      initialQty: {
        type: Number,
        required: true,
        validate: {
          validator: function (value: number) {
            return value >= 0;
          },
          message: "Initial quantity cannot be less than 0",
        },
      },
      qty: {
        type: Number,
        required: true,
        validate: [
          {
            validator: function (value: number) {
              return value >= 0;
            },
            message: "Quantity cannot be less than 0",
          },
          {
            validator: function (this: any, value: number) {
              return value <= this.initialQty;
            },
            message: "Quantity cannot be more than initial quantity",
          },
        ],
      },
    },
    { timestamps: true }
)

export default mongoose.model<Book_>('Book', BookSchema);