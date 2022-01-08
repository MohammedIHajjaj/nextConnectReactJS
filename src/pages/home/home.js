import React, { useEffect, useState } from "react";
import AddPosts from "../../components/add-post/addPosts";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts/getAllPosts")
      .then(async (res) => {
        setPosts(await res.json());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let postHandler = (post) => {
    setPosts([
      ...posts,
      {
        id: new Date().getTime(),
        status: post,
        dateOfPost: Date().toLocaleString(),
      },
    ]);
  };

  let deleteHandler = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="home-page">
        <div className="hompe-components">
          <AddPosts setPost={postHandler} />
          <Posts posts={posts} onDelete={deleteHandler} />
        </div>
      </div>
    </>
  );
};

export default Home;
