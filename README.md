# Metro Evolved

A tech blog built with [Docusaurus](https://docusaurus.io/). Live at [metroevolved.com](https://metroevolved.com).

## Setup (One-Time)

1. Install **nvm-windows** (Node Version Manager):  
   <https://github.com/coreybutler/nvm-windows/releases>
2. Install and activate Node.js version 24:
   ```
   nvm install 24
   nvm use 24
   ```
   1. Verify Node.js installation:
      ```
      node -v
      ```
      Expected output:
      ```
      > node -v
      v24.12.0
      ```
3. Enable Corepack and Yarn:

   ```
   corepack enable
   yarn -v
   ```

   Expected output:

   ```
   > yarn -v
   ! Corepack is about to download https://repo.yarnpkg.com/4.12.0/packages/yarnpkg-cli/bin/yarn.js
   ? Do you want to continue? [Y/n] Y

   4.12.0
   ```

## Install

```
yarn install
```

## Build

```
yarn build
```

Generates static files in the `build` directory.

## Development

```
yarn start
```

Starts a local dev server with hot reload.
It will also launch browser and navigate it to Docusaurus default port:
`http://localhost:3000`

## Verify Full Website

```
yarn serve
```

Yarn Serve is similar to Yarn Start. It launches server and browser, however it does NOT launch Hot Reload.

## Deployment

Commits to `main` branch automatically deploy to GitHub Pages.

## Update Docusaurus Dependencies

```
yarn up @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest
```

## Clean Project

The git clean -xdf command is destructive - could benefit from a warning that it removes all untracked files

```
git clean -xdf
```
