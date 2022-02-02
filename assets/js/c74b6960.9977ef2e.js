"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[6221],{80108:function(e,n,s){s.r(n),s.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var i=s(87462),a=s(63366),t=(s(67294),s(3905)),r=(s(9877),s(58215),["components"]),d={id:"7-kyu-Additionner_les_chiffres_d_un_nombre"},o="Additionner les chiffres d'un nombre",m={unversionedId:"Codewars/Katas/7-kyu-Additionner_les_chiffres_d_un_nombre",id:"Codewars/Katas/7-kyu-Additionner_les_chiffres_d_un_nombre",title:"Additionner les chiffres d'un nombre",description:"Summing a number's digits | Codewars",source:"@site/docs/Codewars/1-Katas/7-kyu-Additionner_les_chiffres_d_un_nombre.mdx",sourceDirName:"Codewars/1-Katas",slug:"/Codewars/Katas/7-kyu-Additionner_les_chiffres_d_un_nombre",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/7-kyu-Additionner_les_chiffres_d_un_nombre",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Codewars/1-Katas/7-kyu-Additionner_les_chiffres_d_un_nombre.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"7-kyu-Additionner_les_chiffres_d_un_nombre"},sidebar:"CodewarsSidebar",previous:{title:"Menu",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/menu"},next:{title:"Cha\xeenes invers\xe9es",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/8-kyu-Chaines_inversees"}},u=[],l={toc:u};function c(e){var n=e.components,s=(0,a.Z)(e,r);return(0,t.mdx)("wrapper",(0,i.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"additionner-les-chiffres-dun-nombre"},"Additionner les chiffres d'un nombre"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/52f3149496de55aded000410/javascript"},"Summing a number's digits | Codewars")),(0,t.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,t.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,t.mdx)("h5",{parentName:"div"},(0,t.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,t.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"instructions")),(0,t.mdx)("div",{parentName:"div",className:"admonition-content"},(0,t.mdx)("p",{parentName:"div"},"\xc9crivez une fonction nomm\xe9e ",(0,t.mdx)("inlineCode",{parentName:"p"},"sumDigits")," qui prend un nombre en entr\xe9e et renvoie la somme de la valeur absolue de chacun des chiffres\nd\xe9cimaux du nombre."),(0,t.mdx)("p",{parentName:"div"},"Par exemple : (Entr\xe9e --\x3e Sortie)"),(0,t.mdx)("pre",{parentName:"div"},(0,t.mdx)("code",{parentName:"pre",className:"language-sh"},"10 --\x3e 1\n99 --\x3e 18\n-32 --\x3e 5\n")),(0,t.mdx)("p",{parentName:"div"},"Supposons que tous les nombres de l'entr\xe9e seront des valeurs enti\xe8res."),(0,t.mdx)("pre",{parentName:"div"},(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"function sumDigits(number) {\n}\n")))),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"function sumDigits(number) {\n  let posNum = (number < 0) ? number * -1 : number;\n  let digit = posNum.toString().split('');\n  let sum = 0;\n  for (i = 0; i < digit.length; i++) {\n    sum += parseInt(digit[i]);\n  }\n  return sum;\n}\n")),(0,t.mdx)("nav",{className:"docs-nav"},(0,t.mdx)("div",{className:"docs-nav-code"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Exemples de tests"',title:'"Exemples',de:!0,'tests"':!0},"console.log(sumDigits(10));\nconsole.log(sumDigits(99));\nconsole.log(sumDigits(-32));\n"))),(0,t.mdx)("div",{className:"docs-nav-html"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="console"',title:'"console"'},"1\n18\n5\n")))))}c.isMDXComponent=!0}}]);