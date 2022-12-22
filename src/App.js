import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("text in input");

  return (
    <div className="App">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default App;
