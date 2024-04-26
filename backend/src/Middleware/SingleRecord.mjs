export const SingleRecord =
  (Post, type = null) =>
  async (req, res, next) => {
    try {
      const { slug } = req.query;
      //   const { id } = req.body;
      if (type == "delete") {
        const result = await Post.deleteMany({ slug });
        req.deletedCount = result.deletedCount;
      } else {
        const document = await Post.findOne({ slug });
        if (!document) {
          const response = JSON.stringify({
            success: false,
            message: "Post not found.",
          });
          return res.status(404).send(response);
        }
        req.document = document;
      }

      next();
    } catch (error) {
      console.log({ error });
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  };
