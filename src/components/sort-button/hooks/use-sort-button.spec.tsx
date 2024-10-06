import { act, renderHook } from "@testing-library/react";
import { vitest } from "vitest";
import { useSortButton } from "./use-sort-button";

const mockHandleOnSortCharacters = vitest.fn();

describe("useSortButton", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });
  it("should initialize with ascending sort", () => {
    const { result } = renderHook(() =>
      useSortButton({ handleOnSortCharacters: mockHandleOnSortCharacters })
    );

    expect(result.current.ascSort).toBe(true);
  });

  it("should toggle sort order and call handleOnSortCharacters", () => {
    const { result } = renderHook(() =>
      useSortButton({ handleOnSortCharacters: mockHandleOnSortCharacters })
    );

    act(() => {
      result.current.handleOnSort();
    });

    expect(mockHandleOnSortCharacters).toHaveBeenCalledWith(true);

    expect(result.current.ascSort).toBe(false);

    act(() => {
      result.current.handleOnSort();
    });

    expect(mockHandleOnSortCharacters).toHaveBeenCalledWith(false);

    expect(result.current.ascSort).toBe(true);
  });
});
