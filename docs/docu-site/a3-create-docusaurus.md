# Create Docusaurus

## Create New Docusaurus Folder

On local machine, create new Docusaurus directory:
`npx create-docusaurus@latest my-website classic --typescript`

This will create new directory called `my-website`.

## Clone GitHub

git clone https://github.com/yourusername/your-cool-site.git

This will create new directory called `your-cool-site`.

## Copy Contents from Docusaurus into GitHub

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

User commits to main, Deploy from main to gh-pages, Publish from gh-pages into site.
