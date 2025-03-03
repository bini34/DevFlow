import { Schema, model, models, Document } from "mongoose";
export interface ITag extends Document {
  name: string;
  description: string;
  question: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
}
const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    question: [{ type: Schema.Types.ObjectId, ref: "Question" }], // assuming questions are a separate collection
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // assuming users follow tags
  },
  {
    timestamps: true, // Optional, but recommended for tracking creation/update times
  }
);

// Create the model
const Tag = models.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
