import React, { useEffect, useState } from "react";
import "./index.css";
import { useBlogs } from "../../BlogsContext";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

function BlogDetails() {
  // #TODO make an API call for comments
  const { blogsData, isLoading, setLoading } = useBlogs();
  const { id } = useParams();
  const [data, setData] = useState(blogsData.find((obj) => obj.id === id));

  useEffect(() => {
    setLoading(true);
    setData(blogsData.find((obj) => obj.id === id));
    setLoading(false);
  }, [blogsData, id]);

  console.log(data, "data..");
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="details-container">
          <h1>{data.title}</h1>
          <span className="date">{data.date.toDateString()}</span>
          <img src={data.imageUrl} alt="blogsImg" className="blogs-img" />

          <div className="upvote-container">
            <div style={{ display: "flex" }}>
              <button className="login-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-up"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                {data.upVoteCount > 0 && <span>{data.upVoteCount}</span>}
              </button>
              <button className="login-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                {data.downVoteCount > 0 && (
                  <span>{data.downVoteCount} Upvotes</span>
                )}
              </button>
            </div>

            <button className="login-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-circle-more"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="M8 12h.01" />
                <path d="M12 12h.01" />
                <path d="M16 12h.01" />
              </svg>
              {data.commentsCount > 0 && (
                <span>{data.commentsCount} Comments </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetails;
