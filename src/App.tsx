import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/search-bar/search-bar";
import { useCharacters } from "./hooks/use-characters/use-characters";
import { useGetStarWarsCharacters } from "./hooks/use-get-star-wars-characters";

function App() {
  const [ascSort, setAscSort] = useState<boolean>(true);
  const { characters } = useGetStarWarsCharacters();

  const {
    // handleAddCharacter,
    // handleUpdateCharacter,
    handleSearchCharacter,
    // handleDeleteCharacter,
    handleAllCharacters,
    handleSortCharacters,
    handleInvertSortCharacters,
    // handleResetCharacters,
    // handleFilterCharacters,
    state,
  } = useCharacters();

  const handleSort = () => {
    if (!ascSort) {
      handleInvertSortCharacters();
    } else {
      handleSortCharacters();
    }
    setAscSort(!ascSort);
  };

  console.log("state", state);

  return (
    <>
      <SearchBar handleOnCharacterSearch={handleSearchCharacter} />
      <button type="button" onClick={() => handleAllCharacters(characters)}>
        Reset
      </button>
      <button type="button" onClick={handleSort}>
        {ascSort ? "Sort ↑" : "Sort ↓"}
      </button>
      {/* <button type="button" onClick={() => handleInvertSortCharacters()}>
        Sort ↓
      </button> */}
      {state &&
        state.map((character, index) => (
          <div key={index}>{character.name}</div>
        ))}
    </>
  );
}

export default App;
