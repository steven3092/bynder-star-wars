import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vitest } from "vitest";
import { useGetStarWarsCharacter } from "./use-get-star-wars-character";
import { CharactersDTO } from "../interfaces/characters.dto";

const mockCharacter: CharactersDTO = {
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
};

const mockFetchStarWarsCharacter = vitest.fn().mockResolvedValue(mockCharacter);

vitest.mock("../services/get-star-wars-character.service", () => ({
  fetchStarWarsCharacter: () => mockFetchStarWarsCharacter(),
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

describe("useGetStarWarsCharacter", () => {
  describe("when there is data", () => {
    it("should return character data", async () => {
      const id = "1";
      const { result } = renderHook(() => useGetStarWarsCharacter(id), {
        wrapper: customWrapper,
      });

      await waitFor(() => {
        expect(result.current.character).toStrictEqual({
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
        });
      });
    });
  });
});
