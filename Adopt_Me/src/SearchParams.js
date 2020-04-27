import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []); // Enten en animal eller tomt array
  }

  useEffect(
    () => {
      /* pet.breeds("dog").then(console.log, console.error); */
      setBreeds([]); //Update the breeds
      setBreed(""); // Set breeds til tomt felt

      pet.breeds(animal).then(({ breeds }) => {
        //breeds er ikke det samme som breeds i SearchParams, henter breeds i object
        const breedString = breeds.map(({ name }) => name);
        setBreeds(breedString);
      }, console.error);
    },
    [animal, setBreeds, setBreed] //Update hvis en af dem ændres
  );

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
