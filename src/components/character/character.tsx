import { useNavigate, useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";
import { useGetStarWarsPlanet } from "../../hooks/use-get-star-wars-planet";
import { Loader } from "../loader/loader";
import { useQueryClient } from "@tanstack/react-query";
import { ImageCharacter } from "../image-character/image-character";
import backArrow from "../../../src/assets/back-arrow.svg";

export const Character = () => {
  const { characterId, planetId } = useParams();
  const { character } = useGetStarWarsCharacter(characterId);
  const { planet, isLoading } = useGetStarWarsPlanet(planetId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button
            className="p-6 cursor-pointer"
            type="button"
            onClick={() => {
              queryClient.removeQueries();
              navigate("/");
            }}
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
                          onClick={() => {
                            const match = resident.match(/\/(\d+)\/?$/);
                            const matchPlanetId =
                              planet.url.match(/\/(\d+)\/?$/);

                            if (match && matchPlanetId) {
                              const id = match[1];
                              const planetId = matchPlanetId[1];
                              queryClient.removeQueries();
                              navigate(`/character/${id}/planet/${planetId}`);
                            }
                          }}
                          className="text-white p-1 px-4 my-1 bg-custom-blue rounded-lg shadow-md hover:bg-gray-700 transition-colors"
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
      )}
    </>
  );
};
