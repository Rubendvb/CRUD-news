import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: String,
      requerid: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      requerid: true,
      trim: true,
      unique: true,
    },
    date: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("News", newsSchema);
