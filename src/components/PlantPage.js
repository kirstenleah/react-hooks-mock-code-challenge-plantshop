import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredResults, setFilteredResults] = useState(plants);

  function handleSearchResults(e) {
    const plantsResult = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(e.target.value);
    });

    setFilteredResults(plantsResult);
  }

  function addPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  useEffect(() => {
    setFilteredResults(plants);
  }, [plants]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search handleSearchResults={handleSearchResults} />
      <PlantList filteredResults={filteredResults} />
    </main>
  );
}

export default PlantPage;
