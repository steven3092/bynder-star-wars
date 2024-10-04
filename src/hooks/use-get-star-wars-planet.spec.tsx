import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vitest } from "vitest";
import { PlanetDTO } from "../interfaces/planet.dto";
import { useGetStarWarsPlanet } from "./use-get-star-wars-planet";

const mockPlanet: PlanetDTO = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [],
  films: [],
  created: "",
  edited: "",
  url: "",
};

const mockFetchStarWarsPlanet = vitest.fn().mockResolvedValue(mockPlanet);

vitest.mock("../services/get-star-wars-planet.service", () => ({
  fetchStarWarsPlanet: () => mockFetchStarWarsPlanet(),
}));

const customWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useGetStarWarsPlanet", () => {
  describe("when there is data", () => {
    it("should return planet data", async () => {
      const id = "1";
      const { result } = renderHook(() => useGetStarWarsPlanet(id), {
        wrapper: customWrapper,
      });

      await waitFor(() => {
        expect(result.current.planet).toStrictEqual({
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [],
          films: [],
          created: "",
          edited: "",
          url: "",
        });
      });
    });
  });
});
