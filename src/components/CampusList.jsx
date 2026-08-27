function CampusList({ campuses }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h2>Campuses</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {campuses.map((campus) => (
          <div key={campus.id} style={styles.card}>
            <h3>{campus.name}</h3>
            <p>Courses offered:</p>
            <ul>
              {campus.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "280px",
    margin: "16px",
  },
};

export default CampusList;