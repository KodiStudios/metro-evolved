# Create Docusaurus

## Create New Docusaurus Folder

On local machine, create new Docusaurus project:  
`npx create-docusaurus@latest my-website classic --typescript`

This will create a new directory called `my-website`.

Verify your local docusaurus site by running:

```Cmd
cd my-website
npm start
```

This will start sample Server, and you should see a basic Docusaurus site is running in your browser.

After verification, stop your Server by pressing:  
`Ctrl + C`

## Clone Your Repo from GitHub

On local machine, exit your Docusaurus directory, and Clone your GitHub project:  

```Cmd
cd ..
git clone https://github.com/yourusername/your-cool-site.git
```

This will create new directory called `your-cool-site`. Thus, you should now have 2 directories, next to each other, `my-website` and `your-cool-site`.

## Copy Contents from Docusaurus directory into GitHub directory

Copy Contents from Docusaurus directory into GitHub directory with Windows Explorer, or with simple cmd command:  
`xcopy /s my-website your-cool-site`

`/s` means recursive

Verify your local docusaurus site in GitHub Repo directory by running:

```Cmd
cd your-cool-site
npm start
```

This will start sample Server, and you should see a basic Docusaurus site is running in your browser.

After verification, stop your Server by pressing:  
`Ctrl + C`

## Add Deployment from main Branch to gh-pages Branch

Deployment allows a workflow where upon a commit in `main`, there will be a Deployment Action which will compile from `main` Branch and submit it into `gh-pages` Branch.

Create new file:  
`.github/workflows/deploy.yml`

Add into that file contents from:  
https://docusaurus.io/docs/deployment

Modify following in `docusaurus.config.ts` file:  
url  
baseUrl  
organizationName  
projectName

Commit and Push.

On GitHub.com, now there should be new Action called `Deploy to GitHub Pages`.

1. User commits to `main` Branch
1. `Deploy to GitHub Pages` Action compiles from `main` Branch to `gh-pages` Branch
1. `pages-build-deployment` Action compiles from `gh-pages` Branch into actual site.
