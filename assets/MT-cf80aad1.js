import{_ as f}from"./MoviesItem-c5cf47d0.js";import{f as h,r as k,g as p,h as w,j as m,k as s,o as n,c as u,l as r,t as V,F as x,m as B,n as _,a as P,p as F}from"./index-9d58c6ea.js";const M={key:0,class:"movies"},N={class:"container"},R={class:"movies__title"},T={class:"movies__content"},C={__name:"MT",props:["type"],setup(l){const a=l,e=h();let t=k(1),d=p(()=>e.total_result),c=p(()=>a.type=="movie"?e.movie:e.tv);const v=async()=>{a.type=="movie"?e.movie=null:e.tv=null,t.value+1,await e.getPopular(a.type,t.value),window.scrollTo({top:0,behavior:"smooth"})};return w(()=>{e.getPopular(a.type,t.value)}),(b,i)=>{const y=m("vue-awesome-paginate"),g=m("loader");return s(c)?(n(),u("section",M,[r("div",N,[r("h2",R,V(l.type=="movie"?"Все фильмы":"Все сериалы"),1),r("div",T,[(n(!0),u(x,null,B(s(c),o=>(n(),_(f,{key:o.id,type:l.type,content:o},null,8,["type","content"]))),128))]),P(y,{"total-items":s(d),"items-per-page":20,"max-pages-shown":3,modelValue:s(t),"onUpdate:modelValue":i[0]||(i[0]=o=>F(t)?t.value=o:t=o),"on-click":v},null,8,["total-items","modelValue"])])])):(n(),_(g,{key:1}))}}};export{C as _};
