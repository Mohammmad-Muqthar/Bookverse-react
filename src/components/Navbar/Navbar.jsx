import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ loggedInUser, setLoggedInUser, searchTerm, setSearchTerm }) => {
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("bookverseLoggedInUser");

        setLoggedInUser(null);

        navigate("/");
    };

    return (
        <nav>
            <div className="navbar-container">

                {/* <div className="logo">
                    <Link to="/">BookVerse</Link>
                </div> */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="BookVerse Logo" />
                    </Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/featuredbook">Books</Link>
                    </li>

                    {loggedInUser && (
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    )}

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search books..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            navigate("/featuredbook");
                        }}
                    />
                </div>

                {/* <div className="wishlist">
                    <button>🤍 Wishlist</button>
                </div> */}

                <div className="auth-buttons">
                    {loggedInUser ? (
                        <>
                            <span className="user-name">
                                Hi, {loggedInUser.name}
                            </span>

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signin">
                                <button className="login-btn">
                                    Login
                                </button>
                            </Link>

                            <Link to="/signup">
                                <button className="signup-btn">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;