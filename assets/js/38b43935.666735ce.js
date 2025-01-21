"use strict";(self.webpackChunknaa_vre_website=self.webpackChunknaa_vre_website||[]).push([[273],{7842:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(5893),o=t(1151);const a={sidebar_position:1,title:"RAVRE documentation"},r=void 0,s={id:"readiness_levels/RAVRE/documentation",title:"RAVRE documentation",description:"This page provides detailed documentation for RAVRE. A higher level overview of the RAVRE virtual lab is available on the lab overview page.",source:"@site/docs/readiness_levels/RAVRE/documentation.md",sourceDirName:"readiness_levels/RAVRE",slug:"/readiness_levels/RAVRE/documentation",permalink:"/docs/readiness_levels/RAVRE/documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/NaaVRE/naavre.github.io/blob/main/docs/readiness_levels/RAVRE/documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"RAVRE documentation"}},l={},c=[{value:"Viewpoints",id:"viewpoints",level:3},{value:"Mathematical description",id:"mathematical-description",level:4},{value:"Computational description",id:"computational-description",level:4},{value:"Engineering implementation / Architecture",id:"engineering-implementation--architecture",level:4}];function d(e){const i={a:"a",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["This page provides detailed documentation for RAVRE. A higher level overview of the RAVRE virtual lab is available on ",(0,n.jsx)(i.a,{href:"..",children:"the lab overview page"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"viewpoints",children:"Viewpoints"}),"\n",(0,n.jsx)(i.h4,{id:"mathematical-description",children:"Mathematical description"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"ToDo: A mathematical description of the workflow."})}),"\n",(0,n.jsx)(i.h4,{id:"computational-description",children:"Computational description"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"ToDo: How is the algorithm converted into computational methods?"})}),"\n",(0,n.jsx)(i.h4,{id:"engineering-implementation--architecture",children:"Engineering implementation / Architecture"}),"\n",(0,n.jsx)(i.p,{children:"The following processes take place in the RAVRE data processing pipeline:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Notebook cell ",(0,n.jsx)(i.em,{children:"Download-KNMI"})," requests data from the KNMI open data platform."]}),"\n",(0,n.jsx)(i.li,{children:"KNNI data is returned to NaaVRE and locally stored."}),"\n",(0,n.jsxs)(i.li,{children:["Notebook cell ",(0,n.jsx)(i.em,{children:"KNMI-to-odim-converter"})," retrieves the local data, pre-processes it, and stores it in a Minio object store."]}),"\n",(0,n.jsxs)(i.li,{children:["Notebook cell ",(0,n.jsx)(i.em,{children:"PVOL-VP-converter"})," retrieves the pre-processed data and sends it to the vol2bird using the command-line interface."]}),"\n",(0,n.jsxs)(i.li,{children:["The vol2bird algorithm returns vertical profiles of biological scatters to ",(0,n.jsx)(i.em,{children:"PVOL-VP-converter"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Notebook cell ",(0,n.jsx)(i.em,{children:"PVOL-VP-converter"})," stores the vertical profiles in Minio object store."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:" images/RAVRE_sequence_diagram.drawio.png not found",src:t(9105).Z+"",width:"791",height:"322"})})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9105:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/RAVRE_sequence_diagram.drawio-4a34b6ca8e0a8d5e143d1bdeae4eea6a.png"},1151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>r});var n=t(7294);const o={},a=n.createContext(o);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);