import { CharactersDTO } from "../../interfaces/characters.dto";
import { ImageCharacter } from "../image-character/image-character";
import { useCharacterList } from "./hooks/use-characters-list";

export const CharactersList = ({
  characters,
}: {
  characters: CharactersDTO[];
}) => {
  const { handleOnClickNavigateToCharacter } = useCharacterList();

  return (
    <>
      {characters.map((character, index) => (
        <button
          key={index}
          className="text-white p-4 border border-custom-blue rounded-lg shadow-md hover:bg-gray-400 transition-colors"
          onClick={() =>
            handleOnClickNavigateToCharacter(character.url, character.homeworld)
          }
        >
          <ImageCharacter character={character} />
          {character.name}
        </button>
      ))}
    </>
  );
};
