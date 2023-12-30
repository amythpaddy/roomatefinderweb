import React, { useEffect, useState } from "react";
import { getPost } from "../../helper/postApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updatePost } from "../../store/PostStore";
import { DisplayPost } from "./PostDisplayComponent";
import { UserDetails } from "../users/UserDetails";
import { CreatePostModel } from "../../model/PostsModel";
import { UsersDataModel } from "../../model/usersModel";

export function RoomatePosts() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.posts.posts);
  useEffect(() => {
    getPost().then((allPosts) => dispatch(updatePost(allPosts.data)));
  }, []);
  const posts: CreatePostModel[] = useAppSelector((state) => state.posts.posts);
  const [showDetail, setShowDetail] = useState(false);
  const selectedUserInitial: UsersDataModel | null = {
    userid: "",
    username: "",
    useremail: "",
  };
  const [selectedUser, setSelectedUser] = useState(selectedUserInitial);
  return (
    <div>
      {posts.length === 0
        ? "No posts yet"
        : posts.map((post) => {
            return (
              <div
                onClick={() => {
                  setShowDetail(true);
                  setSelectedUser(post.userdata!);
                }}
              >
                <DisplayPost
                  title={post.title}
                  message={post.message}
                  userdata={post.userdata!}
                />
              </div>
            );
          })}
      {showDetail && (
        <UserDetails
          userDetails={selectedUser}
          onCloseClick={() => {
            setShowDetail(false);
            setSelectedUser(selectedUserInitial);
          }}
        />
      )}
    </div>
  );
}
