(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{115:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),c=a(99),i=a(62),o=a.n(i);t.a=({className:e,...t})=>r.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(o.a.iconEdit,e)},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},116:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(99);var c=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,c=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!c;){const e=i[a],{href:o}=e,s=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),c=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(61),o=a.n(i);const s="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return c(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:e}))}},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a(100),i=a(22),o=a(103),s=a(101);var m=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(104);var u=function(){const{siteConfig:{title:e}}=Object(i.default)(),{pluginId:t}=Object(d.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(c.useDocsPreferredVersion)(t),n=Object(d.useActiveVersion)(t),{latestDocSuggestion:r,latestVersionSuggestion:o}=Object(d.useDocVersionSuggestions)(t);if(!o)return l.a.createElement(l.a.Fragment,null);const m=null!=r?r:(u=o).docs.find((e=>e.id===u.mainDocId));var u;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:m.path,onClick:()=>a(o.name)},"latest version"))," ","(",o.label,")."))},E=a(116),g=a(115),v=a(99),p=a(72),f=a.n(p);t.default=function(e){const{siteConfig:t}=Object(i.default)(),{url:a}=t,{content:n}=e,{metadata:s,frontMatter:{image:p,keywords:b,hide_title:h,hide_table_of_contents:N}}=n,{description:_,title:O,permalink:w,editUrl:j,lastUpdatedAt:k,lastUpdatedBy:y}=s,{pluginId:C}=Object(d.useActivePlugin)({failfast:!0}),x=Object(d.useVersions)(C),L=Object(d.useActiveVersion)(C),I=x.length>1,A=Object(c.useTitleFormatter)(O),S=Object(o.a)(p,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,A),l.a.createElement("meta",{property:"og:title",content:A}),_&&l.a.createElement("meta",{name:"description",content:_}),_&&l.a.createElement("meta",{property:"og:description",content:_}),b&&b.length&&l.a.createElement("meta",{name:"keywords",content:b.join(",")}),p&&l.a.createElement("meta",{property:"og:image",content:S}),p&&l.a.createElement("meta",{name:"twitter:image",content:S}),p&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${O}`}),w&&l.a.createElement("meta",{property:"og:url",content:a+w}),w&&l.a.createElement("link",{rel:"canonical",href:a+w})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(v.a)("col",{[f.a.docItemCol]:!N})},l.a.createElement(u,null),l.a.createElement("div",{className:f.a.docItemContainer},l.a.createElement("article",null,I&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",L.label)),!h&&l.a.createElement("header",null,l.a.createElement("h1",{className:f.a.docTitle},O)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(j||k||y)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},j&&l.a.createElement("a",{href:j,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(g.a,null),"Edit this page")),(k||y)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",k&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*k).toISOString(),className:f.a.docLastUpdatedAt},new Date(1e3*k).toLocaleDateString()),y&&" "),y&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,y)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:s})))),!N&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(E.a,{toc:n.toc}))))}}}]);