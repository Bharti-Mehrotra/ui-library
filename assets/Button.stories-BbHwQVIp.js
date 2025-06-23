import{j as q}from"./jsx-runtime-D_zvdyIk.js";const _=({variant:k="primary",size:v="medium",backgroundColor:x,label:z,disabled:O=!1,...j})=>{const E=k==="primary"?"storybook-button--primary":"storybook-button--secondary",T=O?"opacity-50 cursor-not-allowed":"";return q.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${v}`,E,T].join(" "),style:{backgroundColor:x},...j,children:z})};_.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const{fn:C}=__STORYBOOK_MODULE_TEST__,L={title:"Components/Button",component:_,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:C()}},e={args:{variant:"primary",label:"Button"}},r={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}},s={args:{disabled:!0,label:"Button"}};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: 'Button'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var b,g,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,B,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Button'
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const V=["Primary","Secondary","Large","Small","Disabled"];export{s as Disabled,a as Large,e as Primary,r as Secondary,o as Small,V as __namedExportsOrder,L as default};
