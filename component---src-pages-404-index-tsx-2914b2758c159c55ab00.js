(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{GEoZ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),r=a("N5vR");t.default=function(){return c.a.createElement(r.a,null,c.a.createElement("h1",null,"404: Not Found"),c.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},N5vR:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("Wbzz"),i=a("TSYQ"),o=a.n(i),l=(a("cIOH"),a("UADf"),a("diRs")),s=(a("czTT"),a("Sdc0")),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},d=a("6VBw"),h=function(e,t){return n.createElement(d.a,Object.assign({},e,{ref:t,icon:m}))};h.displayName="HomeOutlined";var u=n.forwardRef(h),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"},p=function(e,t){return n.createElement(d.a,Object.assign({},e,{ref:t,icon:f}))};p.displayName="GithubFilled";var g=n.forwardRef(p),v="undefined"!=typeof document,E=function(e){var t=e.siteTitle,a=e.githubUrl,n=e.className,i=e.themeModeSwitcher,m=!!v&&"dark"===document.body.dataset.theme;return c.a.createElement("header",{className:o()("site-header",n)},c.a.createElement("div",{className:"site-title"},c.a.createElement("div",{className:"header-actions"},c.a.createElement(u,{onClick:function(){return Object(r.navigate)("/home")},style:{margin:"0 8px 0 4px",fontSize:"16px"}}),c.a.createElement("h1",{style:{margin:0}},t)),c.a.createElement("div",{className:"header-actions"},!1!==i&&c.a.createElement(s.a,{className:"theme-switcher header-action",unCheckedChildren:"日间",checkedChildren:"夜间",defaultChecked:m,onChange:function(e){!v||(document.body.dataset.theme=e?"dark":"light")}}),c.a.createElement(l.a,{content:"客人，来个 star 呗 😉",placement:"topRight",arrowPointAtCenter:!0},c.a.createElement("a",{href:a,className:"header-action",style:{textDecoration:"none"},target:"_blank"},c.a.createElement(g,{className:"github-icon action-link"}))))))},N=function(e){var t=e.contact,a=e.author,n=e.className;return c.a.createElement("footer",{className:n},c.a.createElement("div",{className:""},"Made with ❤️"),c.a.createElement("div",{className:"author"},"by",c.a.createElement("a",{href:t,style:{marginLeft:"4px"},target:"_blank"},a)))},b=a("qhky"),w=function(e){var t=e.description,a=e.lang,n=void 0===a?"":a,r=e.meta,i=void 0===r?[]:r,o=e.title,l=t;return c.a.createElement(b.a,{htmlAttributes:{lang:n},title:o,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:image",content:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description",content:l},{property:"twitter:image",content:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png"}].concat(i)})};w.defaultProps={lang:"zh_CN",meta:[],description:""};var y=w;a("mIGZ"),t.a=function(e){var t=e.children,a=e.siteTitle,n=e.hideSiteTitle,i=e.headerClassName,l=e.mainClassName,s=e.footerClassName,m=e.themeModeSwitcher,d=Object(r.useStaticQuery)("3272957548").site.siteMetadata,h=d.title,u=d.githubUrl,f=d.contact,p=d.author;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{title:"Vis Dashboard | AntV"}),!n&&c.a.createElement(E,{siteTitle:a||h,githubUrl:u,className:i,themeModeSwitcher:m}),c.a.createElement("main",{className:o()(l)},t),c.a.createElement(N,{author:p,contact:f,className:s}))}},UADf:function(e,t,a){},cIOH:function(e,t,a){},czTT:function(e,t,a){},mIGZ:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-index-tsx-2914b2758c159c55ab00.js.map