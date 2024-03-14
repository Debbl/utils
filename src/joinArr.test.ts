import { describe, expect, it } from "vitest";
import { joinArr } from "./joinArr";

describe("joinArr", () => {
  it("should join an array with a value", () => {
    const arr = [1, 2, 3];
    const result = joinArr(arr, 0);
    expect(result).toEqual([1, 0, 2, 0, 3]);
  });

  it("if the array is empty, it should return an empty array", () => {
    const arr: number[] = [];
    const result = joinArr(arr, 0);
    expect(result).toEqual([]);
  });
});
