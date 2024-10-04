import { render, screen } from "@testing-library/react";
import { SearchBar } from "./search-bar";
import { vitest } from "vitest";

const handleSearchCharacterMock = vitest.fn();

vitest.mock("../../hooks/use-characters/use-characters", () => ({
  useCharacters: () => ({
    handleSearchCharacter: handleSearchCharacterMock,
  }),
}));

describe("SearchBar", () => {
  it("should be rendered with correct placeholder", () => {
    render(<SearchBar handleOnCharacterSearch={handleSearchCharacterMock} />);
    const searchElement = screen.getByPlaceholderText(/Search characters/i);
    expect(searchElement).toBeInTheDocument();
  });
});
