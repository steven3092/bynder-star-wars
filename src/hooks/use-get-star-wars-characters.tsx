import { useQuery } from "@tanstack/react-query";
import { CharactersDTO } from "../interfaces/characters.dto";
import { fetchStarWarsCharacters } from "../services/get-star-wars-characters.service";

export function useGetStarWarsCharacters() {
  const query = useQuery({
    queryKey: ["get-star-wars-characters"],
    queryFn: () => fetchStarWarsCharacters(),
    retry: 0,
  });

  const characters: CharactersDTO[] = query.data;

  return {
    characters,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
