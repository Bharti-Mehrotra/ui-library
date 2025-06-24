import{j as q}from"./jsx-runtime-D_zvdyIk.js";var r=(e=>(e.Primary="primary",e.Secondary="secondary",e.Danger="danger",e))(r||{}),c=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(c||{});const T=({type:e="primary",backgroundColor:M,size:x="medium",label:k,disabled:u=!1,...C})=>{const E=["btn",`btn-${e}`,`btn-${x}`,u?"btn-disabled":""].join(" ");return q.jsx("button",{disabled:u,className:E,...C,children:k})};T.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"ButtonType.Primary",computed:!0},required:!1},size:{defaultValue:{value:"ButtonSize.Medium",computed:!0},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const{fn:h}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Button",component:T,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{onClick:{action:"clicked"},backgroundColor:{control:"color"},type:{control:{type:"select"},options:Object.values(r)},size:{control:{type:"select"},options:Object.values(c)}}},a={args:{type:r.Primary,label:"Primary"}},s={args:{type:r.Secondary,label:"Secondary"}},t={args:{type:r.Danger,label:"Danger"}},o={args:{size:c.Large,label:"Button"}},n={args:{size:c.Small,label:"Button"}},l={args:{disabled:!0,label:"Button"}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: ButtonType.Primary,
    label: 'Primary'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,g,y;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: ButtonType.Secondary,
    label: 'Secondary'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,S,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: ButtonType.Danger,
    label: 'Danger'
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var B,D,_;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.Large,
    label: 'Button'
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var P,v,z;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.Small,
    label: 'Button'
  }
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var O,j,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Button'
  }
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const R=["Primary","Secondary","Danger","Large","Small","Disabled"];export{t as Danger,l as Disabled,o as Large,a as Primary,s as Secondary,n as Small,R as __namedExportsOrder,N as default};
