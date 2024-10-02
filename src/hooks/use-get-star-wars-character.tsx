import { useQuery } from "@tanstack/react-query";
import { CharactersDTO } from "../interfaces/characters.dto";
import { fetchStarWarsCharacter } from "../services/get-star-wars-character.service";

export function useGetStarWarsCharacter(id: string | undefined) {
  const query = useQuery({
    queryKey: ["get-star-wars-character"],
    queryFn: () => fetchStarWarsCharacter(id),
    retry: 0,
  });

  const character: CharactersDTO = query.data;

  return {
    character,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
