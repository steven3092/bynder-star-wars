import { useQuery } from "@tanstack/react-query";
import { fetchStarWarsCharacter } from "../services/get-star-wars-characters.service";
import { CharactersDTO } from "../interfaces/characters.dto";

export function useGetStarWarsCharacters() {
  const query = useQuery({
    queryKey: ["get-star-wars-characters"],
    queryFn: () => fetchStarWarsCharacter(),
    retry: 0,
  });

  const characters: CharactersDTO[] = query.data;

  return {
    characters,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
