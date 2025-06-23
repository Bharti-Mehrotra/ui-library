import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./iframe-B1poWQru.js";const o=({title:h,content:f})=>{const[r,x]=A.useState(!1);return t.jsxs("div",{className:"accordion-container",children:[t.jsxs("button",{className:"accordion-header",onClick:()=>x(!r),children:[h,t.jsx("span",{className:"accordion-icon",children:r?"-":"+"})]}),r&&t.jsx("div",{className:"accordion-content",children:f})]})};o.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""}}};const{fn:_}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Accordion",component:o},n={args:{title:"Basic Accordion",content:"This is the content of the basic accordion."}},c={args:{title:"Accordion with Long Content",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10)}},e=()=>t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Section 1",content:"Content for section 1."}),t.jsx(o,{title:"Section 2",content:"Content for section 2."}),t.jsx(o,{title:"Section 3",content:"Content for section 3."})]});e.__docgenInfo={description:"",methods:[],displayName:"MultipleAccordions"};var s,i,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "Basic Accordion",
    content: "This is the content of the basic accordion."
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,p,l;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Accordion with Long Content",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10)
  }
}`,...(l=(p=c.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => <>\r
    <Accordion title="Section 1" content="Content for section 1." />\r
    <Accordion title="Section 2" content="Content for section 2." />\r
    <Accordion title="Section 3" content="Content for section 3." />\r
  </>`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const L=["Basic","LongContent","MultipleAccordions"];export{n as Basic,c as LongContent,e as MultipleAccordions,L as __namedExportsOrder,j as default};
