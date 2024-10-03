import { useNavigate } from "react-router-dom";
import { CharactersDTO } from "../../interfaces/characters.dto";

export const CharactersList = ({
  characters,
}: {
  characters: CharactersDTO[];
}) => {
  const navigate = useNavigate();

  const handleCharacterClick = (url: string, urlPlanet: string) => {
    const match = url.match(/\/(\d+)\/?$/);
    const matchPlanetId = urlPlanet.match(/\/(\d+)\/?$/);

    if (match && matchPlanetId) {
      const id = match[1];
      const planetId = matchPlanetId[1];
      navigate(`/character/${id}/planet/${planetId}`);
    }
  };

  return (
    <>
      {characters.map((character, index) => (
        <button
          key={index}
          className="text-white p-4 border border-custom-blue rounded-lg shadow-md hover:bg-gray-400 transition-colors"
          onClick={() =>
            handleCharacterClick(character.url, character.homeworld)
          }
        >
          {character.name === "Luke Skywalker" && (
            <img src="src/assets/Luke Skywalker.png" alt="luke skywalker" />
          )}
          {character.name === "Leia Organa" && (
            <img src="src/assets/Princess Leia.png" alt="leia organa" />
          )}
          {character.name === "C-3PO" && (
            <img src="src/assets/C-3PO.png" alt="C-3PO" />
          )}
          {character.name === "R2-D2" && (
            <img src="src/assets/R2-D2.png" alt="R2-D2" />
          )}
          {character.name === "R5-D4" && (
            <img src="src/assets/R5-D4.png" alt="R5-D4" />
          )}
          {character.name === "Darth Vader" && (
            <img src="src/assets/Darth Vader.png" alt="darth vader" />
          )}
          {character.name === "Owen Lars" && (
            <img src="src/assets/Owen Lars.png" alt="owen lars" />
          )}
          {character.name === "Beru Whitesun lars" && (
            <img src="src/assets/no_idea.png" alt="beru whitesun lars" />
          )}
          {character.name === "Biggs Darklighter" && (
            <img src="src/assets/no_idea.png" alt="biggs darklighter" />
          )}
          {character.name === "Obi-Wan Kenobi" && (
            <img src="src/assets/Obi-Wan.png" alt="obi-wan kenobi" />
          )}
          {character.name}
        </button>
      ))}
    </>
  );
};
