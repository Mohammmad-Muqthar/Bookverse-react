import "./Hero.css";

{/* images from assests*/}
import heroBook from "../../assets/hero-book.jpg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                    <div className="hero-text">
                        <h1> Discover Your Next Favorite Book</h1>
                        <p> Explore thousands of books across every genre. Find bestsellers,
                            timeless classics, and exciting new releases all in one place.</p>
                        <button><a href="/featuredbook">Explore Books</a></button>
                    </div>

                    <div className="hero-image">
                        <img src={heroBook} alt="Books" />
                    </div>

                </div>
        </section>
    );
};

export default Hero;