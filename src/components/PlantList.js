import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ filteredResults }) {
  return (
    <ul className="cards">
      {filteredResults.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
