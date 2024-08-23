import React from "react";
import Tags from "../Tags";
import "./index.css";
import BlogCard from "../BlogCard";
import { useBlogs } from "../../BlogsContext";

function Home() {
  const { blogsData, setBlogsData } = useBlogs();

  const upVote = (id) => {
    setBlogsData(
      blogsData.map((obj) => {
        if (obj.id === id) {
          obj.upVoteCount += 1;
        }
        return obj;
      })
    );
  };

  const downVote = (id) => {
    setBlogsData(
      blogsData.map((obj) => {
        if (obj.id === id) {
          obj.downVoteCount += 1;
        }
        return obj;
      })
    );
  };

  return (
    <div className="home-container">
      <Tags />
      <ul className="blogs-container">
        {blogsData.map((blog) => (
          <BlogCard
            data={blog}
            handleUpVote={upVote}
            handleDownVote={downVote}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
