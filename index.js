import{a as w,S,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function g(o,t){const i="https://pixabay.com/api/",s={key:"51766868-0679c5e91819ef737119e63ee",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await w.get(i,{params:s})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".btn-load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:b,downloads:v})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${s}"
            >
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
              />

              <ul class="img-info">
                <li>
                    <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${r}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${n}</p>
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
          </li>`).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){m.innerHTML=""}function y(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}function B(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}const P=document.querySelector(".form"),$=document.querySelector(".search-input"),E=document.querySelector(".btn-load-more");let c="",a=1;const O=15;document.addEventListener("DOMContentLoaded",d);function L(o,t){const i=Math.ceil(t/O);o<i?B():d()}P.addEventListener("submit",async o=>{if(o.preventDefault(),c=$.value.trim(),a=1,!c){l.warning({title:"Warning",message:"This field must be filled",position:"topRight"});return}M(),y(),d();try{const t=await g(c,a);if(u(),t.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),L(a,t.totalHits)}catch{u(),l.error({title:"Error",message:"Please try again",position:"bottomRight"})}});E.addEventListener("click",async()=>{a+=1,y();try{const o=await g(c,a);if(u(),o.hits.length===0){l.info({title:"Info",message:"We are sorry, but you have reached the end of search results.",position:"bottomRight"}),d();return}h(o.hits),L(a,o.totalHits);const t=document.querySelectorAll(".gallery-item");if(t.length>0){const i=t[0].getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch{u(),l.error({title:"Error",message:"Please try again",position:"bottomRight"})}});
//# sourceMappingURL=index.js.map
