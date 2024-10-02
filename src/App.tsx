import { useState } from "react";
// import "./App.css";
import { SearchBar } from "./components/search-bar/search-bar";
import { useCharacters } from "./hooks/use-characters/use-characters";
import { useNavigate } from "react-router-dom";

function App() {
  const [ascSort, setAscSort] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleCharacterClick = (url: string) => {
    const id = url.slice(-2);
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
      <div className="sticky top-0 flex flex-col items-center justify-center my-16 sm:flex-row">
        <SearchBar handleOnCharacterSearch={handleSearchCharacter} />
        <button
          type="button"
          onClick={handleSort}
          className="text-white p-4 bg-custom-blue rounded-lg shadow-md hover:bg-gray-700 transition-colors"
        >
          {ascSort ? "Sort ↑" : "Sort ↓"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16">
        {state &&
          state.map((character, index) => (
            <button
              key={index}
              className="text-white p-4 border border-custom-blue rounded-lg shadow-md hover:bg-gray-400 transition-colors"
              onClick={() => handleCharacterClick(character.url)}
            >
              {character.name === "Luke Skywalker" && (
                <img
                  src="src/assets/Luke_Skywalker_art.png"
                  alt="luke skywalker"
                />
              )}

              {character.name}
            </button>
          ))}
      </div>
    </>
  );
}

export default App;
