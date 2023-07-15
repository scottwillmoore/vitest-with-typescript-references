import { expect, test } from "vitest";

import { greet } from "./greet";

test("greet", () => {
	expect(greet("Scott")).toBe("Hello, Scott!");
});
