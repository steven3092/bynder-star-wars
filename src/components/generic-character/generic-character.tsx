import { useNavigate } from "react-router-dom";
import { CharactersDTO } from "../../interfaces/characters.dto";
import { PlanetDTO } from "../../interfaces/planet.dto";
import { ImageCharacter } from "../image-character/image-character";

export const GenericCharacter = ({
  handleOnClickGenericCharacter,
  character,
  planet,
}: {
  handleOnClickGenericCharacter: (
    urlCharacter: string,
    urlPlanet: string
  ) => void;
  character: CharactersDTO;
  planet: PlanetDTO;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="p-6 cursor-pointer"
        type="button"
        onClick={() => navigate("/")}
      >
        <img src="../../../src/assets/back-arrow.svg" alt="back-arrow" />
      </button>
      <div className="flex flex-col my-16 md:flex-row items-center p-6">
        <ImageCharacter character={character} />

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

          <h3 className="mt-4 font-semibold text-lg">Planet Information</h3>
          <p>
            <strong>Planet Name:</strong> {planet?.name}
          </p>
          <p>
            <strong>Residents:</strong>{" "}
            {planet?.residents.map((resident, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() =>
                    handleOnClickGenericCharacter(resident, character.homeworld)
                  }
                >
                  Resident {index + 1}
                </button>
              </li>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
