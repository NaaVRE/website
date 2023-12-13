"use strict";(self.webpackChunknaa_vre_website=self.webpackChunknaa_vre_website||[]).push([[167],{7326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(5893),s=n(1151);const i={sidebar_position:3},o="The NaaVRE Interface",r={id:"NaaVRE_Interface/index",title:"The NaaVRE Interface",description:"The Notebook as a Virtual Research Environment (NaaVRE) is a set of tools to allow users to containerize cells, compose",source:"@site/docs/NaaVRE_Interface/index.md",sourceDirName:"NaaVRE_Interface",slug:"/NaaVRE_Interface/",permalink:"/NaaVRE-website/docs/NaaVRE_Interface/",draft:!1,unlisted:!1,editUrl:"https://github.com/QCDIS/NaaVRE-website/blob/main/docs/NaaVRE_Interface/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/NaaVRE-website/docs/tutorials/"}},l={},c=[{value:"Component Containerizer",id:"component-containerizer",level:2},{value:"Special Variables",id:"special-variables",level:3},{value:"Experiment Manager",id:"experiment-manager",level:2},{value:"Special Components",id:"special-components",level:3},{value:"Cells Catalog",id:"cells-catalog",level:3},{value:"Notebook Search",id:"notebook-search",level:2},{value:"Jupyterlab-git",id:"jupyterlab-git",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"the-naavre-interface",children:"The NaaVRE Interface"}),"\n",(0,a.jsx)(t.p,{children:"The Notebook as a Virtual Research Environment (NaaVRE) is a set of tools to allow users to containerize cells, compose\nworkflows and execute them on a workflow engine."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"NaaVRE_interface",src:n(4015).Z+"",width:"951",height:"668"})}),"\n",(0,a.jsx)(t.h2,{id:"component-containerizer",children:"Component Containerizer"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Component Containerizer",src:n(6352).Z+"",width:"648",height:"659"}),"\nThe 'Cell Preview' panel shows a preview of the cell that is currently selected including its name, inputs and outputs.\nUnder the 'Cell Preview' panel there a list of the inputs and outputs of the cell and their types. The types are needed\nto be filled in by the user when containerizing a cell. Currently, the supported types are:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"String"}),"\n",(0,a.jsx)(t.li,{children:"Integer"}),"\n",(0,a.jsx)(t.li,{children:"Float"}),"\n",(0,a.jsx)(t.li,{children:"List"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Under the 'Inputs' and 'Outputs' there is the 'Base Image' selection. This is the base image that will be used to build\nthe container. The default base image is 'miniconda3'. The user can select a different base image from the drop down."}),"\n",(0,a.jsx)(t.h3,{id:"special-variables",children:"Special Variables"}),"\n",(0,a.jsx)(t.p,{children:"The user can use two special variables in the cell code:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"param_"}),": This variable is used to pass input parameters to the cell. These parameters are passed to the cell during\nexecution and are requested by the user every time a workflow is executed that contains the cell with the parameters.\n",(0,a.jsx)(t.a,{href:"https://github.com/QCDIS/vre_documetation/assets/9680609/fea3d96b-97d3-43cd-b009-b5bd4537de5a",children:"Param_example.webm"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"conf_"}),": This variable is used to pass configuration parameters to all cells. ",(0,a.jsx)(t.code,{children:"conf_"})," variables once deca-lied are visible\nby all cells of the workflow. They can be thought of as 'global' variables therefore, they do not require to set their type\nlike other variables.\n",(0,a.jsx)(t.a,{href:"https://github.com/QCDIS/vre_documetation/assets/9680609/f7020f7f-69d9-4916-bb56-83ed64cb98a8",children:"Conf_example.webm"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Component Containerizer",src:n(3944).Z+"",width:"859",height:"611"})}),"\n",(0,a.jsxs)(t.p,{children:["Notice in the image above that the ",(0,a.jsx)(t.code,{children:"conf_b"})," variable is declared in the first cell and used in the second and third cell.\nHowever, the ",(0,a.jsx)(t.code,{children:"conf_b"})," is not showing up as input in the second and third cell."]}),"\n",(0,a.jsx)(t.h2,{id:"experiment-manager",children:"Experiment Manager"}),"\n",(0,a.jsx)(t.p,{children:"In the 'Experiment Manager' page you can compose and execute workflows. To compose a workflow click on the '+' button in\nthe bottom right corner of the page and select the 'Cells Catalog' option."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Experiment Manager",src:n(5703).Z+"",width:"770",height:"466"})}),"\n",(0,a.jsx)(t.p,{children:"After you have selected the cells you want to compose a workflow with, click on the 'Add to Workspace' button."}),"\n",(0,a.jsx)(t.h3,{id:"special-components",children:"Special Components"}),"\n",(0,a.jsx)(t.p,{children:"In the 'Experiment Manager' page you can compose workflows using special components. These components are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Splitter: This component is used to split an output array from a call into its elements and feed each element to the\nnext cell. That way the next cell will be executed in parallel as many times as the number of elements in the array."}),"\n",(0,a.jsx)(t.li,{children:"Merger: This component is used to merge the outputs of multiple cells into a single array."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"cells-catalog",children:"Cells Catalog"}),"\n",(0,a.jsx)(t.p,{children:"The cells catalog contains all the cells that have been containerized."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Cells Catalog",src:n(7952).Z+"",width:"991",height:"508"})}),"\n",(0,a.jsx)(t.h2,{id:"notebook-search",children:"Notebook Search"}),"\n",(0,a.jsx)(t.p,{children:"In the 'Notebook Search' page you can search for notebooks relevant to your research. To search for notebooks click on\nthe icon in the middle left of the page. There you can search for notebooks."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Notebook Search",src:n(754).Z+"",width:"1081",height:"424"})}),"\n",(0,a.jsx)(t.p,{children:"The results will be displayed in the left panel. If you clik on a result you will be shown some relevant information\nsuch its title, link, summary etc. If you click on the 'More' button you will be redirected to the notebook where you\ncan download it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Notebook Search",src:n(2411).Z+"",width:"464",height:"860"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Notebook Search",src:n(184).Z+"",width:"1841",height:"971"})}),"\n",(0,a.jsx)(t.h2,{id:"jupyterlab-git",children:"Jupyterlab-git"}),"\n",(0,a.jsxs)(t.p,{children:["In all VLs there is a Git integration with jupyterlab-git.\nTo clone and push to a repository you can follow the instructions from here: ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/jupyterlab-git/",children:"jupyterlab-git"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7952:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cells_catalog_1-a51b936375c6df189c4274dd3bd1dc1e.png"},6352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/component_containerizer_1-89c4b8403bcbe4f53cd7462fa2359bc8.png"},3944:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/component_containerizer_conf_1-9ce69c703a7b780adbfb968e37a56d77.png"},5703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/experimenter_manager_7-763d9157a11a2992221f6d75ea44ceb6.png"},4015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/n-a-a-vre_interface_1-441fe6fcba0c3cac6eb3a9294e33d740.png"},754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notebook_search_1-681830ef694b98c4459e6b81f371a063.png"},2411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notebook_search_2-b9fcd1a2f6ebc23b30bea2223be70f89.png"},184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notebook_search_3-287346427ffbd78c94acb5548293c412.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);