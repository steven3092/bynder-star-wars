import { useState } from "react";

export const useSortButton = ({
  handleOnSortCharacters,
}: {
  handleOnSortCharacters: (sort: boolean) => void;
}) => {
  const [ascSort, setAscSort] = useState<boolean>(true);

  const handleOnSort = () => {
    handleOnSortCharacters(ascSort);
    setAscSort(!ascSort);
  };

  return {
    handleOnSort,
    ascSort,
  };
};
