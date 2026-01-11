# Metro Evolved

A tech blog built with [Docusaurus](https://docusaurus.io/). Live at [metroevolved.com](https://metroevolved.com).

## Setup (One-Time)

1. Install **Node.js** Version 24 or higher:  
   <https://nodejs.org/>
2. Enable Corepack:
   ```
   corepack enable
   ```

## Install

```
yarn install
```

## Development

```
yarn start
```

Starts a local dev server with hot reload.

## Build

```
yarn build
```

Generates static files in the `build` directory.

## Deployment

Commits to `main` branch automatically deploy to GitHub Pages.

## Update Dependencies

```
yarn up @docusaurus/core@latest @docusaurus/preset-classic@latest
```
