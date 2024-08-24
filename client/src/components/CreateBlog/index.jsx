import React, { useState } from "react";
import "./index.css";

function CreateBlog() {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnailUrl(imageUrl);
    }
  };

  const handlePostBlog = (e) => {
    e.preventDefault();
  };

  return (
    <div className="details-container" style={{ height: "100%" }}>
      <div className="close-post-btns-container">
        <button className="login-btn">Close</button>
        <button className="login-btn" type="submit">
          Post
        </button>
      </div>
      <form className="new-blog-container" onSubmit={handlePostBlog}>
        <h1>Create New Blog</h1>
        <div className="new-blog-label-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="thumbnail-container">
          <div className="thumbnail-input">
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              style={{ display: "none" }}
            />

            <label htmlFor="thumbnail" className="custom-thumbnail-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-image-up"
              >
                <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                <path d="m14 19.5 3-3 3 3" />
                <path d="M17 22v-5.5" />
                <circle cx="9" cy="9" r="2" />
              </svg>
              Thumbnail
            </label>
          </div>
          {thumbnailUrl && (
            <div className="thumbnail-preview">
              <img
                src={thumbnailUrl}
                alt="Thumbnail preview"
                className="thumbnail-img"
              />
            </div>
          )}
        </div>

        <div className="new-blog-label-container">
          <label htmlFor="description">Write</label>
          <textarea
            type="text"
            id="description"
            placeholder="Write here..."
            rows={"6"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="form-submit-btn"
          style={{ maxWidth: "350px" }}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
