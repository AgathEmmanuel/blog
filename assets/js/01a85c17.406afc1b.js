"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8412],{9496:(e,t,a)=>{a.d(t,{c:()=>E});var l=a(1504),r=a(4971),n=a(3976),s=a(1432),c=a(6016),i=a(4357);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.c)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.c)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.c)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(c.c,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var g=a(5168);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(g.Mx,{component:u,props:e})}function d(e){let{sidebar:t}=e;const a=(0,s.U)();return t?.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(n.c,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(d,{sidebar:t}),l.createElement("main",{className:(0,r.c)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3024:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(1504),r=a(4971),n=a(4357);const s=()=>(0,n.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var c=a(5756),i=a(5864),m=a(9496),o=a(3020);const g={tag:"tag_Nnez"};function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:g.tag},l.createElement(o.c,e))))),l.createElement("hr",null))}function b(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var d=a(8712);function E(e){let{tags:t,sidebar:a}=e;const n=s();return l.createElement(c.cr,{className:(0,r.c)(i.W.wrapper.blogPages,i.W.page.blogTagsListPage)},l.createElement(c.U7,{title:n}),l.createElement(d.c,{tag:"blog_tags_list"}),l.createElement(m.c,{sidebar:a},l.createElement("h1",null,n),l.createElement(b,{tags:t})))}},3020:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(1504),r=a(4971),n=a(6016);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:a,count:c}=e;return l.createElement(n.c,{href:t,className:(0,r.c)(s.tag,c?s.tagWithCount:s.tagRegular)},a,c&&l.createElement("span",null,c))}}}]);