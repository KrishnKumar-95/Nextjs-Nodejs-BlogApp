import mongoose from "mongoose";
import Post from "../Modal/Post.mjs";

export async function GetAllPosts(req, res) {
  try {
    const Posts = await Post.find();
    const JSON_data = { success: true, data: Posts || [] };
    return res.status(200).send(JSON_data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export async function GetSinglePost(req, res) {
  try {
    const { document } = req;
    const JSON_data = JSON.stringify({ success: true, data: document || null });
    return res.status(200).send(JSON_data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export async function CreatePost(req, res) {
  try {
    const { title, content, author } = req.body.data;
    const post = { title, content, author };
    const newPost = new Post(post);
    await newPost.save();
    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export async function UpdatePost(req, res) {
  try {
    const { _id, title, content, author } = req.body.data;

    /* Checking for valid id */
    const objectId = mongoose.Types.ObjectId;

    console.log("objectId.isValid(_id) => ", objectId.isValid(_id), _id);

    if (objectId.isValid(_id)) {
      const filter = { _id };

      const update = { $set: {} };

      if (title !== null && title !== undefined) {
        update.$set.title = title;
      }
      if (content !== null && content !== undefined) {
        update.$set.content = content;
      }
      if (author !== null && author !== undefined) {
        update.$set.author = author;
      }

      const result = await Post.findOneAndUpdate(
        filter,
        update,
        { returnOriginal: false }
        // { upsert: true }
      );

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Post not found to update",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Post updated successfully",
        post: result,
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Invalid id",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export async function DeletePost(req, res) {
  try {
    const { deletedCount } = req;
    if (deletedCount === 0) {
      const response = JSON.stringify({
        success: false,
        message: "Post not found.",
      });
      return res.status(404).send(response);
    } else {
      const response = JSON.stringify({
        success: true,
        message: "Post deleted succssfully.",
      });
      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
