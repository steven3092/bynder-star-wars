import { useQuery } from "@tanstack/react-query";
import { fetchStarWarsPlanet } from "../services/get-star-wars-planet.service";
import { PlanetDTO } from "../interfaces/planet.dto";

export function useGetStarWarsPlanet(planetId: string | undefined) {
  const query = useQuery({
    queryKey: ["get-star-wars-planet"],
    queryFn: () => fetchStarWarsPlanet(planetId),
    retry: 0,
  });

  const planet: PlanetDTO = query.data;

  return {
    planet,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
