import { useSearchBar } from "./hooks/use-search-bar";
// import "./search-bar.scss";

export const SearchBar = ({
  handleOnCharacterSearch,
}: {
  handleOnCharacterSearch: (search: string) => void;
}) => {
  const { searchQuery, handleSearchChange, handleSearchClick } = useSearchBar({
    handleOnCharacterSearch,
  });

  return (
    <div className="search-bar">
      <div style={{ width: "100%" }}>
        <div className="search-bar-sub-components">
          <input
            type="text"
            placeholder="Search characters"
            value={searchQuery}
            onChange={handleSearchChange}
            name="search-characters"
          />
          <button
            type="button"
            name="Search"
            className="search-bar-button"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
