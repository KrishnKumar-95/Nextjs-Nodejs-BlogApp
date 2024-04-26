"use client";
import React, { useEffect, useState } from "react";
import ApiService from "@/services/request.service.mjs";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "@/redux/slices/postSlice.mjs";
import { LinearProgress } from "@mui/material";

export default function CreatePost({ onClose, slug, fetchPosts }) {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const postSlice = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (slug && !post._id) {
      getSinglePost();
    }
  }, [slug]);

  function setLoading(loading) {
    dispatch(toggleLoading(loading));
  }

  async function getSinglePost() {
    try {
      setLoading(true);
      const endpoint = `post?slug=${slug}`;
      const response = await ApiService.get(endpoint);
      const data = response.data;
      if (response.success) {
        setPost(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function inputPost(event) {
    const name = event.target.name;
    const value = event.target.value;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function createNewPost(evt) {
    try {
      setLoading(true);
      evt.preventDefault();
      const response = await ApiService.post("create-post", { data: post });
      if (response.success) {
        // console.log("fetchPosts => ", fetchPosts);
        fetchPosts();
        onClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updatePost(evt) {
    try {
      setLoading(true);
      evt.preventDefault();
      const response = await ApiService.update("update-post", { data: post });
      if (response.success) {
        fetchPosts();
        onClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function submitPost(evt) {
    if (slug) {
      updatePost(evt);
    } else {
      createNewPost(evt);
    }
  }

  return (
    <form onSubmit={submitPost}>
      {postSlice.loading && <LinearProgress variant="indeterminate" />}
      <div className="bg-blue-200 p-3 sticky top-0">
        <div className="font-bold text-xl text-blue-700">
          {slug ? "Update" : "Create"} Post
        </div>
      </div>
      <div className="p-3 overflow-y-auto">
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-slate-700 font-medium text-[15px]"
          >
            Title
          </label>
          <input
            disabled={postSlice.loading}
            id="title"
            value={post.title}
            type="text"
            name="title"
            className="border border-slate-800 rounded px-1 outline-none"
            onChange={inputPost}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label
            htmlFor="content"
            className="text-slate-700 font-medium text-[15px]"
          >
            Content
          </label>
          <textarea
            value={post.content}
            disabled={postSlice.loading}
            name="content"
            className="border border-slate-800 rounded px-1 outline-none"
            onChange={inputPost}
            id="content"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col mt-3">
          <label
            htmlFor="author"
            className="text-slate-700 font-medium text-[15px]"
          >
            Author
          </label>
          <input
            value={post.author}
            disabled={postSlice.loading}
            type="text"
            className="border border-slate-800 rounded px-1 outline-none"
            name="author"
            onChange={inputPost}
          />
        </div>
      </div>
      <div className="p-3 text-right border-t-2 bg-white sticky bottom-0">
        <button
          type="submit"
          className="bg-blue-500 mr-2 rounded-md text-white px-2 py-1"
        >
          {slug ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 rounded-md text-white px-2 py-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
