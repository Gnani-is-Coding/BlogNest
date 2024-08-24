import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

function MobileNavigation() {
  const [route, setRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);

  return (
    <div className="navigation-container">
      <Link to="/" className="link">
        <div
          className={`icon-container ${
            route === "/" ? "active-container" : ""
          }`}
        >
          <svg
            id="home"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <label forHtml="home" className="label">
            Home
          </label>
        </div>
      </Link>

      <Link to="/search" className="link">
        <div
          className={`icon-container ${
            route === "/search" ? "active-container" : ""
          }`}
        >
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
            class="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <label forHtml="home" className="label">
            Search
          </label>
        </div>
      </Link>
      <Link to="/blogs/create" className="link">
        <div
          className={`icon-container plus-button ${
            route === "/blogs/create" ? "active-container active-plus" : ""
          }`}
        >
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
            class="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
      </Link>

      <Link to="/profile" className="link">
        <div
          className={`icon-container ${
            route === "/profile" ? "active-container" : ""
          }`}
        >
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
            class="lucide lucide-user-pen"
          >
            <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <circle cx="10" cy="7" r="4" />
          </svg>
          <label forHtml="home" className="label">
            Profile
          </label>
        </div>
      </Link>

      <Link to="/logout" className="link">
        <div
          className={`icon-container ${
            route === "/logout" ? "active-container" : ""
          }`}
        >
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
            class="lucide lucide-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          <label forHtml="home" className="label">
            LogOut
          </label>
        </div>
      </Link>
    </div>
  );
}

export default MobileNavigation;
