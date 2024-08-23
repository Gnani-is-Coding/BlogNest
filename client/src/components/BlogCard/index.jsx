import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function BlogCard({ data, handleUpVote, handleDownVote }) {
  const {
    id,
    username,
    title,
    imageUrl,
    upVoteCount,
    downVoteCount,
    commentsCount,
    date,
  } = data;

  //   "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif
  return (
    <Link
      to={`/blog-details/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <li className="card-container">
        <div className="profile-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <p>{username}</p>
        </div>

        <span className="para">{title}</span>

        <span className="date">{date.toDateString()}</span>
        <img src={imageUrl} alt="blog" className="blog-img" />

        <div className="upvote-container">
          <div style={{ display: "flex" }}>
            <button className="login-btn" onClick={() => handleUpVote(id)}>
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
              {upVoteCount > 0 && <span>{upVoteCount}</span>}
            </button>
            <button className="login-btn" onClick={() => handleDownVote(id)}>
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
              {downVoteCount > 0 && <span>{downVoteCount}</span>}
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
            {commentsCount > 0 && <span>{commentsCount}</span>}
          </button>
        </div>
      </li>
    </Link>
  );
}

export default BlogCard;
