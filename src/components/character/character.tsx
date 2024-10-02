import { useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";

export const Character = () => {
  const { characterId } = useParams();
  const { character } = useGetStarWarsCharacter(characterId);

  return <>{character && character.name}</>;
};
