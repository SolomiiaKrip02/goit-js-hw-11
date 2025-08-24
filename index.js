import{a as m,S as h,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51941180-25d97e4841ef256248244227c",g="https://pixabay.com/api/";function y(i){return m.get(g,{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(o=>o.data).catch(o=>{throw console.error(o),new Error("Error fetching images")})}const l=document.getElementById("gallery"),d=document.getElementById("loader");let c;function v(i){const o=i.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:s,comments:f,downloads:u})=>`
    <li class="photo-card">
      <a href="${n}">
        <img src="${t}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <div><b>Likes:</b> ${r}</div>
        <div><b>Views:</b> ${s}</div>
        <div><b>Comments:</b> ${f}</div>
        <div><b>Downloads:</b> ${u}</div>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new h(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!0}),document.querySelectorAll(".photo-card img").forEach(t=>{t.style.transition="transform 0.3s",t.addEventListener("mouseenter",()=>t.style.transform="scale(1.05)"),t.addEventListener("mouseleave",()=>t.style.transform="scale(1)")})}function L(){l.innerHTML=""}function b(){d.classList.remove("is-hidden")}function E(){d.classList.add("is-hidden")}const w=document.getElementById("search-form");w.addEventListener("submit",async i=>{i.preventDefault();const o=i.target.elements["search-text"].value.trim();if(!o){a.info({title:"Інформація",message:"Введіть пошуковий запит",position:"topRight"});return}L(),b();try{const t=await y(o);t.hits.length===0?a.warning({title:"Увага",message:"No images found. Try another search.",position:"topRight"}):v(t.hits)}catch(t){a.error({title:"Помилка",message:"Error fetching images",position:"topRight"}),console.error(t)}finally{E()}});
//# sourceMappingURL=index.js.map
