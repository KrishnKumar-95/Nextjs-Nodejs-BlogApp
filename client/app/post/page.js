"use client";
import { Suspense, useEffect } from "react";
import Header from "./TopHeader";
import Posts from "./Posts";
import { get } from "@/services/request.service.mjs";
import { useDispatch } from "react-redux";
import { setPosts, toggleLoading } from "@/redux/slices/postSlice.mjs";

export default function Home() {
  const dispatch = useDispatch();
  console.count();

  async function fetchPosts() {
    try {
      setLoading(true);
      const response = await get("posts");
      if (response.success) {
        dispatch(setPosts(response.data));
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }

  function setLoading(loading) {
    dispatch(toggleLoading(loading));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="flex-col md:px-4 lg:px-24">
      <Header fetchPosts={fetchPosts} />
      {/* <Suspense fallback="Loading..."> */}
      <Posts fetchPosts={fetchPosts} />
      {/* </Suspense> */}
    </main>
  );
}
