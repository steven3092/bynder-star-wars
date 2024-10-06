import { SearchBar } from "./components/search-bar/search-bar";
import { useCharacters } from "./hooks/use-characters/use-characters";
import { CharactersList } from "./components/characters-list/characters-list";
import { Loader } from "./components/loader/loader";
import { SortButton } from "./components/sort-button/sort-button";

function App() {
  const { handleSearchCharacter, handleSortCharacters, state, isLoading } =
    useCharacters();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-xl font-bold mt-16 flex items-center justify-center">
            Star Wars Chracters
          </h1>
          <div className="flex flex-col items-center justify-center mb-16 sm:flex-row">
            <SearchBar handleOnCharacterSearch={handleSearchCharacter} />
            <SortButton handleOnSortCharacters={handleSortCharacters} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16">
            {state && <CharactersList characters={state} />}
          </div>
        </>
      )}
    </>
  );
}

export default App;
