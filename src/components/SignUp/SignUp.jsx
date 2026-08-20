import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("bookverseUser", JSON.stringify(user));

    setMessage("Account created successfully!");

    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  return (
    <section className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <h1>Create Account</h1>
          <p className="signup-subtitle">
            Join BookVerse and start your reading journey.
          </p>

          {message && (
            <p
              className={
                message === "Account created successfully!"
                  ? "success-message"
                  : "error-message"
              }
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSignUp}>
            <div className="signup-input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="signup-input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="signup-input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="signup-input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="signup-submit-btn">
              Create Account
            </button>
          </form>

          <p className="signin-text">
            Already have an account?{" "}
            <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;