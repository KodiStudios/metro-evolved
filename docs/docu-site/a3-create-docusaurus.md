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

Add .github/workflows/deploy.yml

With contents from:  
https://docusaurus.io/docs/deployment

Modify following in `docusaurus.config.ts` file:  
url  
baseUrl  
organizationName  
projectName

Commit and Push.

There should be new Action from Deployment file.

User commits to `main` Branch, Deploy from `main` to `gh-pages`, Publish from `gh-pages` into site.
