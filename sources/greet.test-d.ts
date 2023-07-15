import { expectTypeOf } from "vitest";

import { greet } from "./greet";

expectTypeOf<ReturnType<typeof greet>>().toEqualTypeOf<string>();

// An obvious error!
expectTypeOf<ReturnType<typeof greet>>().toEqualTypeOf<number>();
