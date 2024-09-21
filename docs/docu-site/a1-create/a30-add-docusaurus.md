---
title: Add Docusaurus
---

# Add Docusaurus into GitHub Pages Site

## Introduction

The easiest way to add Docusaurus into your Git project is to first create a separate Docusaurus project folder from scratch. Then copy that Docusaurus project folder into your Git project. In next steps, let's do just that!

## Create New Docusaurus Folder

Let's say that in previous steps, on GitHub you have a project `your-cool-site`.

Download it onto local machine into directory `your-cool-site`:
```Cmd
git clone https://github.com/yourusername/your-cool-site.git
```

Now you have a directory `your-cool-site` locally.

Let's leave that directory as is, and create completely separate new directory for Docusaurus `docu-origin`. This new `docu-origin` folder will be sibling of `your-cool-site` folder.

On local machine, create new Docusaurus project directory `docu-origin`:  
`npx create-docusaurus@latest docu-origin classic --typescript`

This will create a new directory called `docu-origin`. So you have 2 directories next to each other `your-cool-site` and `docu-origin`.

Verify your local Docusaurus site by running:

```Cmd
cd docu-origin
npm start
```

This will start sample Server, and you should see a basic Docusaurus site is running in your browser.

After verification, stop your Server by pressing:  
`Ctrl + C`

## Copy Contents from Docusaurus directory into GitHub directory

Copy Contents from Docusaurus directory into your project Git directory with Windows Explorer, or with simple cmd command:  
`xcopy /s docu-origin your-cool-site`

`/s` means recursive

## Switch from Npm to Yarn

Yarn is required by Docusaurus compiler and by GitHub Actions in future steps.

Navigate into your site directory:  
`cd your-cool-site`

Install `yarn` globally:  
`npm install -g yarn`

Delete `node-modules` folder.  
Delete `package-lock.json` Npm Lock file.

Create new Yarn Lock file:
`yarn install`

Now, there should be a new file called `yarn.lock`.

Verify correctness of your local Docusaurus site, in `your-cool-site` directory:

```Cmd
yarn start
```

This will start sample Server, and you should see a basic Docusaurus site is running in your browser, just like in previous section, only now using Yarn instead of Npm.

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
https://docusaurus.io/docs/deployment#deploying-to-github-pages  
On that page, search for: `GitHub action file`  
Expand, and then look for: `.github/workflows/deploy.yml`

Finally, in `docusaurus.config.ts` file modify following:

```txt
url: https://GitHubUserName.github.io
baseUrl: /your-cool-site/
organizationName: GitHubUserName
projectName: your-cool-site
```

Commit and Push.

On GitHub.com, now there should be new Action called `Deploy to GitHub Pages`.

Here's end-to-end workflow:

1. User Commits to `main` Branch
1. `Deploy to GitHub Pages` Action compiles using Docusaurus Compiler from `main` Branch to `gh-pages` Branch
1. `pages-build-deployment` Action compiles using GH Pages Compiler from `gh-pages` Branch into actual site.

Now, verify that your website is visible at:  
`https://GitHubUserName.github.io/your-cool-site`
