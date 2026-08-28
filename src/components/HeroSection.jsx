import { useState, useEffect } from "react";
import wits1 from "../assets/wits1.jpg";
import wits2 from "../assets/wits2.jpg";
import wits3 from "../assets/wits3.jpg";

const images = [wits2, wits3, wits1];

function HeroSection({ university, address }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="wits-hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="wits-hero-overlay">
        <h1>{university}</h1>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default HeroSection;