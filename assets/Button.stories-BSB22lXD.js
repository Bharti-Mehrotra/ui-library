import{j}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-ujHM9Bgt.js";const v=({variant:T="primary",size:_="medium",backgroundColor:k,label:q,disabled:x=!1,...z})=>{const C=T==="primary"?"storybook-button--primary":"storybook-button--secondary",O=x?"opacity-50 cursor-not-allowed":"";return j.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${_}`,C,O].join(" "),style:{backgroundColor:k},...z,children:q})};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"primary"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:E}=__STORYBOOK_MODULE_TEST__,L={title:"Components/Button",component:v,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:E()}},e={args:{variant:"primary",label:"Button"}},r={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}},s={args:{disabled:!0,label:"Button"}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: 'Button'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,B,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Button'
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const V=["Primary","Secondary","Large","Small","Disabled"];export{s as Disabled,a as Large,e as Primary,r as Secondary,t as Small,V as __namedExportsOrder,L as default};
