import { useGetStarWarsCharacters } from "../../hooks/use-get-star-wars-characters";

export const Characters = () => {
  const { characters } = useGetStarWarsCharacters();

  const handleOnClickSort = () => {};

  return (
    <>
      <button type="button" onClick={}>
        Sort
      </button>
      {characters &&
        characters.map((character, index) => (
          <div key={index}>{character.name}</div>
        ))}
    </>
  );
};
