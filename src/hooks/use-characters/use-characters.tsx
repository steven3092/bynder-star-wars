import { useCharactersReducer } from "./use-characters.reducer";

export const useCharacters = () => {
  const { state, dispatch, isLoading } = useCharactersReducer();

  const handleSearchCharacter = (search: string) => {
    dispatch({ type: "SEARCH_CHARACTER", search: search });
  };

  const handleSortCharacters = (sort: boolean) => {
    dispatch({ type: "SORT_CHARACTERS", sort: sort });
  };

  return {
    handleSearchCharacter,
    handleSortCharacters,
    state,
    isLoading,
  };
};
