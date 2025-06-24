import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./iframe-D0B5DeWi.js";import{C as x}from"./Card-DrwTiOWs.js";const T=({items:g})=>{const[c,S]=I.useState(null),f=e=>{S(c===e?null:e)};return t.jsx("div",{className:"accordion-container",children:g.map((e,a)=>t.jsxs("div",{className:"border-b",children:[t.jsxs("button",{className:"accordion-button",onClick:()=>f(a),children:[t.jsx("span",{children:e.title}),t.jsx("span",{className:`icon ${c?"icon-open":""}`,children:"▼"})]}),c===a&&t.jsx("div",{className:"accordion-content",children:t.jsx(x,{title:e.cardTitle,description:e.cardContent})})]},a))})};T.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""}}};const{fn:y}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Accordion",component:T},n={args:{items:[{title:"Section 1",cardTitle:"Card 1",cardContent:"This is the content of card 1."},{title:"Section 2",cardTitle:"Card 2",cardContent:"This is the content of card 2."}]}},o={args:{items:[{title:"Only Section",cardTitle:"Single Card",cardContent:"This is the only card in the accordion."}]}},r={args:{items:[{title:"Introduction",cardTitle:"Intro Card",cardContent:"Welcome to the introduction section."},{title:"Details",cardTitle:"Details Card",cardContent:"Here are more details about the topic."},{title:"Conclusion",cardTitle:"Conclusion Card",cardContent:"This is the conclusion of the accordion."}]}};var i,s,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Section 1",
      cardTitle: "Card 1",
      cardContent: "This is the content of card 1."
    }, {
      title: "Section 2",
      cardTitle: "Card 2",
      cardContent: "This is the content of card 2."
    }]
  }
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Only Section",
      cardTitle: "Single Card",
      cardContent: "This is the only card in the accordion."
    }]
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,C,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Introduction",
      cardTitle: "Intro Card",
      cardContent: "Welcome to the introduction section."
    }, {
      title: "Details",
      cardTitle: "Details Card",
      cardContent: "Here are more details about the topic."
    }, {
      title: "Conclusion",
      cardTitle: "Conclusion Card",
      cardContent: "This is the conclusion of the accordion."
    }]
  }
}`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const b=["Default","SingleItem","MultipleItems"];export{n as Default,r as MultipleItems,o as SingleItem,b as __namedExportsOrder,D as default};
