(()=>{var e={};e.id=38,e.ids=[38],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7282:e=>{"use strict";e.exports=require("process")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9089:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>l,routeModule:()=>x,tree:()=>c}),r(1747),r(9603),r(2523);var s=r(3191),a=r(8716),i=r(7922),n=r.n(i),o=r(5231),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);r.d(t,u);let c=["",{children:["events",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1747)),"C:\\Users\\ABHISHEK\\Documents\\Projects\\informatyka\\src\\app\\events\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9603)),"C:\\Users\\ABHISHEK\\Documents\\Projects\\informatyka\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,2523)),"C:\\Users\\ABHISHEK\\Documents\\Projects\\informatyka\\src\\app\\not-found.tsx"]}],l=["C:\\Users\\ABHISHEK\\Documents\\Projects\\informatyka\\src\\app\\events\\page.tsx"],d="/events/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/events/page",pathname:"/events",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1519:(e,t,r)=>{Promise.resolve().then(r.bind(r,8336))},5047:(e,t,r)=>{"use strict";var s=r(7389);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},4921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(326);function a(e){return s.jsx("div",{className:"w-full flex items-center justify-start gap-2 border-l-[7px] border-breakerDay-600",children:s.jsx("span",{className:"dark:text-black-100 md:text-5xl lg:text-5xl text-3xl font-semibold bg-breakerDay-600 h-fit ml-1 text-white",children:e?.title})})}r(7577)},1827:(e,t,r)=>{"use strict";r.d(t,{db:()=>o,t:()=>u});var s=r(2585),a=r(8166),i=r(1552);let n=(0,s.ZF)({apiKey:"AIzaSyD_rsq9xIuDSTlBlP4Yy6n0IhpmFD1qUVQ",authDomain:"informatyka-4b6e6.firebaseapp.com",projectId:"informatyka-4b6e6",storageBucket:"informatyka-4b6e6.appspot.com",messagingSenderId:"187016778537",appId:"1:187016778537:web:a2e5dd7cc8d10b0e399d38",measurementId:"G-Y598Q19L3C"}),o=(0,a.ad)(n),u=(0,i.cF)(n)},8336:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var s=r(326),a=r(7577);r(8495),r(1827);var i=r(4921),n=r(6226),o=r(434),u=r(5047);function c(e){return(0,u.useRouter)(),s.jsx(o.default,{href:`/events/${e?.event?.id}`,children:s.jsx("div",{onClick:()=>{},className:"w-full dark:bg-black-100 flex-1 flex flex-col items-start justify-center bg-white shadow-md rounded-[10px] gap-4 cursor-pointer",children:s.jsx(n.default,{src:e?.event?.imgUrl,width:700,height:700,alt:"",className:"rounded-[8px] h-full w-full"})})})}let l=()=>(0,s.jsxs)("div",{className:"animate-pulse w-full",children:[s.jsx("div",{className:"h-64 bg-gray-300 dark:bg-gray-800 rounded-md"}),(0,s.jsxs)("div",{className:"space-y-4 mt-4",children:[s.jsx("div",{className:"h-4 bg-gray-300 dark:bg-gray-800 rounded"}),s.jsx("div",{className:"h-4 bg-gray-300 dark:bg-gray-800  rounded w-3/4"})]})]});function d(e){let{eventList:t,isLoading:r}=e;return r?s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Array(6).fill(0).map((e,t)=>s.jsx(l,{},t))}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((e,t)=>s.jsx(c,{event:e},t))})}function p(){let[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)(!0);return s.jsx("div",{className:"px-[5vw] py-[2rem] dark:bg-black-100",children:(0,s.jsxs)("div",{className:"flex flex-col gap-8",children:[s.jsx(i.Z,{title:"Events"}),s.jsx(d,{eventList:e,isLoading:r})]})})}},1747:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(9510),a=r(8570);let i=(0,a.createProxy)(String.raw`C:\Users\ABHISHEK\Documents\Projects\informatyka\src\widgets\EventsPage\view.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let u=(0,a.createProxy)(String.raw`C:\Users\ABHISHEK\Documents\Projects\informatyka\src\widgets\EventsPage\view.tsx#default`);function c(){return s.jsx(u,{})}r(1159)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[689,597,57],()=>r(9089));module.exports=s})();