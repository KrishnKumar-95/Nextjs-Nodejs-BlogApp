import Express from "express";
import {
  CreatePost,
  GetAllPosts,
  UpdatePost,
  DeletePost,
  GetSinglePost,
} from "../Controller/Post.mjs";
import { SingleRecord } from "../Middleware/SingleRecord.mjs";
import Post from "../Modal/Post.mjs";

const router = Express.Router();

router.get("/posts", GetAllPosts);
router.post("/create-post", CreatePost);
router.get("/post", SingleRecord(Post), GetSinglePost);
router.delete("/delete-post", SingleRecord(Post, "delete"), DeletePost);
router.put("/update-post", /* SingleRecord(Post), */ UpdatePost);

export default router;
