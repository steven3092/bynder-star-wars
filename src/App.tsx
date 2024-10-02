import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/search-bar/search-bar";
import { useCharacters } from "./hooks/use-characters/use-characters";
import { useNavigate } from "react-router-dom";

function App() {
  const [ascSort, setAscSort] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleCharacterClick = (id: number) => {
    navigate(`/character/${id}`);
  };

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
      <button type="button" onClick={handleSort}>
        {ascSort ? "Sort ↑" : "Sort ↓"}
      </button>
      {state &&
        state.map((character, index) => (
          <button key={index} onClick={() => handleCharacterClick(index + 1)}>
            {character.name}
          </button>
        ))}
    </>
  );
}

export default App;
