import{j as f}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-z6lfEctI.js";import{C as x}from"./Card-BbdmeYZC.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,b={title:"Components/Card",component:x},a={args:{title:"Basic Card",description:"This is a basic card without image or footer."}},t={args:{title:"Card with Image",description:"This card includes an image at the top.",image:"https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop"}},e={args:{title:"Card with Footer",description:"This card includes a footer section.",footer:f.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Action"})}},o={args:{title:"Full Card",description:"This card includes an image and a footer.",image:"https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop",footer:f.jsx("div",{className:"text-sm text-gray-500",children:"Footer content here"})}};var r,s,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Basic Card',
    description: 'This is a basic card without image or footer.'
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,n,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop'
  }
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Card with Footer',
    description: 'This card includes a footer section.',
    footer: <button className="bg-blue-500 text-white px-4 py-2 rounded">Action</button>
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Full Card',
    description: 'This card includes an image and a footer.',
    image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop',
    footer: <div className="text-sm text-gray-500">Footer content here</div>
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const _=["Basic","WithImage","WithFooter","FullCard"];export{a as Basic,o as FullCard,e as WithFooter,t as WithImage,_ as __namedExportsOrder,b as default};
