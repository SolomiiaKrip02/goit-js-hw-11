import{a as u,S as m}from"./assets/vendor-D3cdi7O1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="51941180-25d97e4841ef256248244227c",p="https://pixabay.com/api/";function y(n){return u.get(p,{params:{key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(o=>o.data).catch(o=>{throw console.error(o),new Error("Error fetching images")})}const c=document.getElementById("gallery"),l=document.getElementById("loader");let i;function g(n){const o=n.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:s,comments:d,downloads:f})=>`
    <li class="photo-card">
      <a href="${a}">
        <img src="${t}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <div><b>Likes:</b> ${r}</div>
        <div><b>Views:</b> ${s}</div>
        <div><b>Comments:</b> ${d}</div>
        <div><b>Downloads:</b> ${f}</div>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!0}),document.querySelectorAll(".photo-card img").forEach(t=>{t.style.transition="transform 0.3s",t.addEventListener("mouseenter",()=>t.style.transform="scale(1.05)"),t.addEventListener("mouseleave",()=>t.style.transform="scale(1)")})}function v(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const E=document.getElementById("search-form");E.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(o){v(),L();try{const t=await y(o);t.hits.length===0?alert("No images found. Try another search."):g(t.hits)}catch(t){alert("Error fetching images"),console.error(t)}finally{b()}}});
//# sourceMappingURL=index.js.map
