import React from "react";
import "./post.css";

const Post = (props) => {
  return (
    <div>
      <div className="post-header">
        <h1>{props.item.status}</h1>
        {props.item.id}
        <button
          className="delete-btn"
          onClick={() => {
            props.onDelete(props.item.id);
          }}
        >
          Delete
        </button>
      </div>
      <p>{props.item.dateOfPost}</p>
    </div>
  );
};

export default Post;
