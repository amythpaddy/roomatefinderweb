import React from "react";
import { useSelector } from "react-redux";

export function PostsListing() {
  // @ts-ignore
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div>
      {posts.length === 0 ? "No posts yet" : "Some logic to display data"}
    </div>
  );
}