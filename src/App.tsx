import { SearchBar } from "./components/search-bar/search-bar";
import { useCharacters } from "./hooks/use-characters/use-characters";
import { CharactersList } from "./components/characters-list/characters-list";
import { useState } from "react";

function App() {
  const {
    // handleAddCharacter,
    // handleUpdateCharacter,
    handleSearchCharacter,
    // handleDeleteCharacter,
    // handleAllCharacters,
    handleSortCharacters,
    handleInvertSortCharacters,
    // handleResetCharacters,
    // handleFilterCharacters,
    state,
  } = useCharacters();

  const [ascSort, setAscSort] = useState<boolean>(true);

  const handleOnSort = () => {
    if (!ascSort) {
      handleInvertSortCharacters();
    } else {
      handleSortCharacters();
    }
    setAscSort(!ascSort);
  };

  return (
    <>
      <h1 className="text-xl font-bold mt-16 flex items-center justify-center">
        Star Wars Chracters
      </h1>
      <div className="sticky top-0 flex flex-col items-center justify-center mb-16 sm:flex-row">
        <SearchBar handleOnCharacterSearch={handleSearchCharacter} />
        <button
          type="button"
          onClick={handleOnSort}
          className="text-white p-4 bg-custom-blue rounded-lg shadow-md hover:bg-gray-700 transition-colors"
        >
          {ascSort ? "Sort ↑" : "Sort ↓"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16">
        {state && <CharactersList characters={state} />}
      </div>
    </>
  );
}

export default App;
