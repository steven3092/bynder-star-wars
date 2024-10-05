import { useCharactersReducer } from "./use-characters.reducer";

export const useCharacters = () => {
  const { state, dispatch, isLoading } = useCharactersReducer();

  const handleSearchCharacter = (search: string) => {
    dispatch({ type: "SEARCH_CHARACTER", search: search });
  };

  const handleSortCharacters = () => {
    dispatch({ type: "SORT_CHARACTERS" });
  };

  const handleInvertSortCharacters = () => {
    dispatch({ type: "INVERT_SORT_CHARACTERS" });
  };

  return {
    handleSearchCharacter,
    handleSortCharacters,
    handleInvertSortCharacters,
    state,
    isLoading,
  };
};
