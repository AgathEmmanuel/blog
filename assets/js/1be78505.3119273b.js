"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9656,9772],{2597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(1504),l=n(4971),c=n(5756),o=n(5864),r=n(9940),i=n(4456),s=n(9920),d=n(6192),m=n(3976),u=n(4357),b=n(3943),p=n(7124);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:o,cancelScroll:r}=(0,b.yI)();return(0,b.SM)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(c.current?c.current=!1:a>=o?(r(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.c)((e=>{e.location.hash&&(c.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.c)("clean-btn",o.W.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(5592),g=n(1432),v=n(1824),_=n(8164),k=n(5072);function C(e){return a.createElement("svg",(0,k.c)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function I(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.c)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(C,{className:S.collapseSidebarButtonIcon}))}var N=n(3868),T=n(1100);const x=Symbol("EmptyContext"),y=a.createContext(x);function B(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),c=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(y.Provider,{value:c},t)}var W=n(8448),L=n(3376),M=n(6016),w=n(3664);function A(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){let{item:t,onItemClick:n,activePath:c,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.y)(),f=function(e){const t=(0,w.c)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.OQ)(e):void 0),[e,t])}(t),g=(0,r.Md)(t,c),_=(0,L.Sc)(h,c),{collapsed:C,setCollapsed:S}=(0,W.a)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(y);if(e===x)throw new T.AH("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!C),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const c=(0,T.i0)(t);(0,a.useEffect)((()=>{t&&!c&&n&&l(!1)}),[t,c,n,l])}({isActive:g,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((()=>{b&&I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,l.c)(o.W.docs.docSidebarItemCategory,o.W.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(M.c,(0,k.c)({className:(0,l.c)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(A,{categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})),a.createElement(W.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(j,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:c,level:i+1})))}var P=n(8136),F=n(3232);const G={menuExternalLink:"menuExternalLink_NmtK"};function D(e){let{item:t,onItemClick:n,activePath:c,level:i,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,r.Md)(t,c),h=(0,P.c)(m);return a.createElement("li",{className:(0,l.c)(o.W.docs.docSidebarItemLink,o.W.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(M.c,(0,k.c)({className:(0,l.c)("menu__link",!h&&G.menuExternalLink,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(F.c,null)))}const U={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){let{item:t,level:n,index:c}=e;const{value:r,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.c)(o.W.docs.docSidebarItemLink,o.W.docs.docSidebarItemLinkLevel(n),i&&[U.menuHtmlItem,"menu__list-item"],s),key:c,dangerouslySetInnerHTML:{__html:r}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(H,(0,k.c)({item:t},n));case"html":return a.createElement(R,(0,k.c)({item:t},n));default:return a.createElement(D,(0,k.c)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(B,null,t.map(((e,t)=>a.createElement(z,(0,k.c)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(K),O={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Y(e){let{path:t,sidebar:n,className:c}=e;const r=function(){const{isActive:e}=(0,N.el)(),[t,n]=(0,a.useState)(e);return(0,b.SM)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.c)("menu thin-scrollbar",O.menu,r&&O.menuWithAnnouncementBar,c)},a.createElement("ul",{className:(0,l.c)(o.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const q="sidebar_njMd",Q="sidebarWithHideableNavbar_wUlq",V="sidebarHidden_VK0M",X="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:c,isHidden:o}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,v.y)();return a.createElement("div",{className:(0,l.c)(q,r&&Q,o&&V)},r&&a.createElement(_.c,{tabIndex:-1,className:X}),a.createElement(Y,{path:t,sidebar:n}),i&&a.createElement(I,{onClick:c}))}const Z=a.memo(J);var $=n(5168),ee=n(1336);const te=e=>{let{sidebar:t,path:n}=e;const c=(0,ee.q)();return a.createElement("ul",{className:(0,l.c)(o.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&c.toggle(),"link"===e.type&&c.toggle()},level:1}))};function ne(e){return a.createElement($.Mx,{component:te,props:e})}const ae=a.memo(ne);function le(e){const t=(0,g.U)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Z,e),l&&a.createElement(ae,e))}const ce={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function oe(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce.expandButton,title:(0,u.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ce.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry"};function ie(e){let{children:t}=e;const n=(0,d.m)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function se(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:c}=e;const{pathname:r}=(0,f.IT)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),c((e=>!e))}),[c,i]);return a.createElement("aside",{className:(0,l.c)(o.W.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&s(!0)}},a.createElement(ie,null,a.createElement(le,{sidebar:t,path:r,onCollapse:d,isHidden:i})),i&&a.createElement(oe,{toggleSidebar:d}))}const de={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function me(e){let{hiddenSidebarContainer:t,children:n}=e;const c=(0,d.m)();return a.createElement("main",{className:(0,l.c)(de.docMainContainer,(t||!c)&&de.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.c)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced)},n))}const ue={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function be(e){let{children:t}=e;const n=(0,d.m)(),[l,c]=(0,a.useState)(!1);return a.createElement(m.c,{wrapperClassName:ue.docsWrapper},a.createElement(E,null),a.createElement("div",{className:ue.docPage},n&&a.createElement(se,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:c}),a.createElement(me,{hiddenSidebarContainer:l},t)))}var pe=n(9772),he=n(8712);function Ee(e){const{versionMetadata:t}=e,n=(0,r.sr)(e);if(!n)return a.createElement(pe.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(he.c,{version:t.version,tag:(0,i.SE)(t.pluginId,t.version)}),a.createElement(c.cr,{className:(0,l.c)(o.W.wrapper.docsPages,o.W.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.Q,{version:t},a.createElement(d.y,{name:u,items:b},a.createElement(be,null,m)))))}},9772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(1504),l=n(4357),c=n(5756),o=n(3976);function r(){return a.createElement(a.Fragment,null,a.createElement(c.U7,{title:(0,l.G)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.c,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.c,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);