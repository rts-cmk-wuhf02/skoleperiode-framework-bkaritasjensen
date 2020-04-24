import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1> //Hvis den ikke kan finde no pets
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pets.type}
            key={pets.id}
            name={pets.breeds.primaty}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.adress.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
