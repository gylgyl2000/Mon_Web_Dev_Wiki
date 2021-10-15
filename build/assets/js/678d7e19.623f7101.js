"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[7005],{4594:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var t=a(7462),o=a(3366),d=(a(7294),a(3905)),i=["components"],r={sidebar_position:2},l="Translate your site",s={unversionedId:"Udemy/translate-your-site",id:"Udemy/translate-your-site",isDocsHomePage:!1,title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/Udemy/translate-your-site.md",sourceDirName:"Udemy",slug:"/Udemy/translate-your-site",permalink:"/Mon_Web_Dev_Wiki/docs/Udemy/translate-your-site",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Udemy/translate-your-site.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"UdemySidebar",previous:{title:"Manage Docs Versions",permalink:"/Mon_Web_Dev_Wiki/docs/Udemy/manage-docs-versions"}},u=[{value:"Configure i18n",id:"configure-i18n",children:[]},{value:"Translate a doc",id:"translate-a-doc",children:[]},{value:"Start your localized site",id:"start-your-localized-site",children:[]},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[]},{value:"Build your localized site",id:"build-your-localized-site",children:[]}],c={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,d.mdx)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"translate-your-site"},"Translate your site"),(0,d.mdx)("p",null,"Let's translate ",(0,d.mdx)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,d.mdx)("h2",{id:"configure-i18n"},"Configure i18n"),(0,d.mdx)("p",null,"Modify ",(0,d.mdx)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,d.mdx)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,d.mdx)("p",null,"Copy the ",(0,d.mdx)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,d.mdx)("p",null,"Translate ",(0,d.mdx)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,d.mdx)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,d.mdx)("p",null,"Start your site on the French locale:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,d.mdx)("p",null,"Your localized site is accessible at ",(0,d.mdx)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,d.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,d.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,d.mdx)("h5",{parentName:"div"},(0,d.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,d.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,d.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,d.mdx)("div",{parentName:"div",className:"admonition-content"},(0,d.mdx)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),(0,d.mdx)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,d.mdx)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,d.mdx)("p",null,"Modify the ",(0,d.mdx)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,d.mdx)("p",null,"The locale dropdown now appears in your navbar:"),(0,d.mdx)("p",null,(0,d.mdx)("img",{alt:"Locale Dropdown",src:a(322).Z})),(0,d.mdx)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,d.mdx)("p",null,"Build your site for a specific locale:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,d.mdx)("p",null,"Or build your site to include all the locales at once:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}m.isMDXComponent=!0},322:function(e,n,a){n.Z=a.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);