# Create GitHub Pages Site

## Create New Repository

On GitHub, create new Repository.

For this new Repository, select following options:  
Repository template: **No template**  
Owner: **YourUserName**  
Repository name: **your-cool-site**  
Visibility: **Public**  
(Public option is required for your GitHub Pages Site to work)  
Select: **Add README file**  
(This is useful because you will be able to later quicker create new Branches, and thus quicker see your new website)  
.gitignore template: **None**  
Choose a license: **MIT**  
(You can switch it as you like)

Now you have a new GitHub Repository with a single README file.

Next, let's convert that Repository into a GitHub Pages Website.

## Create New Branch

New branch is needed because we will want Docusaurus compiler to run on `main` branch and place output into this new `gh-pages` branch. And later GitHub Pages compiler will run on `gh-pages` branch and output into actual site.

On GitHub, create new Branch called:  
**gh-pages**

Now you have a Repository with 2 Branches, **main** and **gh-pages**.

Next, let's create GitHub Pages that will generate a website based on contents of README file in Branch **gh-pages**.

## Create GitHub Pages

In GitHub, navigate to:  
Settings > Pages  
Source: **Deploy from a Branch**  
Branch: **gh-pages**  
Location: **/ (root)**  
Custom domain: leave empty for now
Select: **Enforce HTTPS**  
(All modern browsers require Https protocol, not Http)

Now, let's confirm your GitHub Pages settings correctness.  

Navigate to Actions. It should have a new Workflow called `pages-build-deployment`. That Workflow was created by GitHub Pages settings.

Upon successful Run of that Workflow, you should now be able to see your website at:  
`https://yourusername.github.io/your-cool-site`

Note that website is grabbing contents of existing `README` file in `gh-pages` Branch!

Now that you have GitHub Pages site running, let's add Docusaurus framework into the mix!
