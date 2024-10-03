import { useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";
import { useGetStarWarsPlanet } from "../../hooks/use-get-star-wars-planet";

export const Character = () => {
  const { characterId, planetId } = useParams();
  const { character } = useGetStarWarsCharacter(characterId);
  const { planet } = useGetStarWarsPlanet(planetId);

  return (
    <div className="flex flex-col my-16 md:flex-row items-center p-6 rounded-lg shadow-lg">
      {character?.name === "Luke Skywalker" && (
        <img
          src="../../../src/assets/Luke Skywalker.png"
          alt="luke skywalker"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Leia Organa" && (
        <img
          src="../../../src/assets/Princess Leia.png"
          alt="leia organa"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "C-3PO" && (
        <img
          src="../../../src/assets/C-3PO.png"
          alt="C-3PO"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "R2-D2" && (
        <img
          src="../../../src/assets/R2-D2.png"
          alt="R2-D2"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "R5-D4" && (
        <img
          src="../../../src/assets/R5-D4.png"
          alt="R5-D4"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Darth Vader" && (
        <img
          src="../../../src/assets/Darth Vader.png"
          alt="darth vader"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Owen Lars" && (
        <img
          src="../../../src/assets/Owen Lars.png"
          alt="owen lars"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Beru Whitesun lars" && (
        <img
          src="../../../src/assets/no_idea.png"
          alt="beru whitesun lars"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Biggs Darklighter" && (
        <img
          src="../../../src/assets/no_idea.png"
          alt="biggs darklighter"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Obi-Wan Kenobi" && (
        <img
          src="../../../src/assets/Obi-Wan.png"
          alt="obi-wan kenobi"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}

      <div className="flex-1">
        <h2 className="text-xl font-bold">{character?.name}</h2>
        <p>
          <strong>Birth Year:</strong> {character?.birth_year}
        </p>
        <p>
          <strong>Mass:</strong> {character?.mass}
        </p>
        <p>
          <strong>Eye Color:</strong> {character?.eye_color}
        </p>
        <p>
          <strong>Gender:</strong> {character?.gender}
        </p>
        <p>
          <strong>Hair Color:</strong> {character?.hair_color}
        </p>
        <p>
          <strong>Skin Color:</strong> {character?.skin_color}
        </p>
        <p>
          <strong>Starships:</strong> {character?.starships.join(", ")}
        </p>
        <p>
          <strong>Species:</strong> {character?.species}
        </p>
        <p>
          <strong>Vehicles:</strong> {character?.vehicles.join(", ")}
        </p>
        <p>
          <strong>Homeworld:</strong> {character?.homeworld}
        </p>

        {planet && (
          <>
            <h3 className="mt-4 font-semibold text-lg">Planet Information</h3>
            <p>
              <strong>Planet Name:</strong> {planet.name}
            </p>
            <p>
              <strong>Residents:</strong> {planet.residents.join(", ")}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
