"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[7622],{1674:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return r},contentTitle:function(){return t},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var s=o(7462),d=o(3366),i=(o(7294),o(3905)),a=["components"],r={sidebar_position:1},t="Manage Docs Versions",l={unversionedId:"Udemy/manage-docs-versions",id:"Udemy/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/Udemy/manage-docs-versions.md",sourceDirName:"Udemy",slug:"/Udemy/manage-docs-versions",permalink:"/Mon_Web_Dev_Wiki/docs/Udemy/manage-docs-versions",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Udemy/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"UdemySidebar",next:{title:"Translate your site",permalink:"/Mon_Web_Dev_Wiki/docs/Udemy/translate-your-site"}},m=[{value:"Create a docs version",id:"create-a-docs-version",children:[],level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[],level:2},{value:"Update an existing version",id:"update-an-existing-version",children:[],level:2}],c={toc:m};function u(e){var n=e.components,r=(0,d.Z)(e,a);return(0,i.mdx)("wrapper",(0,s.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,i.mdx)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,i.mdx)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,i.mdx)("p",null,"Release a version 1.0 of your project:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,i.mdx)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,i.mdx)("p",null,"Your docs now have 2 versions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"1.0")," at ",(0,i.mdx)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"current")," at ",(0,i.mdx)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,i.mdx)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,i.mdx)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,i.mdx)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,i.mdx)("p",null,"Modify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,i.mdx)("p",null,"The docs version dropdown appears in your navbar:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Docs Version Dropdown",src:o(8730).Z})),(0,i.mdx)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,i.mdx)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,i.mdx)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,i.mdx)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},8730:function(e,n,o){n.Z=o.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);