import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showLoginBtn, setHideBtn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    if (token) {
      setHideBtn(false);
    } else {
      setHideBtn(true);
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userCredentials = { username, password };

    const endpoint = "http://localhost:5000/api/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    };

    const response = await fetch(endpoint, options);
    setLoading(false);
    const data = await response.json();

    console.log(response, data, "respone");

    if (response.ok) {
      setErrMsg("");
      setShowLogin(false);
      const { token, username } = data;
      Cookies.set("jwtToken", token, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
    } else {
      setErrMsg(data.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setErrMsg("Password didnt match");
      setLoading(false);
      return;
    }

    const endpoint = "http://localhost:5000/api/auth/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(endpoint, options);
    setLoading(false);
    const data = await response.json();

    if (response.ok) {
      setErrMsg("");
      setShowRegisterForm(false);
      const { token, username } = data;
      Cookies.set("jwtToken", token, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
    } else {
      setErrMsg(data.message);
    }
  };

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <Link to="/" className="heading">
          BlogNest
        </Link>

        <div className="btn-containers">
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
              class="lucide lucide-sun-moon"
            >
              <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.9 4.9 1.4 1.4" />
              <path d="m17.7 17.7 1.4 1.4" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.3 17.7-1.4 1.4" />
              <path d="m19.1 4.9-1.4 1.4" />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg> */}
          </button>

          {showLoginBtn ? (
            <button
              className="login-btn"
              onClick={() => setShowLogin(!showLogin)}
            >
              Login
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
                class="lucide lucide-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
            </button>
          ) : (
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
              class="lucide lucide-circle-user"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
          )}

          {showLoginBtn && (
            <button
              className="login-btn"
              onClick={() => setShowRegisterForm(!showRegisterForm)}
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
                class="lucide lucide-square-plus"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              Join Now
            </button>
          )}
        </div>
      </nav>
      {showLogin && (
        <form className="login-container" onSubmit={handleLogin}>
          <h1 className="login-heading">Welcome</h1>
          <div className="label-container">
            <label htmlFor="login">Username</label>
            <input
              type="text"
              id="email"
              placeholder="username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="label-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="form-submit-btn">
            {isLoading ? "Loading..." : "Login"}
          </button>

          {errMsg && <p className="error-msg">{errMsg}</p>}
        </form>
      )}

      {showRegisterForm && (
        <form className="login-container" onSubmit={handleRegister}>
          <h1 className="login-heading">Register Now</h1>
          <div className="label-container">
            <label htmlFor="login">Username</label>
            <input
              type="text"
              id="email"
              placeholder="username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="label-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="label-container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Password"
              className="login-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="form-submit-btn">
            {isLoading ? "Loading..." : "Login"}
          </button>

          {errMsg && <p className="error-msg">{errMsg}</p>}
        </form>
      )}
    </div>
  );
}

export default Navbar;
