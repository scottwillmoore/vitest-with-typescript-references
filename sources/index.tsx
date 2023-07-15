// Types from `react` and `react-dom`!
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Container } from "./Container";
import { greet } from "./greet";

// Types from `vite/client`!
import "./index.css";

// Types from `dom`!
window;

// No types from `node`!
// This shouldn't work, but it does... It might be caused by @types/node being
// included by another dependency such as `@types/react`, `@types/react-dom` or
// `vite/client`.
// process;

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error("Could not get the root element.");
}

const root = createRoot(rootElement);
root.render(
	<StrictMode>
		<Container>
			<h1>{greet("Scott")}</h1>
		</Container>
	</StrictMode>
);
