import { describe, expectTypeOf, test, vi } from "vitest";
import Iubenda from "../../services/iubenda.js";

describe("Test Iubenda", () => {
  test("test get privacy policy", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        sucess: true,
        content: "",
      })
    );
    const iubenda = new Iubenda("96833399");
    const policy = await iubenda.cookiePolicy();
    expectTypeOf(policy).toEqualTypeOf("string");
  });
});
