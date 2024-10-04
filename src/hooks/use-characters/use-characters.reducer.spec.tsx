import { renderHook, act } from "@testing-library/react";
import { vitest } from "vitest";
import { CharactersDTO } from "../../interfaces/characters.dto";
import { useCharactersReducer } from "./use-characters.reducer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const useGetStarWarsCharactersMock = vitest.fn();

vitest.mock("../use-get-star-wars-characters", () => ({
  useGetStarWarsCharacters: () => useGetStarWarsCharactersMock(),
}));

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

const customWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useCharactersReducer", () => {
  beforeEach(() => {
    useGetStarWarsCharactersMock.mockReturnValue({
      characters: mockCharacters,
    });
  });

  it("should initialize with characters from useGetStarWarsCharacters", () => {
    const { result } = renderHook(() => useCharactersReducer(), {
      wrapper: customWrapper(),
    });

    expect(result.current.state).toEqual(mockCharacters);
  });

  it("should filter characters based on search", () => {
    const { result } = renderHook(() => useCharactersReducer(), {
      wrapper: customWrapper(),
    });

    act(() => {
      result.current.dispatch({ type: "SEARCH_CHARACTER", search: "luke" });
    });

    expect(result.current.state).toEqual([mockCharacters[0]]);
  });
});
