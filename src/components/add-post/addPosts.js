import React, { useState } from "react";
import "./add-posts.css";

const AddPosts = (props) => {
  const [status, setStatus] = useState("");

  let changeHandler = (e) => {
    setStatus(e.target.value);
  };

  let statusHandler = () => status.length > 0 && props.setPost(status);
  let enterUpHandler = (e) => {
    if (e.key === "Enter") {
      statusHandler();
    }
  };

  return (
    <>
      <div className="add-post-component">
        <div className="add-post">
          <img src="./ggg.jpg" alt="one" />
          <h3>Jenny</h3>
        </div>

        <div className="add-post-input">
          <fieldset>
            <legend>Add a status</legend>
            <input
              type="text"
              className="status-input"
              value={status}
              onChange={changeHandler}
              onKeyUp={enterUpHandler}
            />
          </fieldset>
          <i className="fas fa-camera"></i>
        </div>

        <div className="btn-div">
          <button className="post-btn" onClick={statusHandler}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPosts;
