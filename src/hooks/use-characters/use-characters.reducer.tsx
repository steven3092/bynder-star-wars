import { useEffect, useReducer } from "react";
import { useGetStarWarsCharacters } from "../use-get-star-wars-characters";
import { CharactersDTO } from "../../interfaces/characters.dto";

type UseCharactersReducerAction =
  | { type: "INITIALIZE"; characters: CharactersDTO[] }
  | { type: "SEARCH_CHARACTER"; search: string }
  | { type: "SORT_CHARACTERS" }
  | { type: "INVERT_SORT_CHARACTERS" }
  | { type: "FILTER_CHARACTERS"; name: string };

export const useCharactersReducer = () => {
  const { characters } = useGetStarWarsCharacters();

  const charactersReducer = (
    state: CharactersDTO[],
    action: UseCharactersReducerAction
  ): CharactersDTO[] => {
    switch (action.type) {
      case "INITIALIZE":
        return action.characters;
      case "SEARCH_CHARACTER":
        return action.search !== ""
          ? state.filter((character) =>
              Object.values(character).some((value) =>
                value
                  .toString()
                  .toLowerCase()
                  .includes(action.search.toLowerCase())
              )
            )
          : characters;
      case "SORT_CHARACTERS":
        return state.sort((characterA, characterB) =>
          characterA.name.localeCompare(characterB.name)
        );
      case "INVERT_SORT_CHARACTERS":
        return state.sort((characterA, characterB) =>
          characterB.name.localeCompare(characterA.name)
        );
      case "FILTER_CHARACTERS":
        return state.filter((character) => character.name === action.name);
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
  };
};
