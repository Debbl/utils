import { describe, expect, it } from "vitest";
import { delay } from "./sleep";

describe("delay", () => {
  it("should delay for a while", async () => {
    const start = Date.now();
    await delay(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
