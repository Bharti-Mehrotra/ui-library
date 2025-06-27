import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-yhjPo1Cm.js";import"./Card-ChCV6_-g.js";var n=(e=>(e.Single="single",e.Multiple="multiple",e))(n||{}),a=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(a||{});const C=({type:e="single",size:I="medium",items:d})=>{const[p,u]=x.useState([]),M=s=>{u(e==="single"?p[0]===s?[]:[s]:t=>t.includes(s)?t.filter(r=>r!==s):[...t,s])};return o.jsx("div",{className:`accordion accordion-${I}`,children:d==null?void 0:d.map((s,t)=>{const r=p.includes(t);return o.jsxs("div",{className:"accordion-item",children:[o.jsxs("button",{onClick:()=>M(t),className:"accordion-header accordion-button",children:[o.jsx("span",{children:s.title}),o.jsx("span",{className:"accordion-icon",children:r?"−":"+"})]}),o.jsx("div",{className:`accordion-content ${r?"max-h-96":"max-h-0"}`,children:r&&o.jsx("div",{className:"accordion-card",children:s.cardContent})})]},t)})})};C.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"AccordionType"},description:"",defaultValue:{value:"AccordionType.Single",computed:!0}},size:{required:!1,tsType:{name:"AccordionSize"},description:"",defaultValue:{value:"AccordionSize.Medium",computed:!0}},items:{required:!1,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""}}};const L={title:"Components/Accordion",component:C,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:Object.values(n)},size:{control:{type:"select"},options:Object.values(a)}}},m=[{title:"Introduction",cardTitle:"Intro Card",cardContent:"Welcome to the introduction section."},{title:"Details",cardTitle:"Details Card",cardContent:"Here are more details about the topic."},{title:"Conclusion",cardTitle:"Conclusion Card",cardContent:"This is the conclusion of the accordion."}],c={args:{type:n.Single,size:a.Medium,items:m}},i={args:{type:n.Multiple,size:a.Large,items:m}},l={args:{type:n.Single,size:a.Small,items:m}};var g,S,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: AccordionType.Single,
    size: AccordionSize.Medium,
    items: sampleItems
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,A,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: AccordionType.Multiple,
    size: AccordionSize.Large,
    items: sampleItems
  }
}`,...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var T,j,z;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: AccordionType.Single,
    size: AccordionSize.Small,
    items: sampleItems
  }
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const O=["SingleMedium","MultipleLarge","SingleSmall"];export{i as MultipleLarge,c as SingleMedium,l as SingleSmall,O as __namedExportsOrder,L as default};
