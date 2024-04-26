"use client";
import CreatePost from "@/components/Create&UpdatePost";
import Header from "@/components/Header";
import MyModal from "@/components/Modal";
import { useState } from "react";

export default function TopHeader({ fetchPosts }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <Header title="All Posts">
      <>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 px-3 py-1 text-white font-medium text-sm rounded-md hover:bg-blue-700"
          >
            Create Post
          </button>
        </div>
        <MyModal isOpen={isOpen} onClose={onClose}>
          <CreatePost onClose={onClose} fetchPosts={fetchPosts} />
        </MyModal>
      </>
    </Header>
  );
}
