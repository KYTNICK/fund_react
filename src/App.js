import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "start to learn JS" },
    { id: 2, title: "Javascript 2", body: "start to learn JS" },
    { id: 3, title: "Javascript 3", body: "start to learn JS" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Posts about JS" />
    </div>
  );
}

export default App;
