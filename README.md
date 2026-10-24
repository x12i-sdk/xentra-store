# @x12i/xentra-store usage example

Storage interfaces and in-memory adapter for Xentra.

This consuming application demonstrates **create and update an account in the in-memory store** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Use the in-memory Xentra store during a local integration.
- Implement another storage backend against the shared store interfaces.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xentra-store)
- [Implementation monorepo](https://github.com/x12i/xentra)
- [Reviewed package source](https://github.com/x12i/xentra/tree/004372e6695509bf2e95d2e4e53d4534e81dd312/packages/store)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
