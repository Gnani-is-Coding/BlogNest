import React, { useState } from "react";
import "./index.css";

const tagsData = [
  {
    id: 1,
    tagName: "For you",
  },
  {
    id: 2,
    tagName: "Discussions",
  },
  {
    id: 3,
    tagName: "Tags",
  },
  {
    id: 4,
    tagName: "Sources",
  },
  {
    id: 5,
    tagName: "Bookmarks",
  },
];

function Tags() {
  const [activeTag, setActiveTag] = useState(1);

  return (
    <ul className="tags-container">
      {tagsData.map((obj) => (
        <li
          className={`tag-item ${obj.id === activeTag ? "active-item" : ""}`}
          onClick={() => setActiveTag(obj.id)}
        >
          <span>{obj.tagName}</span>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
