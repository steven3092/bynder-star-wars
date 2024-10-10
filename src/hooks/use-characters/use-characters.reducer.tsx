import { useEffect, useReducer } from "react";
import { useGetStarWarsCharacters } from "../use-get-star-wars-characters";
import { CharactersDTO } from "../../interfaces/characters.dto";

type UseCharactersReducerAction =
  | { type: "INITIALIZE"; characters: CharactersDTO[] }
  | { type: "SEARCH_CHARACTER"; search: string }
  | { type: "SORT_CHARACTERS"; sort: boolean }
  | { type: "INVERT_SORT_CHARACTERS" };

export const useCharactersReducer = () => {
  const { characters, isLoading } = useGetStarWarsCharacters();

  const charactersReducer = (
    state: CharactersDTO[],
    action: UseCharactersReducerAction
  ): CharactersDTO[] => {
    switch (action.type) {
      case "INITIALIZE":
        return action.characters;
      case "SEARCH_CHARACTER":
        return characters
          ? characters.filter((character) =>
              character.name.toLowerCase().includes(action.search.toLowerCase())
            )
          : [];
      case "SORT_CHARACTERS":
        return action.sort
          ? [...state].sort((characterA, characterB) =>
              characterA.name.localeCompare(characterB.name)
            )
          : [...state].sort((characterA, characterB) =>
              characterB.name.localeCompare(characterA.name)
            );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(charactersReducer, []);

  useEffect(() => {
    if (characters) {
      dispatch({ type: "INITIALIZE", characters: characters });
    }
  }, [characters]);

  return {
    state,
    dispatch,
    isLoading,
  };
};
