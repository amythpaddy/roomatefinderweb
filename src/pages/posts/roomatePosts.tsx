import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPost } from "../../helper/postApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updatePost } from "../../store/PostStore";
import { DisplayPost } from "./PostDisplayComponent";

export function RoomatePosts() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.posts.posts);
  useEffect(() => {
    getPost().then((allPosts) => dispatch(updatePost(allPosts.data)));
  }, []);
  // @ts-ignore
  const posts: ReadPostModel[] = useSelector((state) => state.posts.posts);
  return (
    <div>
      {posts.length === 0
        ? "No posts yet"
        : posts.map((post) => {
            return (
              <DisplayPost
                title={post.title}
                message={post.message}
                userdata={post.userdata}
              />
            );
          })}
    </div>
  );
}
