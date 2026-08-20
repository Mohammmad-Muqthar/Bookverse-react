import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-header">
          <h1>About BookVerse</h1>
          <p>
            Your destination for discovering, exploring, and enjoying great books.
          </p>
        </div>

        <div className="about-content">

          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              BookVerse is an online book store created for book lovers.
              We believe every book opens the door to a new world of knowledge,
              imagination, and inspiration.
            </p>

            <p>
              Our goal is to make it easy for readers to discover books they
              love and enjoy a simple online shopping experience.
            </p>
          </div>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              To connect readers with books that inspire, educate, and entertain.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;