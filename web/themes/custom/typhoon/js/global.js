!function(){var e={926:function(e,t,o){"use strict";var r={};o.r(r);var n={};o.r(n);var s={};o.r(s);var i=function(e,t){e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)},a=function(e,t){e.style.removeProperty("display");var o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.display=o;var r=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?a(e,t):i(e,t)},l=document.querySelector(".js-mobile-nav-btn"),d=document.querySelector(".js-mobile-menu"),u=document.querySelectorAll(".js-main-nav-select");l.addEventListener("click",(function(e){var t=document.querySelector("body"),o=document.querySelector(".mob-btn-top"),r=document.querySelector(".mob-btn-middle"),n=document.querySelector(".mob-btn-bottom");t.classList.toggle("overflow-hidden"),d.classList.contains("js-mobile-open")?(d.classList.remove("js-mobile-open"),d.classList.add("js-mobile-close"),d.style.right="-100vw",l.classList.add("flex"),l.classList.remove("block"),o.classList.remove("absolute","-translate-y-1/2","-translate-x-1/2","top-1/2","left-1/2","rotate-45"),r.classList.remove("hidden"),n.classList.remove("absolute","-translate-y-1/2","-translate-x-1/2","top-1/2","left-1/2","-rotate-45")):d.classList.contains("js-mobile-close")&&(d.style.right="48px",d.classList.remove("js-mobile-close"),d.classList.add("js-mobile-open"),l.classList.add("block"),l.classList.remove("flex"),o.classList.add("absolute","-translate-y-1/2","-translate-x-1/2","top-1/2","left-1/2","rotate-45"),r.classList.add("hidden"),n.classList.add("absolute","-translate-y-1/2","-translate-x-1/2","top-1/2","left-1/2","-rotate-45"))})),u.forEach((function(e){var t=e.querySelector(".icon-wrap"),o=e.querySelector("ul.main-nav--sub-list"),r=e.querySelector("i"),n="fa-plus",s="fa-minus";t.addEventListener("click",(function(e){if(c(o,300),r.classList.contains(n))r.classList.remove(n),r.classList.add(s),o.setAttribute("aria-expanded",!0);else{if(!r.classList.contains(s))return;r.classList.remove(s),r.classList.add(n),o.setAttribute("aria-expanded",!1)}}))})),window.addEventListener("resize",(function(e){window.matchMedia("(min-width: 768px)").matches?d.style.right="0":d.style.right="-100vw"}));o(218);document.querySelector(".js-main-search-button").addEventListener("click",(function(e){var t=document.querySelector(".js-search-wrapper");c(t)})),document.querySelectorAll(".js-side-nav-select").forEach((function(e){var t="fa-plus",o="fa-minus",r=e.querySelector(".icon-wrap"),n=e.querySelector("i"),s=e.querySelector("ul.side-nav--sub-list");r.addEventListener("click",(function(e){if(c(s,300),n.classList.contains(t))n.classList.remove(t),n.classList.add(o),s.setAttribute("aria-expanded",!0);else{if(!n.classList.contains(o))return;n.classList.remove(o),n.classList.add(t),s.setAttribute("aria-expanded",!1)}}))}));document.querySelectorAll(".show--item").forEach((function(e){var t=document.querySelector(".show--title"),o=t.getAttribute("aria-selected"),r=e.querySelector(".show--content"),n=e.querySelector("span");e.addEventListener("click",(function(){c(r,300),n.classList.toggle("rotate-180"),"false"===o?(t.setAttribute("aria-selected",!0),r.setAttribute("aria-expanded",!0)):(t.setAttribute("aria-selected",!1),r.setAttribute("aria-expanded",!1))}))}));var f=document.querySelectorAll(".js-scrollTrigger"),y=document.querySelectorAll(".js-scrollTarget"),m=document.querySelector(".js-scrollSpyNav");function p(e,t){var o=document.querySelector("".concat(e)),r=setInterval((function(){y.forEach((function(e){var t=e.id.replace(/\W+/g,"-").replace(/^-|-$/g,"").toLowerCase();e.id=t})),f.forEach((function(e){var t=e.getAttribute("href").replace(/\W+/g,"-").replace(/^-|-$/g,"").toLowerCase();e.setAttribute("href","#".concat(t))})),o&&m.addEventListener("click",(function(e){window.innerWidth<=t&&m.classList.add("is-open")})),"complete"===document.readyState&&(clearInterval(r),window.onscroll=function(){y.forEach((function(e,t){var o=e.id,r=document.querySelector("a[href='#".concat(o,"']")),n=r.querySelector("span"),s=e.offsetHeight,i=e.offsetTop+s;window.location.toString().split("#")[0];0==t&&i-window.scrollY>58?(r.classList.add("is-active"),n.classList.remove("hidden")):i-window.scrollY>58&&e.offsetTop-window.scrollY<58?(n.classList.remove("hidden"),r.classList.add("is-active")):(n.classList.add("hidden"),r.classList.remove("is-active"))}))},function(e,t){var o=document.querySelector("".concat(e));f.forEach((function(e,r){var n=e.getAttribute("href"),s=e.querySelector("span"),i=document.querySelector("".concat(n)),a=i.offsetHeight,c=i.offsetTop+a;0==r&&c-window.scrollY>0&&(e.classList.add("is-active"),s.classList.remove("hidden")),o&&e.addEventListener("click",(function(e){window.innerWidth<=t&&(e.preventDefault(),m.classList.contains("is-open")&&(e.stopPropagation(),m.classList.remove("is-open"),i.scrollIntoView({behavior:"smooth"})))}))}))}(e,t))}),100)}o(692);var v=document.querySelector("header"),h=v.offsetHeight,g=document.documentElement,b=new ResizeObserver((function(e){e.forEach((function(e){var t=Math.floor(e.contentRect.height);g.style.setProperty("--header-height","".concat(t,"px"))}))}));g.style.setProperty("--header-height","".concat(h,"px")),b.observe(v),p(".toc-nav",768),p(".department-nav",1024)},692:function(){var e=document.querySelectorAll(".js-img-modal"),t=document.querySelector(".js-modal-outer"),o=t.querySelector("figure");function r(e){var r=e.currentTarget,n=r.querySelector("img").src,s=r.querySelector("img").alt;o.innerHTML='\n  <img class="max-w-full md:max-h-[90vh] lg:max-h-[80vh] shadow-dark-1 rounded" src="'.concat(n,'" alt="').concat(s,'" />\n  <figcaption class="text-white text-shadow-1 text-xl">').concat(s,"</figcaption>\n  "),t.classList.add("open","fixed","opacity-100","bg-opacity-50","z-50","pointer-events-auto"),o.classList.add("opacity-100")}function n(){t.classList.remove("open","opacity-100","z-50","pointer-events-auto")}e.forEach((function(e){return e.addEventListener("click",r)})),t.addEventListener("click",(function(e){!e.target.closest("figure")&&n()})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&n()}))},218:function(){document.querySelectorAll(".main-nav--item").forEach((function(e){var t=e.querySelector(".main-nav--dropdown"),o=e.querySelectorAll(".second-nav--item");e.addEventListener("mouseover",(function(){e.setAttribute("aria-expanded","true")})),e.addEventListener("mouseout",(function(){e.setAttribute("aria-expanded","false")})),e.addEventListener("focusin",(function(){e.setAttribute("aria-expanded","true")})),e.addEventListener("focusout",(function(){e.setAttribute("aria-expanded","false")})),o.forEach((function(e){e.addEventListener("mouseover",(function(){var r=e.querySelector("ul");o.forEach((function(e){if(e.classList.remove("js-active"),r){var o=r.offsetHeight;t.style.minHeight="".concat(o,"px")}})),e.classList.add("js-active"),e.setAttribute("aria-expanded","true")})),e.addEventListener("mouseout",(function(){e.setAttribute("aria-expanded","false")})),o.forEach((function(e){e.addEventListener("focusin",(function(){e.setAttribute("aria-expanded","true")}))})),e.addEventListener("focusout",(function(){e.setAttribute("aria-expanded","false")}))}))}))},833:function(){},827:function(){}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,o.x=function(){},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={713:0},t=[[926],[833],[827]],r=function(){},n=function(n,s){for(var i,a,c=s[0],l=s[1],d=s[2],u=s[3],f=0,y=[];f<c.length;f++)a=c[f],o.o(e,a)&&e[a]&&y.push(e[a][0]),e[a]=0;for(i in l)o.o(l,i)&&(o.m[i]=l[i]);for(d&&d(o),n&&n(s);y.length;)y.shift()();return u&&t.push.apply(t,u),r()},s=self.webpackChunkiowa_state_library_intranet=self.webpackChunkiowa_state_library_intranet||[];function i(){for(var r,n=0;n<t.length;n++){for(var s=t[n],i=!0,a=1;a<s.length;a++){var c=s[a];0!==e[c]&&(i=!1)}i&&(t.splice(n--,1),r=o(o.s=s[0]))}return 0===t.length&&(o.x(),o.x=function(){}),r}s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s));var a=o.x;o.x=function(){return o.x=a||function(){},(r=i)()}}();o.x()}();