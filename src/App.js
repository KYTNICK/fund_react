import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./components/utils/pages";
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPagesArray(totalPages);
  console.log(pagesArray);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  //============

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts();
  };

  //======================
  return (
    <div className="app">
      <MyButton style={{ marginTop: "50px" }} onClick={() => setModal(true)}>
        Create new Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Something went wrong ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts about JS"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
