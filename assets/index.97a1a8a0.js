import{r as n,o as t,c as e,a as o,t as s,b as a,d as i,w as l,e as r,f as d,g as x,h as u}from"./vendor.14eac9a0.js";const c={},g={key:0,class:"bg-white shadow"},m={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},p={class:"text-3xl font-bold leading-tight text-gray-900"};c.render=function(i,l){const r=n("router-view");return t(),e("div",null,[i.$route.meta.title?(t(),e("header",g,[o("div",m,[o("h1",p,s(i.$route.meta.title),1)])])):a("",!0),o("main",null,[o(r)])])};const f={},h={class:"inline-flex ml-3 rounded-md shadow"},b=o("a",{target:"_blank",href:"https://github.com/rsoteloa",class:"\n        inline-flex\n        items-center\n        justify-center\n        px-5\n        py-3\n        text-base\n        font-medium\n        leading-6\n        text-indigo-600\n        transition\n        duration-150\n        ease-in-out\n        bg-white\n        border border-transparent\n        rounded-md\n        hover:text-indigo-500\n        focus:outline-none\n      "},"Learn more",-1);f.render=function(n,o){return t(),e("div",h,[b])};const y=i({components:{ButtonRepo:f}}),w={class:"bg-gray-50"},v={class:"\n        max-w-screen-xl\n        px-4\n        py-12\n        mx-auto\n        sm:px-6\n        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between\n      "},k=o("h2",{class:"\n          text-3xl\n          font-extrabold\n          leading-9\n          tracking-tight\n          text-gray-900\n          sm:text-4xl sm:leading-10\n        "},[r(" Hello World 🦙🔥📞🦙🔥! "),o("br"),o("span",{class:"text-indigo-600"},"WIP 🚧")],-1),j={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},B={class:"inline-flex rounded-md shadow"},P=r("Next Page");y.render=function(s,a,i,r,d,x){const u=n("router-link"),c=n("ButtonRepo");return t(),e("div",w,[o("div",v,[k,o("div",j,[o("div",B,[o(u,{to:"/about",class:"\n              inline-flex\n              items-center\n              justify-center\n              px-5\n              py-3\n              text-base\n              font-medium\n              leading-6\n              text-white\n              transition\n              duration-150\n              ease-in-out\n              bg-indigo-600\n              border border-transparent\n              rounded-md\n              hover:bg-indigo-500\n              focus:outline-none\n            "},{default:l((()=>[P])),_:1})]),o(c)])])])};const R=i({components:{ButtonRepo:f}}),H={class:"bg-gray-50"},W={class:"\n        max-w-screen-xl\n        px-4\n        py-12\n        mx-auto\n        sm:px-6\n        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between\n      "},_=o("h2",{class:"\n          text-3xl\n          font-extrabold\n          leading-9\n          tracking-tight\n          text-gray-900\n          sm:text-4xl sm:leading-10\n        "},[r(" About Page "),o("br"),o("span",{class:"text-indigo-600"},"WIP 🚧")],-1),A={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},I={class:"inline-flex rounded-md shadow"},N=r("Back Home");R.render=function(s,a,i,r,d,x){const u=n("router-link"),c=n("ButtonRepo");return t(),e("div",H,[o("div",W,[_,o("div",A,[o("div",I,[o(u,{to:"/",class:"\n              inline-flex\n              items-center\n              justify-center\n              px-5\n              py-3\n              text-base\n              font-medium\n              leading-6\n              text-white\n              transition\n              duration-150\n              ease-in-out\n              bg-indigo-600\n              border border-transparent\n              rounded-md\n              hover:bg-indigo-500\n              focus:outline-none\n            "},{default:l((()=>[N])),_:1})]),o(c)])])])};const $={},F={class:"bg-white shadow"},L=o("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[o("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1);$.render=function(n,o){return t(),e("header",F,[L])};const q=[{path:"/",component:y,meta:{title:"Home"}},{path:"/about",meta:{title:"About"},component:R},{path:"/:path(.*)",component:$}],z=d(c),C=x({history:u(),routes:q});z.use(C),z.mount("#app");
