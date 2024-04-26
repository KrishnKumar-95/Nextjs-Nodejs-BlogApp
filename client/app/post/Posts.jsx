"use client";
import BodyWrapper from "@/components/BodyWrapper";
import CreateNUpdatePost from "@/components/Create&UpdatePost";
import MyModal from "@/components/Modal";
import SinglePost from "@/components/SinglePost";
import { purge } from "@/services/request.service.mjs";
import { Button, LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Posts({ fetchPosts }) {
  const [isOpen, setIsOpen] = React.useState({ edit: false, delete: false });
  const [slug, setSlug] = React.useState("");
  const postSlice = useSelector((state) => state.posts);

  function toggleModal(type, status, e = null, _slug) {
    if (e) e.stopPropagation();
    setIsOpen((prev) => {
      return {
        ...prev,
        [type]: status,
      };
    });
    setSlug(_slug);
  }

  async function deletePost() {
    const endpoint = `delete-post?slug=${slug}`;
    const response = await purge(endpoint);

    /* Manually close Modal if deletion not occur */
    if (response.success) {
      setIsOpen((prev) => {
        return {
          ...prev,
          delete: false,
        };
      });
      setSlug("");
      fetchPosts();
    }
  }

  return (
    <BodyWrapper skipBottomHeight="70px">
      {postSlice.loading && <LinearProgress variant="indeterminate" />}

      {Array.isArray(postSlice?.posts) && postSlice?.posts.length ? (
        postSlice?.posts.map((post, index) => {
          return (
            <SinglePost
              key={"post_" + index}
              title={post.title}
              desc={post.content}
              slug={post.slug}
              author={post.author}
              time={post.timestamp}
              onEdit={toggleModal}
              onDelete={toggleModal}
            />
          );
        })
      ) : (
        <p className="text-center my-10">No Posts to show</p>
      )}

      <MyModal isOpen={isOpen.edit}>
        <CreateNUpdatePost
          slug={slug}
          fetchPosts={fetchPosts}
          onClose={() => toggleModal("edit", false)}
        />
      </MyModal>

      <MyModal
        isOpen={isOpen.delete}
        onClose={() => toggleModal("delete", false)}
      >
        <div className="h-auto">
          <div className="bg-red-200 p-3 sticky top-0">
            <div className="font-bold text-xl text-red-700">Delete Post</div>
          </div>
          <div className="px-3 py-12">
            <div>Are you sure want to delete this post.</div>
          </div>
          <div className="text-end px-3">
            <Button
              variant="contained"
              color="error"
              className="mr-3"
              size="small"
              onClick={deletePost}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              className="bg-slate-300 hover:bg-slate-700 hover:text-white text-black"
              size="small"
              onClick={() => toggleModal("delete", false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </MyModal>
    </BodyWrapper>
  );
}
