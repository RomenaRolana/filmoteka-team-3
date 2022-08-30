const e=document.querySelector("#theme-switch-toggle"),t="light-theme",o="dark-theme";function r(){document.body.classList.toggle(o),document.body.classList.toggle(t),document.body.classList.contains(t)?(e.setAttribute("checked",!1),localStorage.setItem("active-theme",t)):document.body.classList.contains(o)&&(e.setAttribute("checked",!0),localStorage.setItem("active-theme",o))}document.body.classList.add(t),e.addEventListener("change",r),localStorage.getItem("active-theme")===o&&r();const a={API_KEY:"ade224e438a5cac910232dacab4d697a",POPULAR_URL:"https://api.themoviedb.org/3/trending/movie/day",GENRES_URL:"https://api.themoviedb.org/3/genre/movie/list",SEARCH_URL:"https://api.themoviedb.org/3/search/movie",STORAGE_KEY:"genres_key",LS_KEY_POPULAR_MOVIE:"popular_movie_key",LS_KEY_QUERY_MOVIE:"query_movie_key",LS_KEY_WATCH_MOVIE:"watch_movie_key",gallerySetEL:document.querySelector(".js-gallery__set"),backdropEl:document.querySelector(".js-backdrop"),modalInfoEL:document.querySelector(".js-modal__info"),containerModalInfo:document.querySelector(".js-film__container--info"),closeBtnModalInfo:document.querySelector(".js-btn__info--close"),watchedBtnModalInfo:document.querySelector(".js-btn__info--watched"),queueBtnModalInfo:document.querySelector(".js-btn__info--queue"),homePageGallery:document.querySelector(".gallery__set"),watchedBtnLibrary:document.querySelector(".lib__watched"),queueBtnLibrary:document.querySelector(".lib__queue"),galleryContainerLibrary:document.querySelector(".gallery__library__set"),IMG_URL:"https://image.tmdb.org/t/p/w500"};document.querySelector(".header__input"),document.querySelector(".form-icon"),document.querySelector(".form-notification");function n(e){const t=localStorage.getItem(a.STORAGE_KEY),o=JSON.parse(t).genresData,r=e.map((e=>o.find((t=>t.id==e)).name));return r.length>3?(r.splice(3),r[2]="Other"):0===r.length&&(r[0]="Genre unknown"),r.join(", ")}var c={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error(e.message)}}};function l(e){console.log("data",e);const t=e.map((({id:e,poster_path:t,genre_ids:o,release_date:r,title:c,vote_average:l})=>`<li class="gallery__item">\n                <a  class="gallery__item__link"  target="_blank" rel="noopener noreferrer">\n                   ${t?`<img class="gallery__item__img" data-id="${e}" src="${a.IMG_URL}${t}" alt="${c}">`:`<img class="gallery__item__img" data-id="${e}" src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg" alt="${c}">`} \n                    <div class="gallery__item__text">\n                        ${c?`<h3 class="gallery__item__title">${c}</h3>`:`<h3 class="gallery__item__title">${original_name}</h3>`}\n                        <div class="gallery__item__descr">\n                           ${o?`<p class="genre">${n(o)}`:""} ${r?`| <span class="genre">  ${r.slice(0,4)}</span>`:""} </p>    \n       <span class="rating">${l.toFixed(1)}</span>\n                        </div>\n                    </div>\n                </a>\n            </li>`)).join("");console.log(t),a.galleryContainerLibrary.insertAdjacentHTML("afterbegin",t)}a.watchedBtnLibrary&&a.watchedBtnLibrary.addEventListener("click",(async function(e){e.preventDefault(),a.watchedBtnLibrary.classList.add("btn__is-active"),a.queueBtnLibrary.classList.remove("btn__is-active"),console.log(a.galleryContainerLibrary);const t=await c.load(a.LS_KEY_WATCH_MOVIE);console.log(t),l(t)})),a.queueBtnLibrary&&a.queueBtnLibrary.addEventListener("click",(async function(e){e.preventDefault(),a.queueBtnLibrary.classList.add("btn__is-active"),a.watchedBtnLibrary.classList.remove("btn__is-active");const t=await c.load(a.LS_KEY_QUERY_MOVIE);console.log(t),l(t)}));const s={openModalFooter:document.querySelector(".footer-link"),closeModalBtnFooter:document.querySelector(".team-modal__close"),backdropFooter:document.querySelector(".team-modal"),galleryLink:document.querySelectorAll(".gallery-home"),btnModal:document.querySelector(".modal-close"),backdrop:document.querySelector(".backdrop"),galleryHome:document.querySelector(".gallery-home")};function i(){s.backdropFooter.classList.add("backdrop--hidden"),document.body.style.overflow="",window.removeEventListener("keydown",d)}function d(e){"Escape"===e.code&&i()}s.openModalFooter.addEventListener("click",(function(){s.backdropFooter.classList.remove("backdrop--hidden"),document.body.style.overflow="hidden",window.addEventListener("keydown",d)})),s.closeModalBtnFooter.addEventListener("click",i),s.backdropFooter.addEventListener("click",(function(e){e.currentTarget===e.target&&i()}));
//# sourceMappingURL=myLibrary.46dbd120.js.map
