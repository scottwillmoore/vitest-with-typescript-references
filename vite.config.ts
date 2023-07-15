import { UserConfig } from "vite";

import react from "@vitejs/plugin-react";

// No types from `dom`!
// document.getElementById;

// Types from `node`!
process.version;

// Types from `vitest/config`!
export default {
	plugins: [react()],
} satisfies UserConfig;
