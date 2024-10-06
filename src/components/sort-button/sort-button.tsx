import { useSortButton } from "./hooks/use-sort-button";

export const SortButton = ({
  handleOnSortCharacters,
}: {
  handleOnSortCharacters: (sort: boolean) => void;
}) => {
  const { handleOnSort, ascSort } = useSortButton({ handleOnSortCharacters });

  return (
    <button
      type="button"
      onClick={handleOnSort}
      className="text-white p-4 bg-custom-blue rounded-lg shadow-md hover:bg-gray-700 transition-colors"
    >
      {ascSort ? "Sort ↑" : "Sort ↓"}
    </button>
  );
};
