import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-B1poWQru.js";const w=({title:o,description:N,image:i,footer:c})=>e.jsxs("div",{className:"card-container",children:[i&&e.jsx("img",{src:i,alt:o,className:"card-image"}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:o}),e.jsx("p",{className:"card-description",children:N}),c&&e.jsx("div",{className:"card-footer",children:c})]})]});w.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const{fn:y}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Card",component:w},a={args:{title:"Basic Card",description:"This is a basic card without image or footer."}},t={args:{title:"Card with Image",description:"This card includes an image at the top.",image:"https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop"}},r={args:{title:"Card with Footer",description:"This card includes a footer section.",footer:e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Action"})}},s={args:{title:"Full Card",description:"This card includes an image and a footer.",image:"https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop",footer:e.jsx("div",{className:"text-sm text-gray-500",children:"Footer content here"})}};var n,d,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Basic Card',
    description: 'This is a basic card without image or footer.'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Card with Footer',
    description: 'This card includes a footer section.',
    footer: <button className="bg-blue-500 text-white px-4 py-2 rounded">Action</button>
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,T,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Full Card',
    description: 'This card includes an image and a footer.',
    image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop',
    footer: <div className="text-sm text-gray-500">Footer content here</div>
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const _=["Basic","WithImage","WithFooter","FullCard"];export{a as Basic,s as FullCard,r as WithFooter,t as WithImage,_ as __namedExportsOrder,F as default};
