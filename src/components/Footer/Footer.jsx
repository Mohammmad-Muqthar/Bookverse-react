import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-content">

                    {/* 1. About */}
                    <div className="footer-about">
                        <h2>BookVerse</h2>
                        <p>
                            Discover, explore, and buy books from different
                            categories all in one place.
                        </p>
                    </div>


                    {/* 2. Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>

                        <Link to="/">Home</Link>
                        <Link to="/featuredbook">Books</Link>
                        <Link to="/About">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>


                    {/* 3. Contact */}
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: info@bookverse.com</p>
                        <p>Phone: +91 98765 43210</p>
                    </div>


                    {/* 4. Social */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;