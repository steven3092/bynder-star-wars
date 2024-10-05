import { useNavigate } from "react-router-dom";
import { CharactersDTO } from "../../interfaces/characters.dto";
import { PlanetDTO } from "../../interfaces/planet.dto";
import { ImageCharacter } from "../image-character/image-character";
import backArrow from "../../../src/assets/back-arrow.svg";

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
        <img src={backArrow} alt="back-arrow" />
      </button>
      <div className="flex justify-center">
        <div className="flex flex-col my-16 md:flex-row items-center p-6">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-8">{character?.name}</h1>
            <ImageCharacter character={character} />
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="mx-8">
              <h2 className="mt-4 mb-2 font-semibold text-lg">
                Character Information :
              </h2>
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
            </div>

            <div className="mx-8">
              <h2 className="mt-4 mb-2 font-semibold text-lg">
                Planet Information :
              </h2>
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
                        handleOnClickGenericCharacter(
                          resident,
                          character.homeworld
                        )
                      }
                      className="text-white p-1 px-4 my-1 bg-gray-400 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
                    >
                      Resident {index + 1}
                    </button>
                  </li>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
