import{a as m,S as g,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=m.create({baseURL:"https://pixabay.com/api/",params:{key:"51766868-0679c5e91819ef737119e63ee",q:"query",image_type:"photo",orientation:"horizontal",safesearch:!0}});function y(r){return d.get("",{params:{q:r}}).then(i=>i.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const i=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:f})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${o}"
                alt="${e}"
              />

              <ul class="img-info">
                <li>
                    <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${t}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${s}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${p}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${f}</p>
                </li>
              </ul>

            </a>
          </li>`).join("");c.insertAdjacentHTML("beforeend",i),h.refresh()}function v(){c.innerHTML=""}function b(){u.classList.add("visible")}function n(){u.classList.remove("visible")}const q=document.querySelector(".form"),S=document.querySelector(".search-input");q.addEventListener("submit",r=>{r.preventDefault();const i=S.value.trim();if(!i){l.warning({title:"Warning",message:"This field must be filled",position:"topRight"});return}v(),b(),y(i).then(o=>{if(n(),o.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{n(),l.error({title:"Error",message:"Please try again",position:"topRight"})})});
//# sourceMappingURL=index.js.map
