import { useSearchBar } from "./hooks/use-search-bar";

export const SearchBar = ({
  handleOnCharacterSearch,
}: {
  handleOnCharacterSearch: (search: string) => void;
}) => {
  const { searchQuery, handleSearchChange } = useSearchBar({
    handleOnCharacterSearch,
  });

  return (
    <input
      className="border border-gray-300 rounded-lg mx-4 my-4 py-4 px-4 pr-10 text-black focus:ring-blue-500"
      type="text"
      placeholder="Search characters"
      value={searchQuery}
      onChange={handleSearchChange}
      name="search-characters"
    />
  );
};
