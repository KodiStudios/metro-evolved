# Create Docusaurus

## Create New Docusaurus Folder

On local machine, create new Docusaurus project:  
`npx create-docusaurus@latest my-website classic --typescript`

This will create a new directory called `my-website`.

## Clone GitHub

On local machine, Clone your GitHub project:  
`git clone https://github.com/yourusername/your-cool-site.git`

This will create new directory called `your-cool-site`.

## Copy Contents from Docusaurus directory into GitHub directory

Copy Contents from Docusaurus directory into GitHub directory with Windows Explorer, or with simple cmd command:  
`xcopy /s my-website your-cool-site`

`/s` means recursive

## Add Deployment

Deployment allows that upon a commit in `main`, there will be a Deployment Action which will compile from `main` Branch and submit it into `gh-pages` Branch.

Create new file:  
`.github/workflows/deploy.yml`

Add into it contents from:  
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
