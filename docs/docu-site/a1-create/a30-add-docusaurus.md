---
title: Add Docusaurus
---

# Add Docusaurus into GitHub Pages Site

## Introduction

The easiest way to add Docusaurus into your Git project is to first create a separate Docusaurus project folder from scratch. Then copy that Docusaurus project folder into your Git project. In next steps, let's do just that!

## Git Clone your Project

Let's say that in previous steps, on GitHub you have a project `your-cool-site`.

Download it onto local machine into directory `your-cool-site`:
```Cmd
git clone https://github.com/yourusername/your-cool-site.git
```

Now you have a directory `your-cool-site` locally.

## Create New Docusaurus Folder

On local machine, create new Docusaurus project inside your repo:
`npx create-docusaurus@latest your-cool-site classic --typescript`

```Cmd
cd your-cool-site
npm start
```

This will start sample Local Web Server, and you should see a basic Docusaurus site is running in your browser.

After verification, stop your Local Web Server by pressing:  
`Ctrl + C`

## Switch from Npm to Yarn v4

Yarn is required by Docusaurus compiler and by GitHub Actions in future steps.

Navigate into your site directory:  
`cd your-cool-site`

Enable Yarn V4:  
```Cmd
corepack enable
yarn set version stable
```

This should add entry into your `package.json`:  
```Json
  "packageManager": "yarn@4.12.0"
```

Add into `.gitignore` the following entries:
```Txt
.yarn/*
.pnp.*
```

Delete `node-modules` folder  
Yarn will use .yarn foloder.

Delete `package-lock.json` Npm Lock file,
Yarn will use `yarn.lock` file.

Create new Yarn Lock file:
`yarn install`

Now, there should be a new file called `yarn.lock`.

Verify correctness of your local Docusaurus site, in `your-cool-site` directory:

```Cmd
yarn start
```

This will start sample Server, and you should see a basic Docusaurus site is running in your browser, just like in previous section, only now using Yarn v4 instead of Npm.

After verification, stop your Server by pressing:  
`Ctrl + C`

## Verify Building Your site with Docusaurus Compiler

Now you should be able to Compile your side with Yarn:  
`yarn build`

## Add GitHub Workflow from `main` Branch to `gh-pages` Branch

This new Workflow allows scenario where upon a commit in `main` Branch, there will be a Workflow Action which will compile from `main` Branch and submit it into `gh-pages` Branch.

Create new file:  
`.github/workflows/deploy.yml`

Add into that file contents from:  
https://github.com/KodiStudios/metro-evolved/blob/main/.github/workflows/deploy.yml

Finally, in `docusaurus.config.ts` file modify following:

```txt
url: https://GitHubUserName.github.io
baseUrl: /your-cool-site/
organizationName: GitHubUserName
projectName: your-cool-site
```

Commit and Push.

On GitHub.com, now there should be new Action called `Compile main Branch and Push to gh-pages Branch`.

Here's end-to-end workflow:

1. User Commits to `main` Branch
1. `Compile main Branch and Push to gh-pages Branch` Action compiles using Docusaurus Compiler from `main` Branch to `gh-pages` Branch
1. `pages-build-deployment` Action compiles using GH Pages Compiler from `gh-pages` Branch into actual site.

Now, verify that your website is visible at:  
`https://GitHubUserName.github.io/your-cool-site`

## References

For original documentation on GitHub Actions, please consult:  
https://docusaurus.io/docs/deployment#deploying-to-github-pages  
On that page, search for: `GitHub action file`  
Expand, and then look for: `.github/workflows/deploy.yml`
