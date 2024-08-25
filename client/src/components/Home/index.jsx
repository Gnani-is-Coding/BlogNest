import React from "react";
import Tags from "../Tags";
import "./index.css";
import BlogCard from "../BlogCard";
import { useBlogs } from "../../BlogsContext";
import Spinner from "../Spinner";

function Home() {
  const { blogsData, upVote, downVote, isLoading } = useBlogs();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default Home;
