import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPost } from "../../helper/postApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updatePost } from "../../store/PostStore";
import { DisplayPost } from "./PostDisplayComponent";
import { UserDetails } from "../users/UserDetails";

export function RoomatePosts() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.posts.posts);
  useEffect(() => {
    getPost().then((allPosts) => dispatch(updatePost(allPosts.data)));
  }, []);
  // @ts-ignore
  const posts: ReadPostModel[] = useSelector((state) => state.posts.posts);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div>
      {posts.length === 0
        ? "No posts yet"
        : posts.map((post) => {
            return (
              <div
                onClick={() => {
                  setShowDetail(true);
                  setSelectedUser(post);
                }}
              >
                <DisplayPost
                  title={post.title}
                  message={post.message}
                  userdata={post.userdata}
                />
              </div>
            );
          })}
      {showDetail && (
        <UserDetails
          userDetails={selectedUser}
          onCloseClick={() => {
            setShowDetail(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
}
