import { renderHook } from "@testing-library/react";
import { vitest, describe, it, expect } from "vitest";
import { useCharacter } from "./use-character";

const mockUseNavigate = vitest.fn();

vitest.mock("react-router-dom", () => {
  const originalModule = vitest.importActual("react-router-dom");

  return {
    ...originalModule,
    useNavigate: () => mockUseNavigate,
  };
});

describe("useCharacter", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it("should navigate to the correct resident and planet page", () => {
    const { result } = renderHook(() => useCharacter());

    const characterUrl = "https://swapi.dev/api/people/1/";
    const planetUrl = "https://swapi.dev/api/planets/3/";

    result.current.handleOnClickNavigateToResident(characterUrl, planetUrl);

    expect(mockUseNavigate).toHaveBeenCalledWith("/resident/1/planet/3");
  });

  it("should not navigate if the URLs do not match the expected format", () => {
    const { result } = renderHook(() => useCharacter());

    const invalidCharacterUrl = "https://swapi.dev/api/people/";
    const invalidPlanetUrl = "https://swapi.dev/api/planets/";

    result.current.handleOnClickNavigateToResident(
      invalidCharacterUrl,
      invalidPlanetUrl
    );

    expect(mockUseNavigate).not.toHaveBeenCalled();
  });
});
