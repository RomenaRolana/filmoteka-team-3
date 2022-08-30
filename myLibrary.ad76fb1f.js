function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("999qs",(function(e,t){const r=document.querySelector("#theme-switch-toggle"),o="light-theme",n="dark-theme";function c(){document.body.classList.toggle(n),document.body.classList.toggle(o),document.body.classList.contains(o)?(r.setAttribute("checked",!1),localStorage.setItem("active-theme",o)):document.body.classList.contains(n)&&(r.setAttribute("checked",!0),localStorage.setItem("active-theme",n))}document.body.classList.add(o),r.addEventListener("change",c),localStorage.getItem("active-theme")===n&&c()})),n.register("krGWQ",(function(t,r){e(t.exports,"refs",(function(){return o})),e(t.exports,"userSearch",(function(){return n}));const o={API_KEY:"ade224e438a5cac910232dacab4d697a",POPULAR_URL:"https://api.themoviedb.org/3/trending/movie/day",GENRES_URL:"https://api.themoviedb.org/3/genre/movie/list",SEARCH_URL:"https://api.themoviedb.org/3/search/movie",STORAGE_KEY:"genres_key",LS_KEY_POPULAR_MOVIE:"popular_movie_key",LS_KEY_QUERY_MOVIE:"query_movie_key",LS_KEY_WATCH_MOVIE:"watch_movie_key",gallerySetEL:document.querySelector(".js-gallery__set"),backdropEl:document.querySelector(".js-backdrop"),modalInfoEL:document.querySelector(".js-modal__info"),containerModalInfo:document.querySelector(".js-film__container--info"),closeBtnModalInfo:document.querySelector(".js-btn__info--close"),watchedBtnModalInfo:document.querySelector(".js-btn__info--watched"),queueBtnModalInfo:document.querySelector(".js-btn__info--queue"),homePageGallery:document.querySelector(".gallery__set"),watchedBtnLibrary:document.querySelector(".lib__watched"),queueBtnLibrary:document.querySelector(".lib__queue"),galleryContainerLibrary:document.querySelector(".gallery__library__set"),IMG_URL:"https://image.tmdb.org/t/p/w500"},n={userSearchInputRef:document.querySelector(".header__input"),searchButton:document.querySelector(".form-icon"),formNotificationErr:document.querySelector(".form-notification")}})),n.register("3Hr66",(function(t,r){e(t.exports,"renderGenresHomePage",(function(){return c}));var o=n("krGWQ");function c(e){const t=localStorage.getItem(o.refs.STORAGE_KEY),r=JSON.parse(t).genresData,n=e.map((e=>r.find((t=>t.id==e)).name));return n.length>3?(n.splice(3),n[2]="Other"):0===n.length&&(n[0]="Genre unknown"),n.join(", ")}})),n.register("5uEKZ",(function(t,r){e(t.exports,"default",(function(){return o}));var o={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error(e.message)}}}})),n.register("bTcpz",(function(e,t){const r={openModalFooter:document.querySelector(".footer-link"),closeModalBtnFooter:document.querySelector(".team-modal__close"),backdropFooter:document.querySelector(".team-modal"),galleryLink:document.querySelectorAll(".gallery-home"),btnModal:document.querySelector(".modal-close"),backdrop:document.querySelector(".backdrop"),galleryHome:document.querySelector(".gallery-home")};function o(){r.backdropFooter.classList.add("backdrop--hidden"),document.body.style.overflow="",window.removeEventListener("keydown",n)}function n(e){"Escape"===e.code&&o()}r.openModalFooter.addEventListener("click",(function(){r.backdropFooter.classList.remove("backdrop--hidden"),document.body.style.overflow="hidden",window.addEventListener("keydown",n)})),r.closeModalBtnFooter.addEventListener("click",o),r.backdropFooter.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}))})),n.register("bg8ey",(function(e,t){var r=n("krGWQ"),o=n("5uEKZ"),c=n("gJRDc");r.refs.gallerySetEL.addEventListener("click",a);const i=r.refs.galleryContainerLibrary;async function a(e){if("IMG"!==e.target.nodeName)return;const t=await o.default.load(r.refs.LS_KEY_POPULAR_MOVIE);let n=Number(e.target.dataset.id);!function(e){r.refs.containerModalInfo.insertAdjacentHTML("beforeend",(0,c.generateMarkupModalInfo)(e))}(t.find((e=>e.id===n))),document.body.classList.add("stop-scrolling"),window.addEventListener("keydown",l),r.refs.backdropEl.classList.remove("backdrop__is-hidden")}function s(){window.removeEventListener("keydown",l),r.refs.backdropEl.classList.add("backdrop__is-hidden"),document.body.classList.remove("stop-scrolling"),setTimeout((()=>{r.refs.containerModalInfo.innerHTML=""}),250)}function l(e){"Escape"===e.code&&s()}i&&i.addEventListener("click",a),r.refs.closeBtnModalInfo.addEventListener("click",s),r.refs.backdropEl.addEventListener("click",(function(e){e.currentTarget===e.target&&s()}))})),n.register("gJRDc",(function(t,r){e(t.exports,"generateMarkupModalInfo",(function(){return i}));var o=n("krGWQ"),c=n("jVmjn");function i({poster_path:e,title:t,vote_average:r,vote_count:n,popularity:i,original_title:a,genre_ids:s,id:l,overview:d}){return`<div class="tumb__screen">\n      ${e?`<img id="${l}" class="film-screen" src="${o.refs.IMG_URL}${e}" alt="${t}" />`:""}\n      </div>\n\n      <div class="film-container--descr">\n        ${t?`<h2  class="film-title">${t}</h2>`:a}\n        <table class="film-description">\n          <tr>\n            ${r||n?`<th class="title-description">Vote / Votes</th>\n            <td>\n              ${r?`<span class="description-vote">${r.toFixed(1)}</span> / `:""}\n              ${n?`<span class="description-votes">${n}</span>`:""}\n            </td>\n          </tr>`:""}\n          <tr>\n            ${i?`<th class="title-description">Popularity</th>\n            <td>${i.toFixed(1)}</td>`:""}\n          </tr>\n          <tr>\n            ${a?`<th class="title-description description-title-original">Original Title</th>\n            <td class="title-original-description">${a}</td>`:""}\n          </tr>\n          <tr>\n            ${s&&0!==s.length?`<th class="title-description description-genre">Genre</th>\n            <td>${(0,c.renderMarkupGenres)(s)}</td>`:""}\n          </tr>\n        </table>\n        ${d?`<p class="film-delineation--title">About</p>\n        <p class="film-delineation">${d}</p>`:""}\n        \n      </div>`}})),n.register("jVmjn",(function(t,r){e(t.exports,"renderMarkupGenres",(function(){return c}));var o=n("krGWQ");function c(e){const t=localStorage.getItem(o.refs.STORAGE_KEY),r=JSON.parse(t).genresData,n=e.map((e=>r.find((t=>t.id==e)).name)).join(", ");e.length;return n}}));
//# sourceMappingURL=myLibrary.ad76fb1f.js.map
