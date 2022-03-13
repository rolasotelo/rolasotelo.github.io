import{r as e,o as n,c as t,a as o,t as a,b as s,d as l,w as r,e as i,f as d,g as u,h as x}from"./vendor.14eac9a0.js";const c={},m={key:0,class:"bg-white shadow"},g={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},p={class:"text-3xl font-bold leading-tight text-rolaCyan"};c.render=function(l,r){const i=e("router-view");return n(),t("div",null,[l.$route.meta.title?(n(),t("header",m,[o("div",g,[o("h1",p,a(l.$route.meta.title),1)])])):s("",!0),o("main",null,[o(i)])])};const f={},b={class:"inline-flex ml-3 rounded-md shadow"},h=o("a",{target:"_blank",href:"https://github.com/rolasotelo",class:"\n        inline-flex\n        items-center\n        justify-center\n        px-5\n        py-3\n        text-base\n        font-medium\n        leading-6\n        text-white\n        transition\n        duration-150\n        ease-in-out\n        border border-transparent\n        rounded-md\n        bg-rolaBlue\n        hover:bg-rolaRed\n        focus:outline-none\n      "},"Learn more",-1);f.render=function(e,o){return n(),t("div",b,[h])};const y=l({components:{ButtonRepo:f}}),w={class:"bg-rolaGrey"},v={class:"max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},k=o("h2",{class:"text-3xl font-extrabold leading-9 tracking-tight text-rolaCyan sm:text-4xl sm:leading-10"},[i(" Hola mundo 👋🏾 ! "),o("br"),o("span",{class:"text-rolaRed"},"WIP 🚧")],-1),R={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},B={class:"inline-flex rounded-md shadow"},j=i("Next Page");y.render=function(a,s,l,i,d,u){const x=e("router-link"),c=e("ButtonRepo");return n(),t("div",w,[o("div",v,[k,o("div",R,[o("div",B,[o(x,{to:"/about",class:"inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-rolaRed border border-transparent rounded-md hover:bg-rolaBlue focus:outline-none"},{default:r((()=>[j])),_:1})]),o(c)])])])};const H=l({components:{ButtonRepo:f}}),P={class:"bg-rolaGrey"},C={class:"\n        max-w-screen-xl\n        px-4\n        py-12\n        mx-auto\n        sm:px-6\n        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between\n      "},G=o("h2",{class:"\n          text-3xl\n          font-extrabold\n          leading-9\n          tracking-tight\n          text-rolaCyan\n          sm:text-4xl sm:leading-10\n        "},[i(" About Page "),o("br"),o("span",{class:"text-rolaRed"},"WIP 🚧")],-1),_={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},A={class:"inline-flex rounded-md shadow"},I=i("Back Home");H.render=function(a,s,l,i,d,u){const x=e("router-link"),c=e("ButtonRepo");return n(),t("div",P,[o("div",C,[G,o("div",_,[o("div",A,[o(x,{to:"/",class:"\n              inline-flex\n              items-center\n              justify-center\n              px-5\n              py-3\n              text-base\n              font-medium\n              leading-6\n              text-white\n              transition\n              duration-150\n              ease-in-out\n              bg-rolaRed\n              border border-transparent\n              rounded-md\n              hover:bg-rolaBlue\n              focus:outline-none\n            "},{default:r((()=>[I])),_:1})]),o(c)])])])};const N={},W={class:"bg-white shadow"},$=o("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[o("h1",{class:"text-3xl font-bold leading-tight text-gray-900"}," Not Found: How You Got Here 👷🏾‍♀️ ? ")],-1);N.render=function(e,o){return n(),t("header",W,[$])};const F=[{path:"/",component:y,meta:{title:"Home"}},{path:"/about",meta:{title:"About"},component:H},{path:"/:path(.*)",component:N}],L=d(c),Y=u({history:x(),routes:F});L.use(Y),L.mount("#app");
