import mongoose from "mongoose";
import slugify from "slugify";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "content is required"],
  },
  author: {
    type: String,
  },
  slug: {
    type: String,
    unique: [true, "Post already exists."],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.pre("save", function (next) {
  if (!this.isModified("title")) {
    return next();
  }
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model("User", PostSchema);
