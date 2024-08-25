import React from "react";
import "./index.css";
import { useBlogs } from "../../BlogsContext";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

function BlogDetails() {
  // #TODO make an API call for comments
  const { blogsData, isLoading, upVote, downVote } = useBlogs();
  const { id } = useParams();
  const data = blogsData.find((obj) => obj._id === id);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="details-container">
          <h1 className="para">{data.title}</h1>
          <p className="content">{data.content}</p>
          <span className="date">
            {new Date(data.createdAt).toDateString()}
          </span>

          <img
            src={
              data.imageUrl
                ? data.imageUrl
                : " https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif"
            }
            alt="blogsImg"
            className="blogs-img"
          />

          <div className="upvote-container">
            <div style={{ display: "flex" }}>
              <button className="login-btn" onClick={() => upVote(data._id)}>
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
                {data.upVotesCount > 0 && <span>{data.upVotesCount}</span>}
              </button>
              <button className="login-btn" onClick={() => downVote(data._id)}>
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
                {data.downVotesCount > 0 && <span>{data.downVotesCount}</span>}
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
