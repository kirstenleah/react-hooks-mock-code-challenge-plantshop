import React from "react";

function Search({ handleSearchResults }) {
  // const [searchPlant, setSearchPlant] = useState("");

  // function updatePlantsOnSearch(e) {
  //   e.preventDefault();
  //   setSearchPlant(e.target.value);
  //   const filteredPlants = plants.filter((result) => {
  //     if (result.name.toLowerCase().includes(searchPlant)) {
  //       return result;
  //     }
  //   });
  //   setFilteredResults(filteredPlants);
  // }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input type="text" id="search" placeholder="Type a name to search..." onChange={handleSearchResults} />
    </div>
  );
}

export default Search;
