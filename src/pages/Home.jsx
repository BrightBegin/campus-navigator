import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-hero">
      <h1>Welcome to Campus Navigator</h1>
      <p>
        Starting university somewhere new? Find your campus, your course, and a
        place to stay that actually fits you — all in one place.
      </p>
      <Link to="/universities" className="cta-button">
        Explore Universities
      </Link>
    </div>
  );
}

export default Home;