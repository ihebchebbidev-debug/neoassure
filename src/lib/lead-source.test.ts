import { describe, expect, test } from "vitest";
import { getLeadSource } from "./lead-source";

describe("getLeadSource", () => {
  test("utm_source facebook → Facebook", () => {
    expect(getLeadSource({ utm_source: "facebook" })).toBe("Facebook");
  });
  test("utm_source ig → Instagram", () => {
    expect(getLeadSource({ utm_source: "ig" })).toBe("Instagram");
  });
  test("fbclid without UTM → Facebook", () => {
    expect(getLeadSource({ fbclid: "abc" })).toBe("Facebook");
  });
  test("instagram referrer → Instagram", () => {
    expect(getLeadSource({ referrer: "https://l.instagram.com/" })).toBe("Instagram");
  });
  test("google referrer → Google", () => {
    expect(getLeadSource({ referrer: "https://www.google.com/" })).toBe("Google");
  });
  test("own-site referrer only → Direct", () => {
    expect(getLeadSource({ referrer: "https://www.neoassur.com/" })).toBe("Direct");
  });
  test("nothing → Direct", () => {
    expect(getLeadSource({})).toBe("Direct");
  });
});
