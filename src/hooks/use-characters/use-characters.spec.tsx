import { renderHook, act } from "@testing-library/react";
import { vitest } from "vitest";
import { CharactersDTO } from "../../interfaces/characters.dto";
import { useCharacters } from "./use-characters";

const useCharactersReducerMock = vitest.fn();

vitest.mock("./use-characters.reducer", () => ({
  useCharactersReducer: () => useCharactersReducerMock(),
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

describe("useCharacters", () => {
  beforeEach(() => {
    useCharactersReducerMock.mockReturnValue({
      state: mockCharacters,
      dispatch: vitest.fn(),
    });
  });

  it("should search a character", () => {
    const { result } = renderHook(() => useCharacters());
    const searchQuery = "luke";

    act(() => {
      result.current.handleSearchCharacter(searchQuery);
    });

    expect(useCharactersReducerMock().dispatch).toHaveBeenCalledWith({
      type: "SEARCH_CHARACTER",
      search: searchQuery,
    });
  });

  it("should initialize all characters", () => {
    const { result } = renderHook(() => useCharacters());

    act(() => {
      result.current.handleAllCharacters(mockCharacters);
    });

    expect(useCharactersReducerMock().dispatch).toHaveBeenCalledWith({
      type: "INITIALIZE",
      characters: mockCharacters,
    });
  });
});
