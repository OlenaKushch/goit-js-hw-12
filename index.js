import{a as w,S as P,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function g(r,t){const e="https://pixabay.com/"+"/api",o={key:"51766868-0679c5e91819ef737119e63ee",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await w.get(e,{params:o})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".btn-load-more"),S=new P(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const t=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:o,views:s,comments:b,downloads:v})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
              />

              <ul class="img-info">
                <li>
                    <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${o}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${s}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${b}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${v}</p>
                </li>
              </ul>

            </a>
          </li>`).join("");m.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){m.innerHTML=""}function y(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}function M(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".search-input"),E=document.querySelector(".btn-load-more");let c="",n=1;const O=15;document.addEventListener("DOMContentLoaded",u);function L(r,t){const i=Math.ceil(t/O);r<i?M():u()}B.addEventListener("submit",async r=>{if(r.preventDefault(),c=$.value.trim(),n=1,!c){l.warning({title:"Warning",message:"This field must be filled",position:"topRight"});return}q(),y(),u();try{const t=await g(c,n);if(d(),t.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),L(n,t.totalHits)}catch{d(),l.error({title:"Error",message:"Please try again",position:"bottomRight"})}});E.addEventListener("click",async()=>{n+=1,y();try{const r=await g(c,n);if(d(),r.hits.length===0){l.info({title:"Info",message:"We are sorry, but you have reached the end of search results.",position:"bottomRight"}),u();return}h(r.hits),L(n,r.totalHits);const t=document.querySelectorAll(".gallery-item");if(t.length>0){const i=t[0].getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch{d(),l.error({title:"Error",message:"Please try again",position:"bottomRight"})}});
//# sourceMappingURL=index.js.map
