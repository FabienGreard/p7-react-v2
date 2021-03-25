import React from "react";
import {
  Section,
  Post,
  PostHeader,
  PostContent,
  PostContentWrapper,
  PostCredentials,
  PostIconsWrapper,
} from "./Posts.elements";

import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await fetch("/posts");
    const data = await response.json();
    setPosts(data);
  };

  const renderPosts = posts.map((post) => (
    <Post key={post.id}>
      <PostHeader>{post.title}</PostHeader>

      <PostContentWrapper>
        <PostContent>{post.content}</PostContent>
      </PostContentWrapper>
      <PostCredentials>
        Créé le {post.date_time.split("T")[0]} par {post.username}
      </PostCredentials>
      <PostIconsWrapper>
        <BiCommentAdd />
        {props.currentUser === post.user_id && <AiFillDelete />}
      </PostIconsWrapper>
    </Post>
  ));

  return <Section>{renderPosts}</Section>;
};

export default Posts;
