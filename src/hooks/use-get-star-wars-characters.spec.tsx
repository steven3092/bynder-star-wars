import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vitest } from "vitest";
import { useGetStarWarsCharacters } from "./use-get-star-wars-characters";
import { CharactersDTO } from "../interfaces/characters.dto";

const mockCharacters: CharactersDTO[] = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  },
];

const mockFetchStarWarsCharacters = vitest
  .fn()
  .mockResolvedValue(mockCharacters);

vitest.mock("../services/get-star-wars-characters.service", () => ({
  fetchStarWarsCharacters: () => mockFetchStarWarsCharacters(),
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

describe("useGetStarWarsCharacters", () => {
  describe("when there is data", () => {
    it("should return characters data", async () => {
      const { result } = renderHook(() => useGetStarWarsCharacters(), {
        wrapper: customWrapper,
      });

      await waitFor(() => {
        expect(result.current.characters).toStrictEqual([
          {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "",
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: "",
            edited: "",
            url: "",
          },
          {
            name: "C-3PO",
            height: "167",
            mass: "75",
            hair_color: "n/a",
            skin_color: "gold",
            eye_color: "yellow",
            birth_year: "112BBY",
            gender: "n/a",
            homeworld: "",
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: "",
            edited: "",
            url: "",
          },
        ]);
      });
    });
  });
});
