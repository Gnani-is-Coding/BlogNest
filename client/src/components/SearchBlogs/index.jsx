import React, { useEffect, useState } from "react";
import { useBlogs } from "../../BlogsContext";
import BlogCard from "../BlogCard";
import "./index.css";

const SearchContainer = () => {
  const [searchInput, setSearchInput] = useState("");
  const { blogsData } = useBlogs();
  const [searchResults, setSearchResults] = useState(blogsData);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setIsSearching(true);
      const results = blogsData.filter((blog) =>
        blog.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      setSearchResults(results);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInput, blogsData]);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <label htmlFor="search-input">Search Blogs</label>
        <input
          type="search"
          id="search-input"
          placeholder="Enter blog title..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
      </div>

      {/* {isSearching && (
        <div className="home-container">
          {searchResults.length > 0 ? (
            <ul className="blogs-container">
              {searchResults.map((blog) => (
                <BlogCard data={blog} />
              ))}
            </ul>
          ) : (
            <p className="no-results">No blogs match your search.</p>
          )}
        </div>
      )} */}
      <div className="home-container">
        {searchResults.length > 0 ? (
          <ul className="blogs-container">
            {searchResults.map((blog) => (
              <BlogCard data={blog} />
            ))}
          </ul>
        ) : (
          <p className="no-results">No blogs match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
