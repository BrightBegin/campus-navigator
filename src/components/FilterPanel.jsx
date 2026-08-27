function FilterPanel({ weights, onChange }) {
  const handleSliderChange = (key, value) => {
    onChange({ ...weights, [key]: Number(value) });
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <h3>Set your priorities</h3>

      <label>
        Price importance: {weights.price.toFixed(1)}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={weights.price}
          onChange={(e) => handleSliderChange("price", e.target.value)}
        />
      </label>
      <br />

      <label>
        Safety importance: {weights.safety.toFixed(1)}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={weights.safety}
          onChange={(e) => handleSliderChange("safety", e.target.value)}
        />
      </label>
      <br />

      <label>
        Distance importance: {weights.distance.toFixed(1)}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={weights.distance}
          onChange={(e) => handleSliderChange("distance", e.target.value)}
        />
      </label>
    </div>
  );
}

export default FilterPanel;