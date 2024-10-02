import { CharactersDTO } from "../../interfaces/characters.dto";
import { useCharactersReducer } from "./use-characters.reducer";

export const useCharacters = () => {
  const { state, dispatch } = useCharactersReducer();

  //   const handleAddCharacter = (character: CharactersDTO) => {
  //     dispatch({ type: "ADD_TRIP", character: character });
  //   };

  //   const handleUpdateCharacter = (character: CharactersDTO) => {
  //     dispatch({ type: "UPDATE_TRIP", character: character });
  //   };

  const handleSearchCharacter = (search: string) => {
    dispatch({ type: "SEARCH_CHARACTER", search: search });
  };

  //   const handleDeleteCharacter = (id: number) => {
  //     dispatch({ type: "REMOVE_TRIP", id: id });
  //   };

  const handleAllCharacters = (characters: CharactersDTO[]) => {
    dispatch({ type: "INITIALIZE", characters: characters });
  };

  const handleSortCharacters = () => {
    dispatch({ type: "SORT_CHARACTERS" });
  };

  const handleInvertSortCharacters = () => {
    dispatch({ type: "INVERT_SORT_CHARACTERS" });
  };

  const handleFilterCharacters = (name: string) => {
    dispatch({ type: "FILTER_CHARACTERS", name: name });
  };

  return {
    // handleAddCharacter,
    // handleUpdateCharacter,
    handleSearchCharacter,
    // handleDeleteCharacter,
    handleAllCharacters,
    handleSortCharacters,
    handleInvertSortCharacters,
    handleFilterCharacters,
    state,
  };
};
