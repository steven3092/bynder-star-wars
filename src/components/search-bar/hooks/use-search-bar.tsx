import { ChangeEvent, useState } from "react";

export const useSearchBar = ({
  handleOnCharacterSearch,
}: {
  handleOnCharacterSearch: (search: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    handleOnCharacterSearch(e.target.value);
  };

  return {
    handleSearchChange,
    searchQuery,
  };
};
