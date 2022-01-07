import React from "react";
import Post from "../post/post";
import "./posts.css";

const Posts = (props) => {
  return (
    <div className="posts">
      {props.posts.map((item, index) => (
        <Post item={item} index={index} key={index} onDelete={props.onDelete} />
      ))}
    </div>
  );
};

export default Posts;
