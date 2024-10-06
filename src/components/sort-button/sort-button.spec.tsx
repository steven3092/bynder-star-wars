import { render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import userEvent from "@testing-library/user-event";
import { SortButton } from "./sort-button";

const handleSortCharactersMock = vitest.fn();

vitest.mock("../../hooks/use-characters/use-characters", () => ({
  useCharacters: () => ({
    handleSortCharacters: handleSortCharactersMock,
  }),
}));

describe("SortButton", () => {
  it("should be rendered with correct text", () => {
    render(<SortButton handleOnSortCharacters={handleSortCharactersMock} />);
    const textButton = screen.getByText(/Sort ↑/i);
    expect(textButton).toBeInTheDocument();
  });

  describe("When click on SortButton", () => {
    it("should be rendered with correct text", async () => {
      render(<SortButton handleOnSortCharacters={handleSortCharactersMock} />);

      const sortButton = screen.getByRole("button", {
        name: /Sort ↑/i,
      });

      await userEvent.click(sortButton);

      const textButton = screen.getByText(/Sort ↓/i);
      expect(textButton).toBeInTheDocument();
    });
  });
});
