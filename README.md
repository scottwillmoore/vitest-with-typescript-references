# Vitest with TypeScript references

This repository attempts to create a reproduction for [the Vitest issue](https://github.com/microsoft/TypeScript/issues/40431), such that `vitest typecheck` does not work with TypeScript references.

The `tsconfig.json` references both `tsconfig.node.json` and `tsconfig.web.json` which provide different `compilerOptions` for each environment. However, due to [a known issue with the TypeScript compiler](https://github.com/microsoft/TypeScript/issues/40431), `tsc --noEmit` is not able to check the types...

1. Clone the repository
2. Install the Node dependencies
3. Inspect the `compilerOptions` of `tsconfig.node.json`
4. Observe how `./vite.config.ts` has relevant types
5. Inspect the `compilerOptions` of `tsconfig.web.json`
6. Observe how `./sources/*` has relevant types
7. Execute `npm run test:types`
8. Observe how the error in `./sources/greet.test-d.ts` is not discovered
