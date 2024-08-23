import React, { useState } from "react";
import Tags from "../Tags";
import "./index.css";
import BlogCard from "../BlogCard";

const blogData = [
  {
    id: "1",
    title: "API Design: 11 steps to go from junior developer to senior",
    username: "Gnani",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
    upVoteCount: 0,
    downVoteCount: 0,
    commentsCount: 10,
    date: new Date(),
  },
  {
    id: "1",
    title: "API Design: 11 steps to go from junior developer to senior",
    username: "Gnani",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
    upVoteCount: 0,
    downVoteCount: 0,
    commentsCount: 10,
    date: new Date(),
  },
  {
    id: "1",
    title: "API Design: 11 steps to go from junior developer to senior",
    username: "Gnani",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
    upVoteCount: 0,
    downVoteCount: 0,
    commentsCount: 10,
    date: new Date(),
  },
  {
    id: "1",
    title: "API Design: 11 steps to go from junior developer to senior",
    username: "Gnani",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
    upVoteCount: 0,
    downVoteCount: 0,
    commentsCount: 10,
    date: new Date(),
  },
  {
    id: "1",
    title: "API Design: 11 steps to go from junior developer to senior",
    username: "Gnani",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
    upVoteCount: 0,
    downVoteCount: 0,
    commentsCount: 10,
    date: new Date(),
  },
];

function Home() {
  const [blogsData, setBlogsData] = useState(blogData);

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
