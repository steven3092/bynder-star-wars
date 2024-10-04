import { act, renderHook } from "@testing-library/react";
import { useSearchBar } from "./use-search-bar";
import { ChangeEvent } from "react";
import { vitest } from "vitest";

describe("useSearchBar", () => {
  it("should initialize with empty searchQuery", () => {
    const { result } = renderHook(() =>
      useSearchBar({ handleOnCharacterSearch: vitest.fn() })
    );
    expect(result.current.searchQuery).toBe("");
  });

  it("should call handleOnCharacterSearch with searchQuery", () => {
    const mockHandleOnCharacterSearch = vitest.fn();
    const { result } = renderHook(() =>
      useSearchBar({ handleOnCharacterSearch: mockHandleOnCharacterSearch })
    );

    act(() => {
      result.current.handleSearchChange({
        target: { value: "lorem ipsum" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.searchQuery).toBe("lorem ipsum");
    expect(mockHandleOnCharacterSearch).toHaveBeenCalledWith("lorem ipsum");
  });
});
