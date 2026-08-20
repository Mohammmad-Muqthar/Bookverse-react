import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ setLoggedInUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    const savedUser = localStorage.getItem("bookverseUser");

    if (!savedUser) {
      setMessage("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email !== user.email || password !== user.password) {
      setMessage("Invalid email or password");
      return;
    }

    localStorage.setItem("bookverseLoggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
    setMessage("Login successful!");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <section className="signin-page">
      <div className="signin-container">
        <div className="signin-card">
          <h1>Welcome Back</h1>

          <p className="signin-subtitle">
            Sign in to continue your BookVerse journey.
          </p>

          {message && (
            <p
              className={
                message === "Login successful!"
                  ? "signin-success-message"
                  : "signin-error-message"
              }
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSignIn}>
            <div className="signin-input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="signin-input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="signin-submit-btn">
              Sign In
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;