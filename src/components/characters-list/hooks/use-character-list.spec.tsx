import { renderHook } from "@testing-library/react";
import { vitest, describe, it, expect } from "vitest";
import { useCharacterList } from "./use-characters-list";

const mockUseNavigate = vitest.fn();

vitest.mock("react-router-dom", () => {
  const originalModule = vitest.importActual("react-router-dom");

  return {
    ...originalModule,
    useNavigate: () => mockUseNavigate,
  };
});

describe("useCharacterList", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });
  it("should navigate to the correct character and planet page", () => {
    const { result } = renderHook(() => useCharacterList());

    const characterUrl = "https://swapi.dev/api/people/1/";
    const planetUrl = "https://swapi.dev/api/planets/3/";

    result.current.handleOnClickNavigateToCharacter(characterUrl, planetUrl);

    expect(mockUseNavigate).toHaveBeenCalledWith("/character/1/planet/3");
  });

  it("should not navigate if the URLs do not match the expected format", () => {
    const { result } = renderHook(() => useCharacterList());

    const invalidCharacterUrl = "https://swapi.dev/api/people/";
    const invalidPlanetUrl = "https://swapi.dev/api/planets/";

    result.current.handleOnClickNavigateToCharacter(
      invalidCharacterUrl,
      invalidPlanetUrl
    );

    expect(mockUseNavigate).not.toHaveBeenCalled();
  });
});
