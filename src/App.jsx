import ResidenceCard from "./components/ResidenceCard";
import witsData from "./data/wits.json";

function App() {
  return (
    <div>
      <h1>{witsData.university}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {witsData.residences.map((residence) => (
          <ResidenceCard key={residence.id} residence={residence} />
        ))}
      </div>
    </div>
  );
}

export default App;