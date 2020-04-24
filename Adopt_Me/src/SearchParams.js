import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(
    () => {
      /* pet.breeds("dog").then(console.log, console.error); */
      setBreeds([]); //Update the breeds
      setBreed("");

      pet.breeds(animal).then(({ breeds }) => {
        const breedString = breeds.map(({ name }) => name);
        setBreeds(breedString);
      }, console.error);
    },
    [animal, setBreeds, setBreed] //Update hvis en af dem ændres
  );

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
