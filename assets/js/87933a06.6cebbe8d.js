"use strict";(self.webpackChunkdocu_temp=self.webpackChunkdocu_temp||[]).push([[270],{8855:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=s(4848),t=s(8453);const n={},c="Create Custom Url",i={id:"docu-site/a40-add-custom-url",title:"Create Custom Url",description:"Create New Docusaurus Folder",source:"@site/docs/docu-site/a40-add-custom-url.md",sourceDirName:"docu-site",slug:"/docu-site/a40-add-custom-url",permalink:"/docs/docu-site/a40-add-custom-url",draft:!1,unlisted:!1,editUrl:"https://github.com/KodiStudios/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docu-site/a40-add-custom-url.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Docusaurus",permalink:"/docs/docu-site/a30-create-docusaurus"},next:{title:"Docusaurus Markdown Rules",permalink:"/docs/docu-site/b1-markdown-rules"}},d={},l=[{value:"Create New Docusaurus Folder",id:"create-new-docusaurus-folder",level:2},{value:"Clone GitHub",id:"clone-github",level:2},{value:"Copy Contents from Docusaurus directory into GitHub directory",id:"copy-contents-from-docusaurus-directory-into-github-directory",level:2},{value:"Add Deployment",id:"add-deployment",level:2}];function u(e){const o={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"create-custom-url",children:"Create Custom Url"}),"\n",(0,r.jsx)(o.h2,{id:"create-new-docusaurus-folder",children:"Create New Docusaurus Folder"}),"\n",(0,r.jsxs)(o.p,{children:["On local machine, create new Docusaurus project:",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.code,{children:"npx create-docusaurus@latest my-website classic --typescript"})]}),"\n",(0,r.jsxs)(o.p,{children:["This will create a new directory called ",(0,r.jsx)(o.code,{children:"my-website"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"clone-github",children:"Clone GitHub"}),"\n",(0,r.jsxs)(o.p,{children:["On local machine, Clone your GitHub project:",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.code,{children:"git clone https://github.com/yourusername/your-cool-site.git"})]}),"\n",(0,r.jsxs)(o.p,{children:["This will create new directory called ",(0,r.jsx)(o.code,{children:"your-cool-site"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"copy-contents-from-docusaurus-directory-into-github-directory",children:"Copy Contents from Docusaurus directory into GitHub directory"}),"\n",(0,r.jsxs)(o.p,{children:["Copy Contents from Docusaurus directory into GitHub directory with Windows Explorer, or with simple cmd command:",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.code,{children:"xcopy /s my-website your-cool-site"})]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"/s"})," means recursive"]}),"\n",(0,r.jsx)(o.h2,{id:"add-deployment",children:"Add Deployment"}),"\n",(0,r.jsxs)(o.p,{children:["Deployment allows that upon a commit in ",(0,r.jsx)(o.code,{children:"main"}),", there will be a Deployment Action which will compile from ",(0,r.jsx)(o.code,{children:"main"})," Branch and submit it into ",(0,r.jsx)(o.code,{children:"gh-pages"})," Branch."]}),"\n",(0,r.jsxs)(o.p,{children:["Create new file:",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.code,{children:".github/workflows/deploy.yml"})]}),"\n",(0,r.jsxs)(o.p,{children:["Add into it contents from:",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"https://docusaurus.io/docs/deployment",children:"https://docusaurus.io/docs/deployment"})]}),"\n",(0,r.jsxs)(o.p,{children:["Modify following in ",(0,r.jsx)(o.code,{children:"docusaurus.config.ts"})," file:",(0,r.jsx)(o.br,{}),"\n","url",(0,r.jsx)(o.br,{}),"\n","baseUrl",(0,r.jsx)(o.br,{}),"\n","organizationName",(0,r.jsx)(o.br,{}),"\n","projectName"]}),"\n",(0,r.jsx)(o.p,{children:"Commit and Push."}),"\n",(0,r.jsxs)(o.p,{children:["On GitHub.com, now there should be new Action called ",(0,r.jsx)(o.code,{children:"Deploy to GitHub Pages"}),"."]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["User commits to ",(0,r.jsx)(o.code,{children:"main"})," Branch"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Deploy to GitHub Pages"})," Action compiles from ",(0,r.jsx)(o.code,{children:"main"})," Branch to ",(0,r.jsx)(o.code,{children:"gh-pages"})," Branch"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"pages-build-deployment"})," Action compiles from ",(0,r.jsx)(o.code,{children:"gh-pages"})," Branch into actual site."]}),"\n"]})]})}function a(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>c,x:()=>i});var r=s(6540);const t={},n=r.createContext(t);function c(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);