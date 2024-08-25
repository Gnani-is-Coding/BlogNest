import React from "react";
import Tags from "../Tags";
import "./index.css";
import BlogCard from "../BlogCard";
import { useBlogs } from "../../BlogsContext";

function Home() {
  const { blogsData, setBlogsData, upDateBlog } = useBlogs();

  const upVote = (id) => {
    setBlogsData(
      blogsData.map((obj) => {
        if (obj._id === id) {
          obj.upVotesCount += 1;
        }
        return obj;
      })
    );
    upDateBlog(id);
  };

  const downVote = (id) => {
    setBlogsData(
      blogsData.map((obj) => {
        if (obj._id === id) {
          obj.downVotesCount += 1;
        }
        return obj;
      })
    );
    upDateBlog(id);
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
